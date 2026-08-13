import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

/**
 * Quote and enquiry endpoint.
 *
 * Runs server-side only. SMTP credentials are read from the environment and
 * never reach the browser. Submissions are checked for a honeypot value, an
 * implausibly fast submission time, and a per-IP rate limit before any mail
 * is sent.
 */
export const prerender = false;

const MAX_UPLOAD_MB = Number(import.meta.env.MAX_UPLOAD_MB || 10);
const MAX_BYTES = MAX_UPLOAD_MB * 1024 * 1024;
const RATE_LIMIT_MAX = Number(import.meta.env.RATE_LIMIT_MAX || 5);
const RATE_LIMIT_WINDOW = Number(import.meta.env.RATE_LIMIT_WINDOW || 600);

/** Extensions we are willing to receive as artwork. */
const ALLOWED_EXTENSIONS = new Set(['pdf', 'ai', 'eps', 'svg', 'png', 'jpg', 'jpeg', 'zip']);

/** Corresponding media types, checked as well as the extension. */
const ALLOWED_TYPES = new Set([
  'application/pdf',
  'application/postscript',
  'application/illustrator',
  'image/svg+xml',
  'image/png',
  'image/jpeg',
  'application/zip',
  'application/x-zip-compressed',
  'application/octet-stream',
]);

/**
 * Best-effort in-memory rate limit. On a serverless platform each instance
 * keeps its own counter, so this throttles bursts rather than guaranteeing a
 * global limit. It is deliberately paired with the honeypot and timing checks
 * rather than relied on alone.
 */
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW * 1000;
  const recent = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => t <= windowStart)) hits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT_MAX;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

/**
 * Strips ASCII control characters and trims, so nothing odd reaches the mail
 * body or gets a chance to break out of a header.
 */
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/g;

function clean(value: FormDataEntryValue | null, max = 500): string {
  if (typeof value !== 'string') return '';
  return value.replace(CONTROL_CHARS, ' ').trim().slice(0, max);
}

/** Header injection guard for anything interpolated into a mail header. */
function headerSafe(value: string): string {
  return value.replace(CONTROL_CHARS, ' ').slice(0, 200);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface Result {
  ok: boolean;
  message: string;
  status: number;
}

function respond(request: Request, result: Result): Response {
  const wantsJson =
    request.headers.get('x-requested-with') === 'fetch' ||
    (request.headers.get('accept') ?? '').includes('application/json');

  if (wantsJson) {
    return new Response(JSON.stringify({ ok: result.ok, message: result.message }), {
      status: result.status,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  // No-JavaScript fallback: land on the thank-you page, which is noindex.
  const location = result.ok ? '/thank-you/' : '/request-a-quote/?error=1';
  return new Response(null, { status: 303, headers: { location } });
}

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return respond(request, {
      ok: false,
      status: 400,
      message: 'We could not read that submission. Please try again.',
    });
  }

  // --- Spam checks -------------------------------------------------------

  // Honeypot: a real person never sees this field.
  if (clean(form.get('website'))) {
    // Answer as though it succeeded so a bot learns nothing.
    return respond(request, { ok: true, status: 200, message: 'Thank you.' });
  }

  const renderedAt = Number(clean(form.get('rendered_at')));
  if (Number.isFinite(renderedAt) && renderedAt > 0) {
    const elapsed = Date.now() - renderedAt;
    if (elapsed < 2500) {
      return respond(request, {
        ok: false,
        status: 429,
        message: 'That was submitted very quickly. Please try again.',
      });
    }
  }

  if (rateLimited(clientIp(request))) {
    return respond(request, {
      ok: false,
      status: 429,
      message: 'Too many enquiries from this connection. Please try again shortly.',
    });
  }

  // --- Validation --------------------------------------------------------

  const name = clean(form.get('name'), 80);
  const email = clean(form.get('email'), 120);
  const phone = clean(form.get('phone'), 30);
  const quantity = clean(form.get('quantity'), 40);
  const product = clean(form.get('product_locked'), 120) || clean(form.get('product'), 120);
  const message = clean(form.get('message'), 2000);
  const source = clean(form.get('source'), 80) || 'website';
  const consent = clean(form.get('consent'), 10);

  // The sleeve designer posts its configuration as a JSON string.
  const configRaw = clean(form.get('configuration'), 4000);

  const errors: string[] = [];
  if (!name) errors.push('name');
  if (!EMAIL_RE.test(email)) errors.push('email');
  if (!quantity) errors.push('quantity');
  if (!product) errors.push('product');
  if (consent !== 'yes') errors.push('consent');

  if (errors.length) {
    return respond(request, {
      ok: false,
      status: 400,
      message: 'Some required details are missing or invalid. Please check the form.',
    });
  }

  // --- Artwork upload ----------------------------------------------------

  const attachments: { filename: string; content: Buffer }[] = [];
  const file = form.get('artwork');

  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_BYTES) {
      return respond(request, {
        ok: false,
        status: 413,
        message: `That file is larger than ${MAX_UPLOAD_MB} MB. Please send a link instead.`,
      });
    }

    const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
    if (!ALLOWED_EXTENSIONS.has(extension) || !ALLOWED_TYPES.has(file.type || 'application/octet-stream')) {
      return respond(request, {
        ok: false,
        status: 415,
        message: 'That file type is not accepted. Please send a PDF, AI, EPS, SVG, PNG, JPG or ZIP.',
      });
    }

    // Rebuild the filename rather than trusting what the browser supplied.
    const safeName = `artwork-${Date.now()}.${extension}`;
    attachments.push({
      filename: safeName,
      content: Buffer.from(await file.arrayBuffer()),
    });
  }

  // --- Compose and send --------------------------------------------------

  const to = import.meta.env.SMTP_TO || 'info@conesleeves.co.uk';
  const fromName = import.meta.env.SMTP_FROM_NAME || 'Cone Sleeves UK';
  const fromEmail = import.meta.env.SMTP_FROM_EMAIL || 'info@conesleeves.co.uk';
  const host = import.meta.env.SMTP_HOST;
  const port = Number(import.meta.env.SMTP_PORT || 587);
  const user = import.meta.env.SMTP_USER;
  const pass = import.meta.env.SMTP_PASS;
  const cc = import.meta.env.SMTP_CC || undefined;

  if (!host || !user || !pass) {
    // Fail loudly in the server log, politely to the visitor. This is the
    // state before SMTP credentials are configured for the live site.
    console.error('[quote] SMTP is not configured — enquiry could not be sent.');
    return respond(request, {
      ok: false,
      status: 503,
      message:
        'Our enquiry form is not able to send right now. Please email info@conesleeves.co.uk and we will pick it up.',
    });
  }

  let configuration: Record<string, string> | null = null;
  if (configRaw) {
    try {
      const parsed: unknown = JSON.parse(configRaw);
      if (parsed && typeof parsed === 'object') {
        configuration = Object.fromEntries(
          Object.entries(parsed as Record<string, unknown>)
            .filter(([, v]) => typeof v === 'string' && v)
            .map(([k, v]) => [clean(k, 60), clean(v as string, 200)]),
        );
      }
    } catch {
      configuration = null;
    }
  }

  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone || '—'],
    ['Product / requirement', product],
    ['Quantity', quantity],
    ['Source', source],
    ['Artwork attached', attachments.length ? 'Yes' : 'No'],
  ];

  const configRows = configuration ? Object.entries(configuration) : [];

  const text = [
    `New enquiry from the Cone Sleeves UK website`,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    ...(configRows.length
      ? ['', 'Design Your Sleeve configuration:', ...configRows.map(([k, v]) => `  ${k}: ${v}`)]
      : []),
    '',
    'Message:',
    message || '(none)',
  ].join('\n');

  const html = `
    <h2 style="font:600 18px system-ui,sans-serif;color:#1f4415;margin:0 0 12px">New website enquiry</h2>
    <table style="border-collapse:collapse;font:14px system-ui,sans-serif">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><th align="left" style="padding:6px 14px 6px 0;color:#605c54;font-weight:600;vertical-align:top">${escapeHtml(k)}</th><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`,
        )
        .join('')}
    </table>
    ${
      configRows.length
        ? `<h3 style="font:600 15px system-ui,sans-serif;color:#1f4415;margin:18px 0 8px">Design Your Sleeve configuration</h3>
           <table style="border-collapse:collapse;font:14px system-ui,sans-serif">
             ${configRows
               .map(
                 ([k, v]) =>
                   `<tr><th align="left" style="padding:5px 14px 5px 0;color:#605c54;font-weight:600;vertical-align:top">${escapeHtml(k)}</th><td style="padding:5px 0">${escapeHtml(v)}</td></tr>`,
               )
               .join('')}
           </table>`
        : ''
    }
    <h3 style="font:600 15px system-ui,sans-serif;color:#1f4415;margin:18px 0 8px">Message</h3>
    <p style="font:14px/1.6 system-ui,sans-serif;white-space:pre-wrap;margin:0">${escapeHtml(message || '(none)')}</p>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: String(import.meta.env.SMTP_SECURE ?? '').toLowerCase() === 'true' || port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${headerSafe(fromName)}" <${headerSafe(fromEmail)}>`,
      to,
      cc,
      // Replying to the notification reaches the enquirer directly.
      replyTo: `"${headerSafe(name)}" <${headerSafe(email)}>`,
      subject: `Quote enquiry — ${headerSafe(product)} (${headerSafe(quantity)})`,
      text,
      html,
      attachments,
    });
  } catch (error) {
    console.error('[quote] send failed:', error);
    return respond(request, {
      ok: false,
      status: 502,
      message:
        'We could not send that enquiry. Please email info@conesleeves.co.uk or call us and we will pick it up.',
    });
  }

  return respond(request, {
    ok: true,
    status: 200,
    message: 'Thank you — your enquiry is with us and we will reply by email.',
  });
};

/** Anything other than POST is not a valid way to reach this endpoint. */
export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: false, message: 'Method not allowed' }), {
    status: 405,
    headers: { 'content-type': 'application/json', allow: 'POST' },
  });

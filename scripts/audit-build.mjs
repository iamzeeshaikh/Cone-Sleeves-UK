/**
 * Crawls the production build and checks what only becomes visible once the
 * HTML exists: broken internal links, missing images, duplicate titles and
 * descriptions, heading structure, canonical URLs, JSON-LD validity, orphan
 * pages and any surviving reference to the old domain.
 *
 * Usage: npm run build && node scripts/audit-build.mjs
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist', 'client');
const ORIGIN = 'https://conesleeves.co.uk';

if (!existsSync(dist)) {
  console.error('No build found at dist/client. Run `npm run build` first.');
  process.exit(1);
}

const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

/** Strings that must not survive anywhere in the deployable output. */
const FORBIDDEN = [
  'conesleeves.com',
  'theconesleeves.com',
  'www.conesleeves.com',
  '/wp-content/',
  '/wp-includes/',
  'xmlrpc.php',
  'localhost:',
  '127.0.0.1',
  'lorem ipsum',
  'TODO',
  'FIXME',
  'XXX-PLACEHOLDER',
];

/** US phone patterns and dollar prices have no place on a UK site. */
const US_SIGNALS = [
  /\btel:\+1[0-9]{10}\b/,
  /\(\d{3}\)\s?\d{3}-\d{4}/,
  /\$\s?\d+(\.\d{2})?/,
  /\bUSD\b/,
];

// ---------------------------------------------------------------------------
// Collect every built file
// ---------------------------------------------------------------------------

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const allFiles = walk(dist);
const htmlFiles = allFiles.filter((f) => f.endsWith('.html'));

/** dist path → site path, e.g. dist/client/about/index.html → /about/ */
function sitePath(file) {
  const rel = relative(dist, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404/';
  return `/${rel.replace(/index\.html$/, '')}`;
}

const pages = new Map();
for (const file of htmlFiles) {
  pages.set(sitePath(file), file);
}

/** Every asset the build emitted, for resolving image and font references. */
const assets = new Set(
  allFiles.map((f) => `/${relative(dist, f).replace(/\\/g, '/')}`),
);

console.log(`\nCrawling ${pages.size} pages in dist/client\n`);

// ---------------------------------------------------------------------------
// Forbidden strings across every deployable file
// ---------------------------------------------------------------------------

const textFiles = allFiles.filter((f) =>
  /\.(html|js|css|json|xml|txt|webmanifest|svg)$/.test(f),
);

for (const file of textFiles) {
  const text = readFileSync(file, 'utf8');
  // robots.txt legitimately names legacy WordPress paths in order to block them.
  const isRobots = file.endsWith('robots.txt');
  for (const bad of FORBIDDEN) {
    if (isRobots && (bad.includes('wp-') || bad.includes('xmlrpc'))) continue;
    if (text.toLowerCase().includes(bad.toLowerCase())) {
      fail(`${relative(dist, file)}: contains "${bad}"`);
    }
  }
  for (const re of US_SIGNALS) {
    const match = text.match(re);
    if (match) fail(`${relative(dist, file)}: US signal "${match[0]}"`);
  }
}

// ---------------------------------------------------------------------------
// Per-page checks
// ---------------------------------------------------------------------------

const titles = new Map();
const descriptions = new Map();
const linkedFrom = new Map();
const indexablePages = [];

for (const [path, file] of pages) {
  const html = readFileSync(file, 'utf8');
  const { document } = parseHTML(html);
  const where = path;

  // --- Robots / canonical ---
  const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '';
  const noindex = robots.includes('noindex');
  if (!noindex) indexablePages.push(path);

  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
  if (!canonical) {
    fail(`${where}: no canonical link`);
  } else {
    if (!canonical.startsWith('https://')) fail(`${where}: canonical is not HTTPS: ${canonical}`);
    if (!canonical.startsWith(ORIGIN)) fail(`${where}: canonical on wrong host: ${canonical}`);
    if (!canonical.endsWith('/')) fail(`${where}: canonical has no trailing slash: ${canonical}`);
    const expected = `${ORIGIN}${path}`;
    if (canonical !== expected) fail(`${where}: canonical ${canonical} is not self-referencing`);
  }

  // --- hreflang ---
  if (!noindex) {
    const hreflang = document.querySelector('link[hreflang="en-GB"]');
    if (!hreflang) fail(`${where}: missing hreflang="en-GB"`);
  }

  // --- Title and description ---
  const title = document.querySelector('title')?.textContent?.trim() ?? '';
  const description =
    document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() ?? '';

  if (!title) fail(`${where}: no <title>`);
  if (!description) fail(`${where}: no meta description`);

  if (!noindex) {
    if (title.length > 65) warn(`${where}: title ${title.length} chars — "${title}"`);
    if (description.length > 160) fail(`${where}: description ${description.length} chars`);
    if (description.length < 110) warn(`${where}: description only ${description.length} chars`);

    if (titles.has(title)) fail(`Duplicate title on ${titles.get(title)} and ${where}: "${title}"`);
    else titles.set(title, where);

    if (descriptions.has(description)) {
      fail(`Duplicate description on ${descriptions.get(description)} and ${where}`);
    } else descriptions.set(description, where);
  }

  // --- Headings ---
  const h1s = [...document.querySelectorAll('h1')];
  if (h1s.length === 0) fail(`${where}: no H1`);
  if (h1s.length > 1) fail(`${where}: ${h1s.length} H1 elements`);

  // Heading levels must not skip (h2 → h4).
  const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) =>
    Number(h.tagName[1]),
  );
  for (let i = 1; i < headings.length; i++) {
    if (headings[i] - headings[i - 1] > 1) {
      warn(`${where}: heading jumps from h${headings[i - 1]} to h${headings[i]}`);
      break;
    }
  }

  // --- Open Graph and Twitter ---
  for (const prop of ['og:title', 'og:description', 'og:url', 'og:image', 'og:type']) {
    if (!document.querySelector(`meta[property="${prop}"]`)) fail(`${where}: missing ${prop}`);
  }
  for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!document.querySelector(`meta[name="${name}"]`)) fail(`${where}: missing ${name}`);
  }

  // --- Images ---
  for (const img of document.querySelectorAll('img')) {
    const src = img.getAttribute('src') ?? '';
    const alt = img.getAttribute('alt');

    if (alt === null) fail(`${where}: <img src="${src}"> has no alt attribute`);
    if (!img.getAttribute('width') || !img.getAttribute('height')) {
      fail(`${where}: <img src="${src}"> has no width/height (layout shift risk)`);
    }
    if (src.startsWith('/') && !assets.has(src.split('?')[0])) {
      fail(`${where}: image not found in build: ${src}`);
    }
    // A space inside a candidate URL silently voids that candidate in every
    // browser, so each URL is checked individually rather than the whole list.
    const srcset = img.getAttribute('srcset');
    if (srcset) {
      for (const candidate of srcset.split(',')) {
        const url = candidate.trim().split(/\s+/)[0];
        if (!url) continue;
        if (url.includes('%20') || / /.test(url)) {
          fail(`${where}: srcset candidate contains a space and will not load: ${url}`);
        }
        if (url.startsWith('/') && !assets.has(url.split('?')[0])) {
          fail(`${where}: srcset candidate not found in build: ${url}`);
        }
      }
    }
  }

  // --- Links ---
  for (const a of document.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href');
    const text = (a.textContent ?? '').trim().toLowerCase();

    if (!href || href.startsWith('#')) continue;
    if (/^(mailto:|tel:|https?:)/.test(href)) {
      if (href.startsWith('tel:') && href !== 'tel:+447458651107') {
        fail(`${where}: unexpected tel link ${href}`);
      }
      if (href.includes('wa.me') && !href.includes('wa.me/447458651107')) {
        fail(`${where}: unexpected WhatsApp number in ${href}`);
      }
      continue;
    }

    const target = href.split('#')[0].split('?')[0];
    if (!target) continue;

    if (!target.endsWith('/') && !/\.[a-z0-9]+$/i.test(target)) {
      fail(`${where}: internal link without trailing slash: ${href}`);
    }

    if (!pages.has(target) && !assets.has(target)) {
      fail(`${where}: broken internal link → ${href}`);
    } else if (pages.has(target)) {
      const list = linkedFrom.get(target) ?? new Set();
      list.add(where);
      linkedFrom.set(target, list);
    }

    if (['click here', 'learn more', 'read more', 'explore', 'view', 'here'].includes(text)) {
      fail(`${where}: non-descriptive anchor text "${text}" → ${href}`);
    }
  }

  // --- JSON-LD ---
  for (const script of document.querySelectorAll('script[type="application/ld+json"]')) {
    let data;
    try {
      data = JSON.parse(script.textContent ?? '');
    } catch (e) {
      fail(`${where}: invalid JSON-LD (${e.message})`);
      continue;
    }
    const nodes = data['@graph'] ?? [data];
    const types = nodes.map((n) => n['@type']);

    for (const node of nodes) {
      if (!node['@type']) fail(`${where}: JSON-LD node without @type`);
      // Fabricated trust signals must never appear.
      for (const banned of ['aggregateRating', 'review', 'ratingValue', 'reviewCount']) {
        if (JSON.stringify(node).includes(`"${banned}"`)) {
          fail(`${where}: JSON-LD contains "${banned}" — no review data has been supplied`);
        }
      }
      // Price and availability would be invented on a quote-led site.
      for (const banned of ['price', 'priceCurrency', 'availability', 'offers']) {
        if (Object.prototype.hasOwnProperty.call(node, banned)) {
          fail(`${where}: JSON-LD node declares "${banned}" without supporting data`);
        }
      }
      if (node['@type'] === 'LocalBusiness') {
        fail(`${where}: LocalBusiness schema used without a genuine public address`);
      }
      // Every URL in the graph must be on the canonical host.
      const urls = JSON.stringify(node).match(/https?:\/\/[^"']+/g) ?? [];
      for (const u of urls) {
        if (!u.startsWith(ORIGIN) && !u.startsWith('https://schema.org')) {
          fail(`${where}: JSON-LD references off-site URL ${u}`);
        }
      }
    }

    // FAQPage markup must correspond to questions rendered on the page.
    if (types.includes('FAQPage')) {
      const faq = nodes.find((n) => n['@type'] === 'FAQPage');
      const questions = (faq.mainEntity ?? []).map((q) => q.name);
      const bodyText = document.body.textContent ?? '';
      for (const q of questions) {
        if (!bodyText.includes(q)) {
          fail(`${where}: FAQPage question not visible on the page — "${q.slice(0, 50)}…"`);
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Orphans
// ---------------------------------------------------------------------------

for (const path of indexablePages) {
  if (path === '/') continue;
  const inbound = linkedFrom.get(path);
  if (!inbound || inbound.size === 0) {
    fail(`${path}: orphan — no other page links to it`);
  }
}

// ---------------------------------------------------------------------------
// Sitemap and robots
// ---------------------------------------------------------------------------

// The site publishes one flat sitemap at /sitemap.xml. finalise-sitemap.mjs
// collapses Astro's index-plus-parts into it and deletes the originals, so
// their continued presence would mean that step silently did not run.
const sitemapFile = join(dist, 'sitemap.xml');
if (!existsSync(sitemapFile)) {
  fail('No sitemap.xml in the build — did finalise-sitemap.mjs run?');
} else {
  for (const stale of ['sitemap-index.xml', 'sitemap-0.xml']) {
    if (existsSync(join(dist, stale))) {
      fail(`${stale} is still in the build; it should have been collapsed into sitemap.xml`);
    }
  }

  const xml = readFileSync(sitemapFile, 'utf8');
  if (!xml.includes('<urlset')) {
    fail('sitemap.xml is not a urlset — it should list URLs directly, not point at parts');
  }

  const urls = new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  console.log(`Sitemap lists ${urls.size} URLs in one file`);

  for (const url of urls) {
    if (!url.startsWith(ORIGIN)) fail(`Sitemap URL on wrong host: ${url}`);
    if (!url.endsWith('/')) fail(`Sitemap URL without trailing slash: ${url}`);
    const p = url.replace(ORIGIN, '');
    if (!pages.has(p)) fail(`Sitemap lists a URL with no page: ${url}`);
  }

  // Noindex pages must not be advertised in the sitemap.
  for (const [path, file] of pages) {
    const html = readFileSync(file, 'utf8');
    const isNoindex = html.includes('name="robots" content="noindex');
    if (isNoindex && urls.has(`${ORIGIN}${path}`)) {
      fail(`Noindex page is in the sitemap: ${path}`);
    }
    if (!isNoindex && path !== '/404/' && !urls.has(`${ORIGIN}${path}`)) {
      fail(`Indexable page missing from the sitemap: ${path}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Redirect targets
// ---------------------------------------------------------------------------

// Every 301 must land on a page that exists. A redirect to a deleted page is
// a soft 404 that no crawl of the HTML alone would ever surface.
const vercelConfig = join(root, '.vercel', 'output', 'config.json');
if (existsSync(vercelConfig)) {
  const cfg = JSON.parse(readFileSync(vercelConfig, 'utf8'));
  const redirects = (cfg.routes ?? []).filter(
    (r) => (r.status === 301 || r.status === 308) && r.headers?.Location,
  );
  let checked = 0;
  for (const r of redirects) {
    const target = r.headers.Location;
    if (!target.startsWith('/') || target.includes('$')) continue;
    checked++;
    if (!pages.has(target)) fail(`Redirect target does not exist: ${r.src} -> ${target}`);
  }
  console.log(`Redirects with a fixed target: ${checked}`);
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

const indexable = indexablePages.length;
console.log(`Indexable pages: ${indexable}`);
console.log(`Unique titles: ${titles.size}, unique descriptions: ${descriptions.size}\n`);

if (warnings.length) {
  console.log(`${warnings.length} warning(s):`);
  for (const w of warnings.slice(0, 40)) console.log(`  ~ ${w}`);
  if (warnings.length > 40) console.log(`  … and ${warnings.length - 40} more`);
  console.log('');
}

if (errors.length) {
  console.log(`${errors.length} error(s):`);
  for (const e of errors.slice(0, 60)) console.log(`  x ${e}`);
  if (errors.length > 60) console.log(`  … and ${errors.length - 60} more`);
  process.exit(1);
}

console.log('Build audit passed.\n');

import type { APIRoute } from 'astro';
import { SITE, CONTACT } from '~/config/site';

export const prerender = false;

/**
 * Catch-all 410 Gone.
 *
 * The conesleeves.co.uk domain was carrying roughly 3,700 injected gambling
 * pages when this site was built — Search Console showed the count climbing
 * from 552 in May to 3,854 in early August. None of those URLs exists here, so
 * anything that reaches this handler is either injected spam or a URL that was
 * never real.
 *
 * Why 410 rather than 404: 404 means "not here, ask again later" and Google
 * re-crawls it for months. 410 means "gone, permanently" and is dropped from
 * the index considerably faster. Every real page is prerendered to a file and
 * every legitimate legacy URL is in the redirect map, so both are served before
 * this function is ever reached.
 *
 * Deliberately NOT paired with a robots.txt disallow. A blocked URL cannot be
 * crawled, so Google never sees the 410 and the page lingers in the index on
 * the strength of external links alone. The spam has to stay crawlable to die.
 */

const page = (path: string) => `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Page gone | Cone Sleeves UK</title>
<style>
  :root { color-scheme: light dark; }
  body { margin:0; min-height:100vh; display:grid; place-items:center;
         font:16px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif;
         background:#fbf9f5; color:#26231f; padding:2rem; }
  @media (prefers-color-scheme: dark) { body { background:#17150f; color:#f2efe9; } }
  main { max-width:34rem; }
  h1 { font-size:1.6rem; margin:0 0 .75rem; }
  p { margin:0 0 1rem; }
  ul { padding-left:1.1rem; margin:0 0 1.25rem; }
  li { margin-bottom:.35rem; }
  a { color:#2b7a3b; }
  code { font-size:.85em; opacity:.7; word-break:break-all; }
</style>
</head>
<body>
<main>
  <h1>That page is gone</h1>
  <p>
    The address you followed does not exist on this site and will not be coming back.
    If you arrived from a search result, the result is out of date.
  </p>
  <ul>
    <li><a href="/">Custom printed cone sleeves</a></li>
    <li><a href="/products/">The full catalogue</a></li>
    <li><a href="/request-a-quote/">Ask for a quote</a></li>
    <li><a href="/contact/">Contact us</a></li>
  </ul>
  <p>
    Still stuck? Email <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> and tell us
    what you were looking for.
  </p>
  <p><code>${path.replace(/[<>&"]/g, '')}</code></p>
</main>
</body>
</html>`;

const gone: APIRoute = ({ url, request }) => {
  const body = request.method === 'HEAD' ? null : page(url.pathname);
  return new Response(body, {
    status: 410,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      // No caching: if a URL here ever becomes real, a cached 410 would outlive
      // the fix on every CDN edge that stored it.
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
};

export const GET = gone;
export const HEAD = gone;
export const POST = gone;

export const site = SITE.origin;

import type { APIRoute } from 'astro';
import { SITE } from '~/config/site';
import { NOINDEX_PATHS } from '~/data/static-pages';
import { WORDPRESS_PATHS } from '~/data/redirects';

/**
 * robots.txt is generated rather than kept as a static file, so the
 * disallow list cannot drift away from the routes the site actually has.
 *
 * Note: this file governs crawling only. Anything that must not be indexed
 * also carries a noindex meta tag, because a disallowed URL can still be
 * indexed from external links.
 */
export const GET: APIRoute = () => {
  const lines = [
    '# https://www.robotstxt.org/robotstxt.html',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    '# Form results and utility routes have no search intent.',
    ...NOINDEX_PATHS.map((p) => `Disallow: ${p}`),
    'Disallow: /api/',
    'Disallow: /*?error=',
    '',
    '# Legacy WordPress paths from the previous site.',
    ...WORDPRESS_PATHS.filter((p) => !p.startsWith('/?')).map((p) => `Disallow: ${p}`),
    'Disallow: /*?s=',
    'Disallow: /*?replytocom=',
    '',
    // /sitemap.xml is a copy of the index, published by
    // scripts/finalise-sitemap.mjs. Both are advertised: the first is the one
    // people and tools reach for, the second is what Astro generates.
    `Sitemap: ${SITE.origin}/sitemap.xml`,
    `Sitemap: ${SITE.origin}/sitemap-index.xml`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
};

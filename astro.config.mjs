// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import {
  CONSOLIDATED,
  RESPELLED,
  CATEGORY_REDIRECTS,
  PAGE_REDIRECTS,
  POST_REDIRECTS,
} from './src/data/redirects.ts';
import { PRODUCTS } from './src/data/products/index.ts';

const SITE = 'https://conesleeves.co.uk';

/**
 * One-to-one 301s from the legacy WordPress structure.
 *
 * Built from the redirect map rather than hand-maintained, so a product that
 * is renamed or consolidated cannot leave a dangling old URL behind.
 */
function buildRedirects() {
  /** @type {Record<string, string>} */
  const map = {};

  // /product/<slug>/ became root-level /<slug>/ for everything still published.
  for (const product of PRODUCTS) {
    map[`/product/${product.slug}/`] = `/${product.slug}/`;
  }

  // Source products folded into another page. A redirect whose source equals
  // its target would shadow the real page, so those are skipped — the generic
  // "food sleeves" product was folded into the category living at that path.
  for (const [from, to] of Object.entries(CONSOLIDATED)) {
    const target = to === 'food-sleeves-category' ? '/food-sleeves/' : `/${to}/`;
    map[`/product/${from}/`] = target;
    if (`/${from}/` !== target) map[`/${from}/`] = target;
  }

  // American spellings corrected; the old slug still has to resolve.
  for (const [from, to] of Object.entries(RESPELLED)) {
    map[`/product/${from}/`] = `/${to}/`;
    if (`/${from}/` !== `/${to}/`) map[`/${from}/`] = `/${to}/`;
  }

  Object.assign(map, CATEGORY_REDIRECTS, POST_REDIRECTS);

  // Legacy pages, skipping any that already resolve to themselves.
  for (const [from, to] of Object.entries(PAGE_REDIRECTS)) {
    if (from !== to) map[from] = to;
  }

  return map;
}

/**
 * Utility and result URLs must never enter the sitemap or the index.
 * Kept in one place so the sitemap filter and the robots.txt route agree.
 */
export const NOINDEX_PATHS = [
  '/thank-you/',
  '/quote-sent/',
  '/search/',
  '/404/',
];

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel({
    imageService: false,
    webAnalytics: { enabled: false },
  }),
  redirects: buildRedirects(),
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    // Sharp handles WebP/AVIF conversion and responsive widths at build time.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return !NOINDEX_PATHS.some((p) => path === p || path.startsWith(p));
      },
      i18n: {
        defaultLocale: 'en-GB',
        locales: { 'en-GB': 'en-GB' },
      },
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/') item.priority = 1.0;
        else if (/^\/(cone-sleeves|food-sleeves|food-trays|food-boxes|beverage-sleeves|paper-cups|printed-papers-bags)\/$/.test(path)) item.priority = 0.9;
        else if (path.startsWith('/blog/')) item.priority = 0.6;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});

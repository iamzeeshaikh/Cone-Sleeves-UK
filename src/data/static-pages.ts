/**
 * Fixed routes the site publishes outside the data-driven page types.
 * Kept here so the internal-link validator and the sitemap agree on what
 * exists, and so noindex utility routes are declared in one place.
 */

export const STATIC_PAGE_PATHS: string[] = [
  '/',
  '/products/',
  '/about/',
  '/contact/',
  '/request-a-quote/',
  '/design-your-cone-sleeve/',
  '/faqs/',
  '/blog/',
  '/locations/',
  '/artwork-guidelines/',
  '/delivery-information/',
  '/returns-and-refunds/',
  '/privacy-policy/',
  '/cookie-policy/',
  '/terms-and-conditions/',
  '/thank-you/',
];

/** Routes that must never be indexed or appear in the sitemap. */
export const NOINDEX_PATHS: string[] = ['/thank-you/'];

export function isNoindex(path: string): boolean {
  return NOINDEX_PATHS.includes(path);
}

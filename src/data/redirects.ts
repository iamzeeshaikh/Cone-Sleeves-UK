/**
 * One-to-one redirect map from the legacy WordPress/WooCommerce URL structure
 * to the new information architecture.
 *
 * Three groups:
 *  1. Structural — /product/<slug>/ became root-level /<slug>/.
 *  2. Consolidations — pairs of source products that were literal synonyms.
 *     Publishing both would have split the same query across two thin pages,
 *     so the weaker name redirects into the page that keeps the topic.
 *  3. Spelling — American spellings corrected for a British-English site.
 *
 * Paths are stored without the leading domain. Every target ends in a slash.
 */

export interface Redirect {
  from: string;
  to: string;
  reason: 'structure' | 'consolidation' | 'spelling' | 'retired';
}

/** Source product slugs folded into another page, with their destination. */
export const CONSOLIDATED: Record<string, string> = {
  // Five source products described the same scoop-style chip box.
  'french-fries-carton': 'french-fry-boxes',
  'custom-french-fry-containers': 'french-fry-boxes',
  'french-fry-serving-containers': 'french-fry-boxes',
  'custom-fries-boxes': 'french-fry-boxes',
  // "Taco paper" and "taco wrapping paper" are the same sheet.
  'custom-taco-wrapping-paper': 'custom-taco-paper',
  // "Food paper" and "printed food paper" competed for one query.
  'custom-food-paper': 'custom-greaseproof-paper',
  // Mini and small described one size band.
  'mini-paper-cups': 'small-paper-cups',
  // Two names for the same single-wall hot cup.
  'paper-cups-for-hot-drinks': 'disposable-hot-cups',
  // Coffee cup sleeve pages overlapped the flagship beverage sleeve page.
  'paper-coffee-cup-sleeves': 'custom-printed-coffee-sleeves',
  'custom-paper-beverage-sleeves': 'custom-cardboard-beverage-sleeves',
  // A generic "food sleeves" product duplicated its own category page.
  'food-sleeves': 'food-sleeves-category',
};

/** Slugs renamed for British spelling. Old slug → new slug. */
export const RESPELLED: Record<string, string> = {
  'aluminum-foil-cone-sleeves': 'aluminium-foil-cone-sleeves',
  'colored-paper-cups': 'coloured-paper-cups',
  'custom-two-color-cone-sleeves': 'custom-two-colour-cone-sleeves',
};

/** Legacy WooCommerce category paths → new category paths. */
export const CATEGORY_REDIRECTS: Record<string, string> = {
  '/product-category/cone-sleeves-by-industry/': '/cone-sleeves/',
  '/product-category/custom-food-sleeves/': '/food-sleeves/',
  '/product-category/custom-food-trays/': '/food-trays/',
  '/product-category/custom-food-boxes/': '/food-boxes/',
  '/product-category/custom-beverage-sleeves/': '/beverage-sleeves/',
  '/product-category/custom-paper-cups/': '/paper-cups/',
  '/product-category/custom-printed-papers/': '/printed-papers-bags/',
  '/product-category/paper-cups-sizes/': '/paper-cups/sizes/',
  '/product-category/paper-cups-materials/': '/paper-cups/materials/',
  '/product-category/paper-cups-structure/': '/paper-cups/structure/',
  '/product-category/colored-paper-cups/': '/paper-cups/coloured/',
  '/product-category/food-paper-cups/': '/paper-cups/food-cups/',
  '/product-category/paper-coffee-cups/': '/paper-cups/coffee-cups/',
  // Hot cups were folded into the coffee cup subcategory.
  '/product-category/hot-paper-cups/': '/paper-cups/coffee-cups/',
  '/product-category/cardboard-cups/': '/paper-cups/cardboard/',
  // Ice cream cups were folded into the food cup subcategory.
  '/product-category/ice-cream-cups/': '/paper-cups/food-cups/',
  '/product-category/drinking-paper-cups/': '/paper-cups/drinking-cups/',
  // Seasonal and special designs merged into one printed-designs page.
  '/product-category/seasonal-cups/': '/paper-cups/printed-designs/',
  '/product-category/special-design-paper-cups/': '/paper-cups/printed-designs/',
};

/** Legacy WordPress pages and posts → new equivalents. */
export const PAGE_REDIRECTS: Record<string, string> = {
  '/about/': '/about/',
  '/contact/': '/contact/',
  '/products/': '/products/',
  '/blog/': '/blog/',
  '/get-a-free-quote/': '/request-a-quote/',
  '/privacy-policy/': '/privacy-policy/',
  '/terms-conditions/': '/terms-and-conditions/',
  '/refund-return-policy/': '/returns-and-refunds/',
  '/faqs-of-custom-cone-sleeves/': '/faqs/',
  '/sitemap/': '/products/',
  '/thank-you/': '/thank-you/',
  // WooCommerce transactional pages have no equivalent on a quote-led site.
  '/cart/': '/request-a-quote/',
  '/checkout/': '/request-a-quote/',
  '/my-account/': '/contact/',
  '/shop/': '/products/',
};

/**
 * Legacy blog posts. The new blog is written from scratch, so each old post
 * points at the new article that covers the same buyer question, or at the
 * blog index when no new article covers it.
 */
export const POST_REDIRECTS: Record<string, string> = {
  '/increase-your-ice-cream-brand-value-with-custom-ice-cone-sleeves/':
    '/blog/branded-cone-sleeves-takeaway-presentation/',
  '/how-custom-cone-sleeves-are-useful-for-your-business/':
    '/blog/cone-sleeves-for-ice-cream-shops-and-dessert-brands/',
  '/how-to-choose-the-perfect-cone-sleeves-company-for-your-business/':
    '/blog/choosing-a-cone-sleeve-supplier-in-the-uk/',
  '/how-cone-sleeves-can-increase-sales/':
    '/blog/branded-cone-sleeves-takeaway-presentation/',
  '/who-is-credited-with-the-invention-of-coffee-cup-sleeves/':
    '/blog/printed-coffee-cup-sleeves-guide/',
  '/say-goodbye-to-sticky-fingers-with-cone-sleeves/':
    '/blog/how-to-choose-the-right-cone-sleeve-size/',
  '/top-3-ice-cream-cone-sleeve-trends-you-need-to-try-now/':
    '/blog/matte-and-gloss-finishes-for-cone-sleeves/',
  '/how-custom-cone-sleeves-are-the-best-option-to-upgrade-the-brand-success/':
    '/blog/branded-cone-sleeves-takeaway-presentation/',
  '/restore-the-faith-of-customers-by-designing-cone-sleeve-boxes/':
    '/blog/food-safe-considerations-for-cone-sleeve-packaging/',
  '/how-to-protect-and-organize-your-ice-cream/':
    '/blog/food-safe-considerations-for-cone-sleeve-packaging/',
  '/why-you-need-custom-coffee-sleeves-for-your-business/':
    '/blog/printed-coffee-cup-sleeves-guide/',
  '/5-ways-custom-burger-sleeves-improve-takeaway-presentation/':
    '/blog/branded-cone-sleeves-takeaway-presentation/',
  '/5-common-mistakes-to-avoid-in-crepe-cone-packaging-design/':
    '/blog/preparing-artwork-for-custom-cone-sleeves/',
  '/5-tips-for-choosing-a-supplier-for-custom-printed-coffee-sleeves/':
    '/blog/choosing-a-cone-sleeve-supplier-in-the-uk/',
  '/how-custom-gift-card-sleeves-influence-purchase-decisions/':
    '/custom-gift-card-sleeves/',
  '/paper-mache-cones-complete-guide-for-food-service-businesses/':
    '/paper-mache-cones/',
  '/how-to-choose-the-perfect-food-tray-for-your-restaurant-or-food-truck/':
    '/blog/printed-cone-sleeves-for-events-and-catering/',
};

/**
 * WordPress system paths that must never be followed or indexed. They are
 * answered with a redirect to the homepage rather than a soft 404 chain.
 */
export const WORDPRESS_PATHS: string[] = [
  '/wp-admin',
  '/wp-login.php',
  '/wp-content',
  '/wp-includes',
  '/xmlrpc.php',
  '/wp-json',
  '/feed',
  '/comments/feed',
  '/author',
  '/tag',
  '/?s=',
];

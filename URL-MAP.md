# URL Map — conesleeves.co.uk

Every URL the site publishes, and every legacy URL that redirects into it.

**242 redirects** are emitted into the Vercel routing config at build time from
`src/data/redirects.ts`. All 242 have been verified against the built page set
by `scripts/audit-build.mjs` — a redirect pointing at a page that does not
exist fails the build audit.

---

## 1. Published URL structure

Every public URL ends in a trailing slash. `trailingSlash: 'always'` is set in
`astro.config.mjs` and enforced by the build audit, which fails on any
canonical or internal link without one.

| Pattern | Count | Example |
|---|---|---|
| `/` | 1 | Homepage |
| `/<product-slug>/` | 170 | `/custom-waffle-cone-sleeves/` |
| `/<category>/` | 7 | `/cone-sleeves/` |
| `/<category>/<subcategory>/` | 11 | `/paper-cups/sizes/` |
| `/<location-slug>/` | 25 | `/cone-sleeves-london/` |
| `/blog/<slug>/` | 12 | `/blog/how-cone-sleeve-printing-works/` |
| Index pages | 4 | `/products/` `/locations/` `/blog/` `/faqs/` |
| Company & tools | 4 | `/about/` `/contact/` `/request-a-quote/` `/design-your-cone-sleeve/` |
| Legal & policy | 6 | `/privacy-policy/` `/cookie-policy/` `/terms-and-conditions/` `/delivery-information/` `/returns-and-refunds/` `/artwork-guidelines/` |
| **Indexable total** | **240** | |
| Noindex utility | 2 | `/thank-you/` `/404/` |
| Endpoint | 1 | `/api/quote/` — POST only, returns 405 on GET |
| Generated files | 3 | `/robots.txt` `/rss.xml` `/sitemap-index.xml` |

Products, categories and locations all sit at root level. One dynamic route
(`src/pages/[slug].astro`) generates all three and dispatches to the correct
template; Astro gives static routes such as `/about/` precedence
automatically, so no collision is possible.

---

## 2. Category URLs

| New URL | Products | Legacy URL |
|---|---|---|
| `/cone-sleeves/` | 21 | `/product-category/cone-sleeves-by-industry/` |
| `/food-sleeves/` | 23 | `/product-category/custom-food-sleeves/` |
| `/food-trays/` | 18 | `/product-category/custom-food-trays/` |
| `/food-boxes/` | 4 | `/product-category/custom-food-boxes/` |
| `/beverage-sleeves/` | 5 | `/product-category/custom-beverage-sleeves/` |
| `/paper-cups/` | 58 | `/product-category/custom-paper-cups/` |
| `/paper-cups/sizes/` | 12 | `/product-category/paper-cups-sizes/` |
| `/paper-cups/materials/` | 5 | `/product-category/paper-cups-materials/` |
| `/paper-cups/coloured/` | 8 | `/product-category/colored-paper-cups/` |
| `/paper-cups/coffee-cups/` | 7 | `/product-category/paper-coffee-cups/` **and** `/product-category/hot-paper-cups/` |
| `/paper-cups/food-cups/` | 10 | `/product-category/food-paper-cups/` **and** `/product-category/ice-cream-cups/` |
| `/paper-cups/cardboard/` | 3 | `/product-category/cardboard-cups/` |
| `/paper-cups/structure/` | 5 | `/product-category/paper-cups-structure/` |
| `/paper-cups/printed-designs/` | 5 | `/product-category/special-design-paper-cups/` **and** `/product-category/seasonal-cups/` |
| `/paper-cups/drinking-cups/` | 3 | `/product-category/drinking-paper-cups/` |
| `/printed-papers-bags/` | 41 | `/product-category/custom-printed-papers/` |
| `/printed-papers-bags/food-papers/` | 18 | *(new subdivision)* |
| `/printed-papers-bags/paper-bags/` | 23 | *(new subdivision)* |

Four legacy subcategories held only two or three products each and split the
same buyer intent, so they merge into a larger page rather than surviving as
thin listings.

---

## 3. Product URLs — structural redirect

All 170 published products moved from `/product/<slug>/` to `/<slug>/`.

```
/product/custom-waffle-cone-sleeves/   →  /custom-waffle-cone-sleeves/
/product/12-oz-paper-cups/             →  /12-oz-paper-cups/
… 168 more, generated from the product catalogue
```

These are generated in `astro.config.mjs` by iterating the catalogue, so a
product that is renamed cannot leave a dangling legacy URL behind.

---

## 4. Consolidation redirects

Eleven legacy products were folded into another page. Both the legacy
`/product/<slug>/` form and the bare `/<slug>/` form redirect.

| Legacy URL | Redirects to | Reason |
|---|---|---|
| `/french-fries-carton/` | `/french-fry-boxes/` | Same scoop-style chip box |
| `/custom-french-fry-containers/` | `/french-fry-boxes/` | Same product |
| `/french-fry-serving-containers/` | `/french-fry-boxes/` | Same product |
| `/custom-fries-boxes/` | `/french-fry-boxes/` | Same product |
| `/custom-taco-wrapping-paper/` | `/custom-taco-paper/` | Same sheet |
| `/custom-food-paper/` | `/custom-greaseproof-paper/` | Same query |
| `/mini-paper-cups/` | `/small-paper-cups/` | Same size band |
| `/paper-cups-for-hot-drinks/` | `/disposable-hot-cups/` | Same single-wall hot cup |
| `/paper-coffee-cup-sleeves/` | `/custom-printed-coffee-sleeves/` | Overlapped the flagship page |
| `/custom-paper-beverage-sleeves/` | `/custom-cardboard-beverage-sleeves/` | Same generic product |
| `/food-sleeves/` *(product)* | `/food-sleeves/` *(category)* | Product duplicated its own category |

The last row is a deliberate non-redirect: the legacy product URL and the new
category URL are the same string, so the category page simply occupies it.
A self-redirect there would have shadowed the real page — a bug found and
fixed during the build audit.

---

## 5. Spelling redirects

| Legacy URL | Redirects to |
|---|---|
| `/aluminum-foil-cone-sleeves/` | `/aluminium-foil-cone-sleeves/` |
| `/colored-paper-cups/` | `/coloured-paper-cups/` |
| `/custom-two-color-cone-sleeves/` | `/custom-two-colour-cone-sleeves/` |
| `/product/custom-printed-food-paper/` | `/custom-greaseproof-paper/` |

---

## 6. Page redirects

| Legacy URL | Redirects to | Note |
|---|---|---|
| `/get-a-free-quote/` | `/request-a-quote/` | Renamed |
| `/terms-conditions/` | `/terms-and-conditions/` | Renamed |
| `/refund-return-policy/` | `/returns-and-refunds/` | Renamed |
| `/faqs-of-custom-cone-sleeves/` | `/faqs/` | Shortened |
| `/sitemap/` | `/products/` | The HTML sitemap page is replaced by the catalogue index |
| `/cart/` | `/request-a-quote/` | No basket on a quote-led site |
| `/checkout/` | `/request-a-quote/` | No checkout |
| `/my-account/` | `/contact/` | No customer accounts |
| `/shop/` | `/products/` | WooCommerce shop root |

`/about/`, `/contact/`, `/products/`, `/blog/`, `/privacy-policy/` and
`/thank-you/` keep their legacy paths and need no redirect.

---

## 7. Blog post redirects

All 17 legacy posts were replaced. Each redirects to the new article covering
the same buyer question, or to the product page that now answers it.

| Legacy post | Redirects to |
|---|---|
| `/increase-your-ice-cream-brand-value-with-custom-ice-cone-sleeves/` | `/blog/branded-cone-sleeves-takeaway-presentation/` |
| `/how-custom-cone-sleeves-are-useful-for-your-business/` | `/blog/cone-sleeves-for-ice-cream-shops-and-dessert-brands/` |
| `/how-to-choose-the-perfect-cone-sleeves-company-for-your-business/` | `/blog/choosing-a-cone-sleeve-supplier-in-the-uk/` |
| `/how-cone-sleeves-can-increase-sales/` | `/blog/branded-cone-sleeves-takeaway-presentation/` |
| `/who-is-credited-with-the-invention-of-coffee-cup-sleeves/` | `/blog/printed-coffee-cup-sleeves-guide/` |
| `/say-goodbye-to-sticky-fingers-with-cone-sleeves/` | `/blog/how-to-choose-the-right-cone-sleeve-size/` |
| `/top-3-ice-cream-cone-sleeve-trends-you-need-to-try-now/` | `/blog/matte-and-gloss-finishes-for-cone-sleeves/` |
| `/how-custom-cone-sleeves-are-the-best-option-to-upgrade-the-brand-success/` | `/blog/branded-cone-sleeves-takeaway-presentation/` |
| `/restore-the-faith-of-customers-by-designing-cone-sleeve-boxes/` | `/blog/food-safe-considerations-for-cone-sleeve-packaging/` |
| `/how-to-protect-and-organize-your-ice-cream/` | `/blog/food-safe-considerations-for-cone-sleeve-packaging/` |
| `/why-you-need-custom-coffee-sleeves-for-your-business/` | `/blog/printed-coffee-cup-sleeves-guide/` |
| `/5-ways-custom-burger-sleeves-improve-takeaway-presentation/` | `/blog/branded-cone-sleeves-takeaway-presentation/` |
| `/5-common-mistakes-to-avoid-in-crepe-cone-packaging-design/` | `/blog/preparing-artwork-for-custom-cone-sleeves/` |
| `/5-tips-for-choosing-a-supplier-for-custom-printed-coffee-sleeves/` | `/blog/choosing-a-cone-sleeve-supplier-in-the-uk/` |
| `/how-custom-gift-card-sleeves-influence-purchase-decisions/` | `/custom-gift-card-sleeves/` |
| `/paper-mache-cones-complete-guide-for-food-service-businesses/` | `/paper-mache-cones/` |
| `/how-to-choose-the-perfect-food-tray-for-your-restaurant-or-food-truck/` | `/blog/printed-cone-sleeves-for-events-and-catering/` |

---

## 8. WordPress system paths

These are **blocked in `robots.txt`** rather than redirected, because they are
crawl noise rather than pages anyone linked to:

```
/wp-admin      /wp-login.php   /wp-content    /wp-includes
/xmlrpc.php    /wp-json        /feed          /comments/feed
/author        /tag            /?s=           /?replytocom=
```

Anything not matched falls through to the custom 404 page, which is `noindex`
and carries links back into the ranges, the catalogue and the guides.

---

## 9. Domain and protocol

- Canonical host: `https://conesleeves.co.uk` (no `www`).
- Every canonical is absolute, HTTPS and self-referencing — enforced by the
  build audit.
- `hreflang="en-GB"` and `x-default` on every indexable page.
- Host redirects (`www` → apex, HTTP → HTTPS) are configured at the DNS and
  hosting layer, not in the application. Both are listed in
  `PRE-LAUNCH-CHECKLIST.md`.

---

## 10. Sitemap

- `/sitemap-index.xml` is the entry point, referencing one part file.
- **240 URLs** — every indexable page, and nothing else.
- `/thank-you/` and `/404/` are excluded by the sitemap filter and carry
  `noindex`. The build audit fails if a noindex page appears in the sitemap,
  or if an indexable page is missing from it.
- Priorities: homepage 1.0, top-level categories 0.9, blog 0.6, everything
  else 0.7.
- No WordPress URL appears in the sitemap.

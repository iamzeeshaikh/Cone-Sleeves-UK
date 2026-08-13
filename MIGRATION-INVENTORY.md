# Migration Inventory — conesleeves.co.uk

What was supplied, what was extracted from it, what was reused, what was
rebuilt from scratch, and what is still outstanding.

Prepared 13 August 2026.

---

## 1. Source material supplied

| File | Size | What it contained | Used for |
|---|---|---|---|
| `conesleeves.WordPress.2026-08-11.xml` | 13.4 MB | Full WXR export: 181 products, 15 pages, 17 posts, 921 attachments, 71 nav items, 9 Elementor templates | Product slugs, URL structure, page and post inventory, redirect targets |
| `conesleeves.WordPress.2026-08-11 (2).xml` | 5.4 MB | Attachments only (921) | Cross-check on media inventory |
| `conesleeves.WordPress.2026-08-11 (1).xml` | 584 KB | 9 Elementor templates, 3 attachments | Layout reference only |
| `wc-product-export-11-8-2026-*.csv` | 4.7 MB | 181 WooCommerce products with categories, images, SEO meta | Catalogue structure, category tree, image-to-product mapping |
| `localhost.sql` | 81 MB | WordPress database dump | Theme options, brand colour palette, site settings |
| `public_html.zip` | 870 MB | Complete site root | Original media, brand assets, self-hosted font |
| `elementor-templates-2026-08-11.zip` | 25 KB | Elementor template export | Layout reference only |

**Total supplied: 930 MB.**

### Legacy platform detected

WordPress + WooCommerce, Rishi theme (`rishi_1.1.5`), Elementor page builder,
Rank Math and Yoast both present, Contact Form 7, Google Listings & Ads.
Nothing from this stack carries over — the new site has no WordPress
dependency, no PHP, no database and no plugin layer.

---

## 2. What was extracted

### Products

- **181** published simple products in the WooCommerce export.
- **7** top-level categories plus **12** paper-cup subcategories.
- **843** unique image URLs referenced across those products.
- Every product had a resolvable slug and at least three images.

### Media

- **1,103** original (non-thumbnail) images in `public_html.zip`.
- **843** of those referenced by products; all 843 extracted successfully.
- **8** duplicate groups found by MD5 and de-duplicated.
- **1** corrupt/undersized file dropped (`2026/03/pastry-sweet-packaging-bags.jpg`, 1.4 KB).
- **847** images now bundled, organised into 170 per-product folders.

### Brand assets

- Original logo (`cone-sleeves-logo.png`) recovered: forest green wordmark
  with an amber ice-cream-cone mark.
- Theme colour palette recovered from `theme_mods_rishi_1.1.5`: `#4e7302`
  green, `#fab73a` amber, `#21201d` ink.
- `Inter-VariableFont` recovered from the WooCommerce plugin assets, subset to
  Latin and instanced to the 400–800 weight range: **326 KB → 34 KB**.

---

## 3. Reuse decisions

| Asset | Decision | Reasoning |
|---|---|---|
| Product photography | **Reused**, optimised | 847 images, converted to WebP with responsive widths |
| Watermark on photography | **Kept** | The watermark reads "CONE SLEEVES" — no `.com` — and matches the new brand name. The new logo was drawn as a refined evolution of that mark so the watermarks read as native branding rather than as another company's |
| Brand colours | **Reused** | Green/amber direction carried over, values adjusted for WCAG contrast |
| Logo | **Redrawn** | New inline SVG wordmark with a "UNITED KINGDOM" lockup; scales cleanly, costs no request |
| Font | **Reused**, subset | Inter, self-hosted, subset to 34 KB |
| Category structure | **Reused with corrections** | See section 5 |
| Navigation logic | **Reused** | Range → subcategory → product, plus a flat `/products/` index |
| Product copy | **Discarded** | Every word rewritten. Source copy was US-market ("USA at wholesale prices", "Free Shipping in the USA"), keyword-stuffed and self-linking to the `.com` domain |
| Page copy | **Discarded** | All 15 pages rewritten |
| Blog posts | **Discarded** | All 17 replaced with 12 new UK-written articles |
| Elementor layouts | **Discarded** | Rebuilt as Astro components |
| Theme, plugins, PHP | **Discarded** | No WordPress dependency remains |

---

## 4. New site architecture

```
/                                     Home
/products/                            Full catalogue index (170 products)
/<product-slug>/                      170 product pages, root level
/<category>/                          6 top-level category pages
                                      (cone sleeves renders on /)
/<category>/<subcategory>/            11 subcategory pages
/<location-slug>/                     25 UK location pages
/locations/                           Location index
/blog/                                Guides index
/blog/<slug>/                         12 articles
/design-your-cone-sleeve/             Configurator with live representation
/request-a-quote/                     Enquiry page
/contact/  /about/  /faqs/            Company pages
/artwork-guidelines/                  Production guidance
/delivery-information/                Delivery policy
/returns-and-refunds/                 Returns policy
/privacy-policy/  /cookie-policy/     Legal
/terms-and-conditions/                Legal
/thank-you/                           Form result (noindex, sitemap-excluded)
/404/                                 Custom 404 (noindex)
/api/quote/                           Server-side form endpoint (POST only)
/robots.txt  /rss.xml  /sitemap-index.xml
```

**239 indexable pages. 241 HTML files including 404 and thank-you.**

---

## 5. Catalogue changes and why

### Categories

Source categories were renamed for a UK audience and one subcategory tree was
restructured. `Colored Paper Cups` → `coloured`. The 12 source paper-cup
subcategories were consolidated to 9, because four of them held two products
each and split the same buyer intent.

| New category | Products | Source category |
|---|---|---|
| **`/` (homepage)** | 21 | Cone Sleeves By Industry |
| `/food-sleeves/` | 23 | Custom Food Sleeves |
| `/food-trays/` | 18 | Custom Food Trays |
| `/food-boxes/` | 4 | Custom Food Boxes |
| `/beverage-sleeves/` | 5 | Custom Beverage Sleeves |
| `/paper-cups/` | 58 | Custom Paper Cups (9 subcategories) |
| `/printed-papers-bags/` | 41 | Custom Printed Papers (2 subcategories) |

Ten products were re-filed. Trays and cone holders sitting in "Cone Sleeves By
Industry" moved to `/food-trays/`; burger sleeves and gift card sleeves moved
to `/food-sleeves/`.

### The cone sleeve range lives on the homepage

`/cone-sleeves/` is **not published as a separate page**, and 301s to `/`.

The brand is Cone Sleeves UK, the domain is conesleeves.co.uk, and the
homepage targets "custom cone sleeves UK". A category page at
`/cone-sleeves/` targeting the same head term would have been two of our own
pages competing for one query — the single clearest case of cannibalisation on
the site, and the one hardest to win, because the homepage will always carry
more authority.

The whole category is therefore rendered on the homepage instead: its quote
form, all 21 cone sleeve products, its four buyer-guidance sections and its
FAQs. Nothing was lost — only the duplicate URL.

The category record still exists in `src/data/categories.ts` with a
`mergedIntoHome: true` flag. `categoryPath()` resolves it to `/`, so the
header, footer and catalogue index all point at the homepage automatically,
and product breadcrumbs drop the category crumb rather than repeating Home.

### Consolidations: 181 → 170

Eleven source products were **not** published as separate pages because each
was a literal synonym of another. Publishing both would have split one query
across two thin pages, which the brief's programmatic-SEO quality control
rules out. Each redirects 301 to the page that keeps the topic.

| Source product | Folded into | Why |
|---|---|---|
| French Fries Carton | `french-fry-boxes` | Same scoop-style chip box |
| Custom French Fry Containers | `french-fry-boxes` | Same product |
| French Fry Serving Containers | `french-fry-boxes` | Same product |
| Custom Fries Boxes | `french-fry-boxes` | Same product |
| Custom Taco Wrapping Paper | `custom-taco-paper` | Same sheet |
| Custom Food Paper | `custom-greaseproof-paper` | Same query |
| Mini Paper Cups | `small-paper-cups` | Same size band |
| Paper Cups For Hot Drinks | `disposable-hot-cups` | Same single-wall hot cup |
| Paper Coffee Cup Sleeves | `custom-printed-coffee-sleeves` | Overlapped the flagship page |
| Custom Paper Beverage Sleeves | `custom-cardboard-beverage-sleeves` | Same generic product |
| Food Sleeves | `/food-sleeves/` (category) | Duplicated its own category page |

Their images were merged into the surviving product's gallery rather than
discarded, so nothing was lost.

### British spelling renames

| Old slug | New slug |
|---|---|
| `aluminum-foil-cone-sleeves` | `aluminium-foil-cone-sleeves` |
| `colored-paper-cups` | `coloured-paper-cups` |
| `custom-two-color-cone-sleeves` | `custom-two-colour-cone-sleeves` |
| `custom-printed-food-paper` | `custom-greaseproof-paper` (UK term) |

All four old slugs 301 to the new ones.

---

## 6. Original content created

| Content type | Count | Volume |
|---|---|---|
| Product pages | 170 | Individually written; 413 typed content sections |
| Category pages | 17 published (18 records) | Buyer guidance, not grids |
| Location pages | 25 | 20 cities, 5 counties |
| Blog articles | 12 | 12,916 words, every article over 1,000 |
| Legal & trust pages | 8 | Written for a UK B2B bespoke-goods supplier |
| FAQ pairs | 480 | Across products, categories, locations, articles and `/faqs/` |
| Contextual internal links | 222 | One per content section maximum |
| Related-product links | 680 | |
| **Total authored words** | | **≈ 78,300** |

Not one sentence was carried over from the source site. See
`CONTENT-UNIQUENESS-REPORT.md`.

---

## 7. Location page selection

The brief suggested 15 regions/counties and 20 cities. **Ten were dropped**
because each duplicated the search intent of a city already covered, which
would have been cannibalisation rather than coverage:

Greater London, Greater Manchester, West Midlands, West Yorkshire, Merseyside,
South Yorkshire, Nottinghamshire, Leicestershire, Cambridgeshire, Hampshire.

Each of those resolves to a city on the published list (London, Manchester,
Birmingham, Leeds, Liverpool, Sheffield, Nottingham, Leicester, Cambridge, and
Southampton/Portsmouth respectively).

**25 published**: all 20 suggested cities, plus Kent, Essex, Surrey,
Lancashire and Gloucestershire — the five counties with no listed city inside
them.

Every page is built from something genuinely local. No page claims an office,
a depot, a local team or a guaranteed local delivery time, because none exist.

---

## 8. Media pipeline

- Source images copied into `src/assets/products/<slug>/`, filenames
  slugified to lowercase-hyphen (spaces in filenames silently void every
  `srcset` candidate, so none are permitted).
- Astro + Sharp generate **3,730 WebP renditions** at build time.
- Every `<img>` carries intrinsic `width`/`height`; the build audit fails if
  any does not.
- Hero and above-the-fold images: `loading="eager"`, `fetchpriority="high"`,
  `decoding="sync"`. Everything else lazy and async.
- `._*` AppleDouble sidecars filtered in the image loader and deleted from the
  asset tree.

---

## 9. Build results

```
Astro 7.2.1 · adapter @astrojs/vercel 11.0.5 · Node 25 (Vercel runtime 24)

241 HTML pages prerendered
  1 serverless function (/api/quote/)
3,730 image renditions generated
243 redirect routes emitted
239 URLs in sitemap

CSS  39.6 KB total across all pages
JS    9.1 KB total (2 chunks — nav drawer, gallery, forms, configurator)
Font 34.2 KB (one file, subset, self-hosted)

Content validation: PASSED (0 errors, 0 warnings)
Build audit:        PASSED (0 errors, 0 warnings)
```

---

## 10. Outstanding before launch

Everything below is missing information rather than missing work. Each has a
clearly marked placeholder in the site that renders only when a real value is
supplied — nothing has been invented.

| Item | Where it surfaces | Blocking? |
|---|---|---|
| SMTP credentials | `.env` — forms return a clear 503 without them | **Yes** |
| Registered company name, number, VAT number | Footer, privacy policy, terms, Organization schema | **Yes** — legally required |
| Registered / trading address | Contact page, terms | **Yes** |
| Payment terms | Terms & conditions §10 | **Yes** |
| Quantity tolerance percentage | Terms & conditions §6 | **Yes** |
| Returns timescales and process | Returns & refunds page | **Yes** |
| GA4 / GTM measurement ID | Not emitted until configured | No |
| Search Console verification token | Not emitted until configured | No |
| Cookie consent mechanism | Only needed *if* analytics is enabled | Conditional |
| Board grades, certifications, recycled content | Confirmed per quote, not published | No |
| Social profile URLs | `SOCIAL_PROFILES` in site config, empty | No |

See `PRE-LAUNCH-CHECKLIST.md` for the full sequence.

# SEO Checklist — conesleeves.co.uk

Status of every technical and on-page SEO requirement, and how each one is
verified rather than assumed.

Two scripts enforce this. Both must pass before a deploy:

```bash
node scripts/validate-content.mjs   # data model, before the build
npm run build
node scripts/audit-build.mjs        # crawls dist/client, after the build
```

Current status: **both pass with 0 errors and 0 warnings.**

---

## 1. Per-page fundamentals

| Requirement | Status | How it is verified |
|---|---|---|
| Unique SEO title | ✅ 239/239 unique | Build audit fails on any duplicate |
| Title length ≤ 60 chars (raw) | ✅ | Content validator fails above 60; brand suffix appended only if the total stays ≤ 65 |
| Unique meta description | ✅ 239/239 unique | Build audit fails on any duplicate |
| Description 120–130 chars | ✅ | Validator warns below 118, fails above 160 |
| Exactly one H1 | ✅ | Build audit fails on zero or more than one |
| Unique H1 across pages | ✅ | Content validator fails on duplicates |
| Logical heading hierarchy | ✅ | Build audit warns on any skipped level (h2 → h4) |
| Self-referencing canonical | ✅ | Build audit compares canonical against the page's own path |
| HTTPS-only canonicals | ✅ | Build audit fails on any non-HTTPS canonical |
| Canonical hostname enforced | ✅ | Build audit fails on any canonical not on `conesleeves.co.uk` |
| Trailing slash on every canonical | ✅ | Build audit fails without one |
| Correct index/follow directives | ✅ | `index, follow, max-image-preview:large` on indexable pages; `noindex, nofollow` on `/thank-you/` and `/404/` |
| Open Graph metadata | ✅ | `og:title`, `og:description`, `og:url`, `og:image`, `og:type`, `og:site_name`, `og:locale` — audit fails if any is missing |
| Twitter metadata | ✅ | `summary_large_image` card with title, description, image and image alt |
| `hreflang="en-GB"` + `x-default` | ✅ | On every indexable page; audit fails if missing |
| Breadcrumbs | ✅ | Visible on every page type except the homepage, with matching `BreadcrumbList` |
| Descriptive URLs | ✅ | Root-level, lowercase, hyphenated, no IDs or parameters |
| Appropriate structured data | ✅ | See `SCHEMA-REPORT.md` |

---

## 2. Site-level technical

| Requirement | Status | Detail |
|---|---|---|
| `/sitemap.xml` | ✅ | Published as `/sitemap-index.xml` with one part file, 239 URLs |
| Segmented sitemaps | ✅ | `@astrojs/sitemap` splits automatically above 45,000 URLs; not yet needed |
| `robots.txt` | ✅ | Generated from the route data, so it cannot drift from the site |
| Custom 404 | ✅ | `/404/`, noindex, links into every range plus the catalogue and guides |
| One-to-one redirects | ✅ | 242 redirects, every target verified to exist by the build audit |
| Pagination | ✅ | Not needed — no listing is paginated; the largest grid is 58 products |
| RSS feed | ✅ | `/rss.xml`, the 12 guides, `en-gb`, trailing-slashed links |
| Favicon and web app icons | ✅ | SVG favicon, `favicon.ico`, 180px Apple touch icon, 192/512 PNG, `site.webmanifest` |
| Landmark structure | ✅ | `header` / `nav` / `main#main` / `footer`, skip link to `#main` |
| No indexation of form results | ✅ | `/thank-you/` is noindex, sitemap-excluded and robots-disallowed |
| No indexation of utility URLs | ✅ | `/api/` and `?error=` disallowed in robots.txt |
| No WordPress URLs in the sitemap | ✅ | Sitemap is generated from the route table, not from legacy data |
| Orphan pages | ✅ 0 | Build audit fails on any indexable page with no inbound internal link |
| Broken internal links | ✅ 0 | Every internal `href` resolved against the built page set |
| Missing images | ✅ 0 | Every `src` and every `srcset` candidate resolved against build output |

---

## 3. Internal linking

The brief's linking rules are enforced in the content validator, not left to
discipline.

| Rule | Status | Enforcement |
|---|---|---|
| Max one contextual link per section | ✅ | The data model allows exactly one `link` per section object |
| Descriptive anchor text | ✅ | Validator fails on anchors under 3 words |
| Links inside real sentences | ✅ | Each link stores a sentence with a `{link}` placeholder; validator fails if it is missing |
| No "click here" / "learn more" / "view" / "explore" | ✅ | Both scripts fail on these anchors |
| No self-links | ✅ | Validator fails on a section linking to its own page |
| No orphan pages | ✅ | Build audit fails on any |
| Locations not cross-linked exhaustively | ✅ | Each location links to exactly 3 geographically sensible neighbours, not all 25 |
| Related products genuinely relevant | ✅ | Hand-assigned per product; validator fails on any slug that does not resolve |

**Coverage:** 222 contextual links, 680 related-product links, 239 pages, zero
orphans. The footer links only 6 of 25 locations, so no page carries a
link-ring footprint.

---

## 4. Programmatic page quality control

Every programmatic page type was checked against the brief's criteria before
being allowed to publish.

| Check | Products (170) | Categories (17) | Locations (25) |
|---|---|---|---|
| Unique search intent | ✅ 11 synonym pages consolidated instead | ✅ 4 thin subcategories merged | ✅ 10 cannibalising areas dropped |
| Unique primary content | ✅ | ✅ | ✅ |
| Unique title and description | ✅ | ✅ | ✅ |
| Useful buyer information | ✅ 413 typed sections, 2.4 per page average | ✅ Guidance, not grids | ✅ Local trade context |
| Appropriate internal links | ✅ | ✅ | ✅ |
| No substantial duplication | ✅ 30 distinct section sequences | ✅ | ✅ Section order varies per page |
| No unsupported location claims | n/a | n/a | ✅ No offices, depots, teams or local delivery promises |
| No keyword cannibalisation | ✅ | ✅ | ✅ |
| At least 10 FAQs, none repeated | ✅ 1,700 pairs | ✅ 180 pairs | ✅ 250 pairs |

Pages that failed these tests were **not published**. The full list of what
was dropped and why is in `MIGRATION-INVENTORY.md` §5 and §7.

The FAQ row is enforced rather than sampled: `scripts/validate-content.mjs`
fails the build when any page carries fewer than ten pairs, repeats a
question within a page, or reuses an answer already used on another page.
Blog articles carry ten each on the same terms.

---

## 5. Image SEO

| Requirement | Status | Detail |
|---|---|---|
| Images copied locally | ✅ | 847 images bundled; nothing hotlinked |
| No hotlinking from the old domain | ✅ | Build audit fails on any `.com` reference anywhere in the output |
| Descriptive filenames | ✅ | Source names slugified; generic names (`1.jpg`) renamed to `<product>-detail-N.jpg` |
| Converted to WebP | ✅ | 3,730 renditions generated by Sharp at build |
| Responsive sizes | ✅ | Per-context width sets with matching `sizes` attributes |
| `width` and `height` on every image | ✅ | Build audit fails without them |
| Layout shift prevented | ✅ | Intrinsic dimensions plus `aspect-ratio` on every media container |
| Lazy loading below the fold | ✅ | `loading="lazy"` + `decoding="async"` on everything except the LCP image |
| LCP image prioritised | ✅ | `loading="eager"`, `fetchpriority="high"`, `decoding="sync"` on the hero |
| Unique, accurate alt text | ✅ | Derived per image from the descriptive filename plus product context |
| No keyword stuffing in alt | ✅ | Alt describes the individual photograph, not the target query |
| Broken and duplicate images removed | ✅ | 8 duplicate groups deduplicated, 1 corrupt file dropped |
| Consistent aspect ratio system | ✅ | `--ratio-product` 1:1, `--ratio-wide` 16:9, `--ratio-editorial` 3:2 |
| Sharp on retina screens | ✅ | Width sets run to roughly 2× the largest CSS size |
| No spaces in `srcset` candidates | ✅ | Filenames sanitised; build audit fails on any encoded space |

---

## 6. Core Web Vitals

| Lever | Implementation |
|---|---|
| **LCP** | Static HTML; hero preloaded with `fetchpriority="high"`; WebP; one 34 KB font preloaded; CSS inlined where small |
| **INP** | 9.1 KB of JavaScript across the whole site, in 2 chunks. No framework, no hydration. Nav drawer, gallery swap, form validation and configurator are plain DOM code |
| **CLS** | Every image has intrinsic dimensions; every media box has a reserved `aspect-ratio`; the fallback font carries overridden metrics (`ascent-override`, `descent-override`, `size-adjust`) so the web font swap moves nothing |
| **TTFB** | Fully prerendered static pages on a CDN. Only `/api/quote/` runs server-side |
| **Page weight** | 39.6 KB CSS + 9.1 KB JS + 34.2 KB font for the whole site, plus per-page images |
| **Font loading** | One self-hosted variable file, Latin subset, weights 400–800, `font-display: swap`, preloaded, no external request |
| **Render-blocking third parties** | None. No analytics, no tag manager, no chat widget, no CDN fonts, no icon library |
| **Critical CSS** | `inlineStylesheets: 'auto'` inlines small sheets; component styles are scoped and split |
| **Deferred scripts** | All scripts are module-type and non-blocking |
| **Reserved space for embeds** | No third-party embeds exist |
| **Oversized DOM** | Largest page (`/cone-sleeves/`) is 74 KB of HTML |
| **Animation** | Transitions only on transform/opacity/colour; no layout-triggering animation |
| **`prefers-reduced-motion`** | Respected globally — animations and transitions reduced to 0.01 ms, hover transforms disabled, smooth scrolling off |
| **Cache headers** | Fingerprinted assets under `/_astro/` get immutable caching from the Vercel adapter; `robots.txt` sets a 1-hour max-age |

No content or functionality was removed to improve a score.

---

## 7. Mobile

| Check | Status |
|---|---|
| Small phones (320–380 px) | ✅ Wrapper padding reduces below 480 px; no horizontal overflow |
| Large phones / tablets / laptops / large desktops | ✅ Fluid type scale from 380 px to 1280 px; grids use `minmax(min(Xrem, 100%), 1fr)` so no track can exceed the viewport |
| Mobile header | ✅ Sticky, logo scales down, top bar collapses to the phone number |
| Navigation | ✅ Slide-in drawer with focus management, Escape to close, `overflow: hidden` on body while open |
| Dropdowns | ✅ CSS hover/focus-within on desktop; native `<details>` accordions in the drawer |
| Forms | ✅ Single column below 640 px; **16 px minimum font size on all inputs** so iOS Safari does not zoom on focus |
| Upload fields | ✅ Styled `::file-selector-button`, full-width, 48 px minimum height |
| Product grids | ✅ `repeat(auto-fill, minmax(min(15rem, 100%), 1fr))` |
| Tables | ✅ Every table wrapped in `.table-scroll` with `overflow-x: auto`; the page body never scrolls sideways |
| Accordions | ✅ Native `<details>`/`<summary>`, 48 px minimum tap target |
| Custom design tool | ✅ Single column below 960 px, preview moves above the form, step labels collapse to numbers below 620 px |
| WhatsApp controls | ✅ Fixed bottom-left, 52 px targets, call button hidden above 780 px where `tel:` is useless |
| Tap targets | ✅ 44–48 px minimum on all interactive elements |
| Font sizes | ✅ Body never below 16 px |
| Horizontal overflow | ✅ `overflow-x: hidden` on body as a backstop, plus per-component `minmax(0, …)` |
| Sticky elements | ✅ Sidebars drop to static below 1000 px so they cannot trap the viewport |
| Image cropping | ✅ `object-fit: cover` inside fixed-ratio containers |
| Footer | ✅ 5 columns → 2 → 1 |
| Content hidden on mobile | ✅ **None.** Only the top-bar strapline and the desktop-redundant call button are hidden |

---

## 8. Accessibility

| Check | Status |
|---|---|
| Skip link to `#main` | ✅ |
| Landmarks | ✅ `header`, `nav` (labelled), `main`, `footer`, `aside` |
| Focus visible | ✅ 3 px amber outline with offset, never removed |
| Form labels | ✅ Every field has a real `<label>`; errors linked with `aria-describedby` and `aria-invalid` |
| Live regions | ✅ Form status uses `role="status"` / `aria-live="polite"` |
| Colour contrast | ✅ Green `#2b5a1e` on white ≈ 8.6:1; ink on cream ≈ 15:1; amber used only with dark text or as an accent |
| Keyboard operation | ✅ Drawer, dropdowns, gallery, accordions and the configurator all operable by keyboard |
| Configurator | ✅ Radio groups in labelled `<fieldset>`s, focus moved to each new step, edit buttons carry `aria-label` |
| Reduced motion | ✅ Respected globally |
| Image alt | ✅ On every image; decorative gallery thumbnails use `alt=""` with a labelled button |

---

## 9. Tracking readiness

Integration points exist for all of the following. **None emits anything
until a real ID is configured**, and no ID has been invented.

| Signal | Mechanism |
|---|---|
| GA4 | `PUBLIC_GA4_ID` — the tag is only written into the HTML when set |
| Google Tag Manager | `PUBLIC_GTM_ID` — takes precedence over GA4 if both are set |
| Search Console verification | `PUBLIC_GSC_VERIFICATION` — meta tag only rendered when set |
| Quote form submissions | `dataLayer.push({ event: 'quote_submit' })` |
| Design tool submissions | `dataLayer.push({ event: 'design_tool_submit' })` |
| Phone clicks | `dataLayer.push({ event: 'phone_click' })` |
| Email clicks | `dataLayer.push({ event: 'email_click' })` |
| WhatsApp clicks | `dataLayer.push({ event: 'whatsapp_click' })` |

All five click events are guarded — they only fire if `window.dataLayer`
already exists, so nothing is sent anywhere with no tag manager installed.

**Before enabling analytics:** the cookie policy currently states truthfully
that this site sets no cookies, and no consent banner is shown because none is
needed. Turning on a tag makes that statement false. See
`PRE-LAUNCH-CHECKLIST.md` §6.

---

## 10. Domain separation

The brief's central requirement: zero occurrences of the old domain anywhere
in the deployable output.

`scripts/audit-build.mjs` sweeps **every** built file — HTML, CSS, JS, JSON,
XML, SVG, TXT and the web manifest — for:

```
conesleeves.com · www.conesleeves.com · theconesleeves.com
/wp-content/ · /wp-includes/ · xmlrpc.php
localhost: · 127.0.0.1
lorem ipsum · TODO · FIXME · placeholder markers
US phone patterns · (xxx) xxx-xxxx · $ prices · USD
```

**Result: 0 occurrences.** The audit exits non-zero on a single hit, so this
cannot regress silently.

The supplied source archives are excluded from the deployable project by
`.gitignore` (`*.zip`, `*.sql`, `*.xml`, `src-images/`, `_source/`) — they are
migration inputs, not project files.

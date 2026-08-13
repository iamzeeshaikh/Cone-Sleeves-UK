# Cone Sleeves UK

Astro website for **conesleeves.co.uk** — custom printed cone sleeves and food
packaging for UK businesses.

239 indexable pages: 170 products, 17 category pages, 25 UK locations, 12 guides,
plus company, legal and tool pages.

---

## Commands

```bash
npm install

npm run dev        # local dev server
npm run build      # production build to dist/ and .vercel/output/
npm run preview    # preview the built site
npm run audit      # crawl the build and check it (run after build)

node scripts/validate-content.mjs   # content model checks (run before build)
```

**Both scripts must pass before deploying.** They are the guardrails that keep
the site honest:

| Script | Runs | Catches |
|---|---|---|
| `validate-content.mjs` | Before the build, against the data model | Banned vocabulary, American spellings, duplicate titles/descriptions/H1s/openings, dangling related-product slugs, internal links to pages that do not exist, non-descriptive anchors, blog posts under 1,000 words, missing product images, old-domain references in source |
| `audit-build.mjs` | After the build, against `dist/client` | Broken links, missing images, `srcset` candidates that will not load, duplicate titles/descriptions, missing or wrong canonicals, missing hreflang/OG/Twitter tags, heading-level jumps, images without dimensions, invalid JSON-LD, fabricated review/price/availability markup, orphan pages, sitemap mismatches, redirect targets that do not exist, and any surviving `.com` reference |

---

## Project structure

```
src/
  config/site.ts          Brand, contact details, canonical URL helper
  data/
    types.ts              Content model — the typed Section union
    categories.ts         18 category records
    locations.ts          25 UK location records
    blog.ts               Post aggregation, word count, reading time
    redirects.ts          Legacy URL map
    static-pages.ts       Fixed routes and noindex list
    products/             170 product records across 8 files
    posts/                12 articles across 3 files
  layouts/                BaseLayout, ProductPage, CategoryPage,
                          LocationPage, TextPage
  components/             Header, Footer, Seo, QuoteForm, Gallery,
                          Sections, ProductCard, Faqs, Breadcrumbs,
                          FloatingContact, Logo
  lib/
    images.ts             Per-product image glob and alt-text generation
    schema.ts             JSON-LD builders
  pages/
    [slug].astro          Products, top-level categories and locations
    [category]/[sub].astro  Subcategories
    blog/[slug].astro     Articles
    api/quote/index.ts    Server-side form endpoint
    …                     Static pages
  assets/products/        847 source images in 170 folders
  styles/global.css       Design tokens and base styles
public/
  fonts/                  Inter, Latin subset, 34 KB
  icons/  og/             Favicons, app icons, Open Graph card
scripts/                  Validation and audit tooling
```

---

## How content works

Product, category and location pages are **not** rendered from a fixed
template. Each record declares its own ordered list of typed sections, so the
page shape follows the subject rather than a rota.

```ts
{
  slug: 'custom-waffle-cone-sleeves',
  seoTitle: '…',            // ≤ 60 chars, unique
  seoDescription: '…',      // 120–130 chars, unique
  h1: '…',                  // unique
  intro: ['…', '…'],        // unique opening — duplicates fail the build
  sections: [
    { kind: 'prose',   heading: '…', body: ['…'], link: { … } },
    { kind: 'bullets', heading: '…', items: ['…'] },
    { kind: 'specs',   heading: '…', rows: [['Board', '…']] },
    { kind: 'compare', heading: '…', columns: [...], rows: [...] },
  ],
  faqs: [{ q: '…', a: '…' }],
  related: ['…'],           // must resolve, or the build fails
}
```

Seven section kinds are available: `prose`, `bullets`, `specs`, `steps`,
`uses`, `compare`, `callout`. Across 170 products there are **30 distinct
section sequences** — no single template dominates.

Contextual internal links are stored as `{ href, anchor, sentence }` where the
sentence contains a `{link}` placeholder. That is what keeps every link inside
real prose, at most one per section, with a descriptive anchor.

### Adding a product

1. Add a record to the relevant file in `src/data/products/`.
2. Put its images in `src/assets/products/<slug>/`.
3. Add its slug to two or three other products' `related` arrays so it is not
   an orphan.
4. Run `node scripts/validate-content.mjs`.

---

## Editorial rules enforced in code

The brief's content rules are checked by `validate-content.mjs` rather than
left to discipline:

- 27 banned marketing terms rejected across every published string
- 35 American spellings rejected
- No duplicate titles, descriptions, H1s or opening paragraphs
- No `click here` / `learn more` / `view` / `explore` anchors
- Anchors must be at least 3 words
- One contextual link per section maximum
- Blog posts must exceed 1,000 words and carry a bullet list
- No page may be an orphan

---

## What this site deliberately does not claim

A design decision worth knowing about before editing content: the site does
not publish lead times, minimum order quantities, prices, recyclability
claims, certifications, delivery guarantees or reviews — because none were
supplied and inventing them would be worse than omitting them.

There are 11 visible "pending" callouts explaining exactly what is missing and
why. The JSON-LD contains no `offers`, no `aggregateRating`, no `review` and
no `LocalBusiness`, and the build audit **fails** if any of those appear.

If real data becomes available, `SCHEMA-REPORT.md` §5 explains what to switch
on and where.

---

## Environment

Copy `.env.example` to `.env`. Variable names only are documented there — no
credentials are committed. Without SMTP configured, forms return a clear 503
telling visitors to email instead; the rest of the site is unaffected.

---

## Documentation

| File | Contents |
|---|---|
| `MIGRATION-INVENTORY.md` | Source material, what was reused, catalogue changes, build results, outstanding items |
| `URL-MAP.md` | Every published URL and all 242 redirects |
| `SEO-CHECKLIST.md` | Technical and on-page SEO status with verification method |
| `CONTENT-UNIQUENESS-REPORT.md` | Evidence of original content and page differentiation |
| `SCHEMA-REPORT.md` | Every JSON-LD node, and what was deliberately omitted |
| `PRE-LAUNCH-CHECKLIST.md` | What is verified, and what still needs the business |

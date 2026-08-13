# Schema Report — conesleeves.co.uk

Every JSON-LD node the site emits, why it is there, and — just as importantly
— which schema types were deliberately **not** used and what would have to be
true before they could be.

All markup is generated in `src/lib/schema.ts` from content that is visibly
rendered on the page. Nothing is emitted that a visitor cannot see.

---

## 1. Validation status

`scripts/audit-build.mjs` parses every `<script type="application/ld+json">`
block on all 242 built pages and fails the build if any of the following is
true:

| Check | Result |
|---|---|
| JSON parses | ✅ 242/242 pages |
| Every node has an `@type` | ✅ |
| Every URL in the graph is on `conesleeves.co.uk` | ✅ 0 off-site URLs |
| No `aggregateRating` anywhere | ✅ 0 |
| No `review` or `ratingValue` anywhere | ✅ 0 |
| No `price`, `priceCurrency` or `availability` | ✅ 0 |
| No `offers` node | ✅ 0 |
| No `LocalBusiness` | ✅ 0 |
| Every `FAQPage` question is visible in the page body | ✅ verified string-by-string |

The FAQ check is the strictest one: each question in the markup is matched
against the rendered `document.body` text. Markup describing questions that
are not on the page would fail the build.

---

## 2. Node types in use

### Emitted on every page

| Type | `@id` | Purpose |
|---|---|---|
| `Organization` | `/#organization` | The business entity. Name, URL, description, email, telephone, logo, `areaServed: United Kingdom`, a sales `ContactPoint` |
| `WebSite` | `/#website` | Site entity, `inLanguage: en-GB`, publisher references the Organization |

Both are declared once site-wide with stable `@id` values, so every other node
references them rather than redeclaring the entity differently per template.

### Per page type

| Page type | Nodes emitted | Count |
|---|---|---|
| Homepage | `WebPage`, `ItemList` (the 7 ranges) | 1 |
| Product | `BreadcrumbList`, `WebPage`, `Product`, `FAQPage` | 170 |
| Category | `BreadcrumbList`, `CollectionPage`, `ItemList`, `FAQPage` | 18 |
| Location | `BreadcrumbList`, `WebPage`, `Service`, `FAQPage` | 25 |
| Blog article | `BreadcrumbList`, `WebPage`, `BlogPosting`, `FAQPage` (where present) | 12 |
| Blog index | `BreadcrumbList`, `CollectionPage`, `ItemList` | 1 |
| Products index | `BreadcrumbList`, `CollectionPage`, `ItemList` (170 items) | 1 |
| Locations index | `BreadcrumbList`, `CollectionPage`, `ItemList` (25 items) | 1 |
| About | `BreadcrumbList`, `AboutPage` | 1 |
| Contact | `BreadcrumbList`, `ContactPage` | 1 |
| FAQs | `BreadcrumbList`, `FAQPage` (16 questions) | 1 |
| Legal & policy | `BreadcrumbList`, `WebPage` | 6 |
| `/thank-you/`, `/404/` | **None** | 2 |

Noindex pages carry no structured data at all, which is deliberate — there is
nothing for a search engine to do with markup on a page it is told not to
index.

---

## 3. The Product node, and what it omits

```json
{
  "@type": "Product",
  "@id": "https://conesleeves.co.uk/custom-waffle-cone-sleeves/#product",
  "name": "Custom Waffle Cone Sleeves",
  "description": "…",
  "url": "https://conesleeves.co.uk/custom-waffle-cone-sleeves/",
  "category": "Cone Sleeves",
  "image": [ "…", "…", "…", "…" ],
  "brand": { "@type": "Brand", "name": "Cone Sleeves UK" },
  "manufacturer": { "@id": "https://conesleeves.co.uk/#organization" }
}
```

**There is no `offers` node.** That is the single most consequential decision
in this report, so it is worth being explicit about why.

`Offer` requires a `price` and an `availability`. This is a quote-led business
with no published pricing and no stated stock position. Emitting an `Offer`
would mean inventing both. The same applies to:

| Property | Why it is absent |
|---|---|
| `price` / `priceCurrency` | No published prices exist. Everything is quoted per specification |
| `availability` | Made to order. There is no stock level to declare |
| `priceValidUntil` | Follows from a price that does not exist |
| `aggregateRating` | No reviews have been independently collected |
| `review` | Same |
| `sku` / `gtin` | The source export had no GTINs; inventing identifiers would be worse than omitting them |
| `MerchantReturnPolicy` | The returns timescales have not been supplied. See §5 |
| `OfferShippingDetails` | No confirmed shipping rates, handling times or delivery estimates |

A `Product` node without `offers` is valid structured data. It will not
produce a rich price snippet, which is the correct outcome: there is no price
to show.

---

## 4. Location pages use `Service`, not `LocalBusiness`

This is the second decision worth explaining.

`LocalBusiness` requires a genuine physical address that the public can visit.
This business has not supplied one, and none has been invented. Emitting
`LocalBusiness` with a fabricated or omitted address on 25 location pages
would be exactly the kind of fake local presence the brief rules out — and it
is a common cause of manual action against location-page networks.

Each location page instead declares:

```json
{
  "@type": "Service",
  "@id": "https://conesleeves.co.uk/cone-sleeves-london/#service",
  "name": "Custom printed food packaging for London",
  "serviceType": "Custom printed food packaging",
  "provider": { "@id": "https://conesleeves.co.uk/#organization" },
  "areaServed": { "@type": "Place", "name": "London" },
  "url": "https://conesleeves.co.uk/cone-sleeves-london/"
}
```

This says what is true: one national organisation serving that area. It makes
no claim about premises there.

**If a genuine public UK address is confirmed later,** `LocalBusiness` becomes
appropriate for the address's own location only — not for all 25 pages. The
builder is already in `src/lib/schema.ts`; adding it is a small change once
there is a real address to put in it.

---

## 5. Fields that populate from configuration

Three `Organization` properties are emitted **only** when a real value is
supplied through an environment variable. Until then they are absent rather
than guessed.

| Property | Environment variable | Currently |
|---|---|---|
| `legalName` | `PUBLIC_COMPANY_LEGAL_NAME` | Not emitted |
| `vatID` | `PUBLIC_VAT_NUMBER` | Not emitted |
| `identifier` (Companies House) | `PUBLIC_COMPANY_NUMBER` | Not emitted |
| `sameAs` | `SOCIAL_PROFILES` in site config | Empty array, so not emitted |

The same pattern applies to `MerchantReturnPolicy` and
`OfferShippingDetails`: the brief permits them **only** when a real policy and
accurate shipping data are supplied. Neither has been, so neither exists. When
the returns window and the shipping matrix are confirmed, both can be added to
the `Product` builder — and at that point they will describe something true.

---

## 6. FAQPage usage

`FAQPage` markup appears on 226 pages: 170 products, 18 categories, 25
locations, `/faqs/`, and any blog article with a questions block.

It is emitted only where the identical questions and answers are rendered as
visible `<details>` accordions on the same page. The build audit enforces
this by matching every markup question against the page's rendered text.

**480 question/answer pairs** across the site, all of them visible.

Google has narrowed FAQ rich results to authoritative government and health
sites, so this markup is unlikely to produce a visual result. It remains
correct and useful as an entity signal, and it costs nothing because the
content is on the page regardless.

---

## 7. BreadcrumbList

Emitted on every page except the homepage and the two noindex pages, and
always matched by a visible breadcrumb trail.

```
Home → Cone Sleeves → Custom Waffle Cone Sleeves
Home → Paper Cups → Paper Cup Sizes → 12oz Paper Cups
Home → Areas we supply → London
Home → Guides → How Cone Sleeve Printing Works
```

Breadcrumb `@id` values are referenced from each page's `WebPage` node via
`breadcrumb`, so the graph is properly connected rather than a set of loose
nodes.

---

## 8. BlogPosting

```json
{
  "@type": "BlogPosting",
  "headline": "…",
  "description": "…",
  "url": "…",
  "mainEntityOfPage": { "@id": "…#webpage" },
  "image": "…",
  "datePublished": "2026-06-11",
  "dateModified": "2026-08-12",
  "wordCount": 1132,
  "articleSection": "Sizing",
  "inLanguage": "en-GB",
  "author": { "@type": "Organization", "name": "Cone Sleeves UK", "url": "…/about/" },
  "publisher": { "@id": "…#organization" }
}
```

`wordCount` is computed from the actual article body at build time, not
declared by hand, so it cannot drift.

`dateModified` uses the article's genuine `updated` date where one exists and
falls back to `datePublished` otherwise. No article claims a modification that
did not happen.

Authorship is attributed to the organisation rather than to an invented named
person, since no individual author has been supplied.

---

## 9. Graph connectivity

Every page's graph resolves into a single connected structure:

```
Organization (/#organization)
 ├── referenced by WebSite.publisher
 ├── referenced by Product.manufacturer
 ├── referenced by Service.provider
 ├── referenced by BlogPosting.publisher
 └── referenced by WebPage.about

WebSite (/#website)
 └── referenced by WebPage.isPartOf

WebPage (<url>#webpage)
 ├── breadcrumb → BreadcrumbList (<url>#breadcrumb)
 └── primaryImageOfPage → ImageObject
```

No node is orphaned, and no entity is declared twice with different
properties.

---

## 10. Testing recommendations

Before launch, spot-check one page of each type in Google's Rich Results Test
and the Schema.org validator:

| URL | Expect |
|---|---|
| `/` | Organization, WebSite, WebPage, ItemList |
| `/custom-waffle-cone-sleeves/` | Product (no price warning is expected and correct), BreadcrumbList, FAQPage |
| `/paper-cups/sizes/` | CollectionPage, ItemList, BreadcrumbList, FAQPage |
| `/cone-sleeves-london/` | Service, BreadcrumbList, FAQPage |
| `/blog/how-cone-sleeve-printing-works/` | BlogPosting, BreadcrumbList |
| `/contact/` | ContactPage, BreadcrumbList |

**Expected non-error notices:** Google's Product test will report that
`offers`, `review` and `aggregateRating` are missing. Those are recommended
fields, not required ones, and their absence here is deliberate and correct.
Adding them would require inventing prices and reviews.

---

## 11. Summary

| Requirement from the brief | Status |
|---|---|
| Organization | ✅ Every page |
| WebSite | ✅ Every page |
| WebPage | ✅ Every indexable page |
| BreadcrumbList | ✅ Every page except the homepage |
| Product | ✅ 170 product pages |
| Offer / AggregateOffer *only where valid* | ✅ Correctly omitted — no valid price data exists |
| MerchantReturnPolicy *only with a real policy* | ✅ Correctly omitted — policy not supplied |
| OfferShippingDetails *only with accurate data* | ✅ Correctly omitted — no confirmed shipping data |
| FAQPage *only with visible FAQs* | ✅ 226 pages, all verified against rendered text |
| BlogPosting / Article | ✅ 12 articles |
| ContactPage | ✅ |
| AboutPage | ✅ |
| CollectionPage | ✅ 21 pages |
| ImageObject | ✅ Organization logo and page primary images |
| LocalBusiness *only with a genuine location* | ✅ Correctly omitted — no public address supplied |
| No fake reviews | ✅ Enforced by the build audit |
| No fake ratings | ✅ Enforced by the build audit |
| No unsupported prices | ✅ Enforced by the build audit |
| No invented stock availability | ✅ Enforced by the build audit |
| No invented delivery times | ✅ |
| No invented return policies | ✅ |
| Schema consistent with visible content | ✅ FAQ questions matched string-by-string |
| All schema URLs on `conesleeves.co.uk` | ✅ Enforced by the build audit |
| JSON-LD validated, errors fixed | ✅ 0 errors across 242 pages |

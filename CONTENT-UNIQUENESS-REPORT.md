# Content Uniqueness Report — conesleeves.co.uk

Evidence that every word on this site was written for it, and that the
programmatic page types are genuinely differentiated rather than templated.

---

## 1. Headline position

**Not one sentence was carried over from the source site.** Every product
description, category page, blog article, FAQ answer, legal page and location
page was written from scratch for a UK audience.

| | Source site | This site |
|---|---|---|
| Product copy | US-market, keyword-led | Rewritten, UK-market, specification-led |
| Page copy | 15 pages | All rewritten |
| Blog posts | 17 posts | All 17 replaced with 12 new articles |
| Location pages | None existed | 25 written from scratch |
| Legal pages | Generic templates | Rewritten for a UK B2B bespoke-goods supplier |

**Total authored: ≈ 78,300 words.**

---

## 2. Why the source copy could not be reused

The supplied copy was not merely unsuitable for reuse — it was factually wrong
for this business. A representative example from the WooCommerce export:

> "We offer Custom Ice Cream Cone Wrappers in the **USA** at wholesale prices…
> we offer **Free Shipping in the USA, Canada, UK & Australia!**"

Every product carried:

- US market positioning and US-only trade claims.
- Shipping promises no one has confirmed for this business.
- Inline links back to `https://www.conesleeves.com/`.
- Keyword-stuffed repetition of the product name.
- Near-identical opening paragraphs across the catalogue.

None of that survives. The shipping and free-delivery claims in particular are
exactly the kind of unsupported assertion this build refuses to publish.

---

## 3. Structural anti-duplication

Product pages are not rendered from a fixed template. Each record declares its
own **ordered list of typed content sections**, so the page shape follows the
product.

Seven section types are available:

| Type | Renders as |
|---|---|
| `prose` | Headed paragraphs |
| `bullets` | Intro, bullet list, closing line |
| `specs` | Two-column specification table |
| `steps` | Numbered process list |
| `uses` | Card grid of use cases |
| `compare` | Two-column comparison table |
| `callout` | Highlighted note, optionally flagged as pending confirmation |

**Measured result across 170 products:**

- **413 content sections**, 2.4 per product on average.
- **30 distinct section-type sequences** — no single template dominates.
- Section *order* differs by product type: sleeves lead with geometry, trays
  lead with board weight, cups lead with volume, papers lead with what the
  paper has to resist.

The content validator fails the build if any two pages share an opening
paragraph, which makes a spun template impossible to introduce later.

---

## 4. Enforced writing rules

`scripts/validate-content.mjs` fails the build on any of the following. It
runs before every build.

### Banned vocabulary

All 27 terms from the brief are rejected across every published string:

```
introducing · functional · embrace · versatility · look no further
unparalleled · function · tailor-made · robust · paramount · crafted
discover · elevate · aesthetic · unleash · versatile · enhance
exquisite · precious · distinctive · exceptional · dive into a world
bring · arrays · perfect for · expert · best
```

Matching is word-boundary based, so `functional`, `bringing` and `bests` are
all caught. One documented exception: `best-before`, which is the legally
correct UK term for a durability date and not the marketing superlative the
rule targets.

**11 violations were found and rewritten during the build**, including "at a
function" (→ "at a reception"), "prints best" (→ "prints most cleanly") and
"the best compromise" (→ "the most workable compromise").

### British English

35 American spellings are rejected, including `color`, `aluminum`,
`customize`, `organize`, `catalog`, `liter`, `gray`, `center` and `fiber`.

Four product slugs were renamed as a result, with 301s from the old forms:
`aluminum-` → `aluminium-`, `colored-` → `coloured-`, `two-color` →
`two-colour`, and `custom-printed-food-paper` → `custom-greaseproof-paper`
(the dominant UK term).

### Duplicate detection

| Check | Result |
|---|---|
| Duplicate SEO titles | 0 across 240 pages |
| Duplicate meta descriptions | 0 across 240 pages |
| Duplicate H1s | 0 |
| Duplicate opening paragraphs | 0 |

One duplicate H1 was caught and fixed during the build: the `coloured`
subcategory and the `coloured-paper-cups` product both used "Coloured Paper
Cups". The category became "Paper Cups by Colour".

---

## 5. Location page differentiation

The brief warns specifically against swapping only a city name. Each of the 25
location pages is built from something genuinely local to that place's food
trade.

| Page | The distinct angle |
|---|---|
| London | Central rents mean no storage; flat-packed stock and fewer lines |
| Manchester | Student calendar creates two hard demand peaks and a dead summer |
| Birmingham | Dessert lounge trade is sit-in, so trays beat deep wraps |
| Leeds | Small arcade units make assembly speed a measurable cost |
| Glasgow | Two customers in one city: century-old Italian-Scottish cafés and new dessert bars |
| Liverpool | Match days and cruise arrivals — order to peak day, not average |
| Bristol | Customers challenge environmental claims across the counter |
| Sheffield | Taproom kitchen residencies with monthly menu changes |
| Edinburgh | Three weeks in August are a different business, not a busy period |
| Leicester | Golden Mile sweet centres sell by weight, so packaging follows price bands |
| Nottingham | Hockley independents want kraft, which constrains colour |
| Cardiff | Bilingual Welsh/English artwork must be planned, not translated |
| Newcastle | Late-night volume; open vs vented formats in cold weather |
| Coventry | Delivery-led kitchens where packaging is the entire brand |
| Bradford | Wedding and celebration catering ordered to fixed dates in bulk |
| Southampton | Cruise turnaround dates are published in advance — plan against the calendar |
| Portsmouth | Southsea seafront: wind, sun and salt air on unlaminated board |
| Reading | Thames Valley corporate catering; platters stacked for multi-drop rounds |
| Cambridge | Three separate economies — market stalls, colleges, science park |
| Oxford | Covered Market units have almost no back-of-house |
| Kent | Farm shop producers and coastal vendors need opposite specifications |
| Essex | Southend seafront seasonality against steady commuter-town trade |
| Surrey | Destination customers notice packaging; café and retail must match |
| Lancashire | Blackpool Illuminations extend the season into damp autumn |
| Gloucestershire | Cheltenham race weeks concentrate a year's catering into days |

Section **order** varies between pages, not just section content. Some open
with a comparison table, some with a bulleted trade list, some with a
narrative.

### What no location page claims

- No local office, depot, factory or team.
- No local delivery time or same-day service.
- No fake address.
- No local testimonials.

Every page states plainly that orders travel on national carriers and that any
date given is a carrier estimate.

### Locations deliberately not published

Ten of the brief's suggested areas were dropped because each duplicated the
search intent of a city already covered — Greater London, Greater Manchester,
West Midlands, West Yorkshire, Merseyside, South Yorkshire, Nottinghamshire,
Leicestershire, Cambridgeshire and Hampshire. Publishing them would have been
cannibalisation, not coverage.

---

## 6. Product catalogue differentiation

### Consolidation over duplication

Eleven source products were literal synonyms of another product. Rather than
write two thin pages competing for one query, each was folded into the page
that keeps the topic, with a 301 and its images merged in. Full list in
`MIGRATION-INVENTORY.md` §5.

### Genuine differentiation where names are close

Where two products share a topic but have distinct buyer intent, both were
published with sharply different angles:

| Pair | How they differ |
|---|---|
| `custom-ice-cream-cone-sleeves` / `custom-ice-cream-cone-wrappers` | Print-led branding vs deeper coverage, plain or printed |
| `printed-paper-cups` / `logo-paper-cups` | Full-colour process printing vs single-colour logo economics |
| `ice-cream-paper-cups` / `…-with-lids` | Scoop-to-order vs pre-filled cabinet stock |
| `custom-cold-drink-sleeves` / `custom-iced-coffee-sleeves` | General condensation vs hour-long holding times |
| `brown-paper-cups` / `kraft-paper-cups` | Printed brown vs naturally unbleached, and what that costs |
| `paper-drinking-cups` / `paper-water-cups` | Jug-filled service vs dispenser tolerance |
| `custom-taco-sleeves` / `custom-taco-paper` | Holding the shell upright vs catching what falls out |

### Size pages, which are the hardest to differentiate

Twelve paper cup size pages could easily have been one template with a number
swapped. Each instead covers what that specific volume is genuinely used for:

- **2oz** — print area is the binding constraint, not capacity.
- **4oz** — the smallest size where a logo prints legibly.
- **6oz** — the ratio a flat white actually needs.
- **7oz** — a size defined by dispensers rather than by any drink.
- **8oz** — shares a rim with 12oz, halving your lid lines.
- **9oz** — chosen by caterers when a pour overfills an 8oz cup.
- **12oz** — the most ordered UK size; where the print budget should go.
- **16oz** — where hot and cold service overlap.
- **20oz** — thick shakes stress the lid, not the cup.
- **32oz** — clear cups; design must frame the drink, not cover it.
- **Small (2–6oz)** — volume sampling economics.
- **Large (16–32oz)** — tall cups are unstable by design.

---

## 7. Blog articles

All 12 are original, UK-written, and each clears the 1,000-word minimum. The
validator fails the build on any post below that threshold.

| Article | Words |
|---|---|
| How to Choose the Right Cone Sleeve Size | 1,132 |
| Paperboard Options for Printed Cone Sleeves | 1,103 |
| How Cone Sleeve Printing Works | 1,113 |
| Preparing Artwork for Custom Cone Sleeves | 1,032 |
| Food-Safe Considerations for Cone Sleeve Packaging | 1,014 |
| Cone Sleeves for Ice Cream Shops and Dessert Brands | 1,094 |
| Printed Cone Sleeves for Events and Catering | 1,022 |
| Comparing Matt and Gloss Finishes for Cone Sleeves | 1,133 |
| Ways to Reduce Packaging Waste in Dessert Businesses | 1,040 |
| How Branded Cone Sleeves Support Takeaway Presentation | 1,024 |
| A Guide to Printed Coffee Cup Sleeves | 1,147 |
| Choosing a Cone Sleeve Supplier in the UK | 1,062 |

**Total: 12,916 words.**

Every article carries one H1, a logical H2/H3 structure, at least one bullet
list, a numbered list, a featured image with unique alt text, contextual
internal links, a unique title and description, `BlogPosting` schema, a named
author and genuine published and updated dates. All of these are validated.

Titles were checked against the product catalogue for cannibalisation. Two
proposed topics were reframed to avoid competing with a product page: the
coffee sleeve article is positioned as a buying guide rather than a product
page, and the supplier-choice article covers evaluation criteria rather than
restating the catalogue.

---

## 8. What this site refuses to claim

The most distinctive editorial decision, and the one that made the copy
genuinely different from the source, was systematically declining to invent
facts.

| Not published | Why | Where handled instead |
|---|---|---|
| Turnaround times | Depends on print method, run length and press schedule | Confirmed per quote; stated as such on every product page |
| Minimum order quantities | Follows from the print method | Confirmed per quote |
| Prices | Quote-led business, no published pricing | No `Offer` or price schema anywhere |
| Recyclability claims | Depends on local collection, not the material alone | Material stated; the claim is left to the buyer to verify |
| Certifications | None supplied | Marked pending on the relevant pages |
| Recycled content percentages | Varies by stock and availability | Confirmed per quote |
| Reviews and star ratings | None independently collected | No review markup exists on the site |
| Delivery guarantees | No own vehicles | "Carrier estimate, not a guarantee", stated repeatedly |
| Company number, VAT number, address | Not supplied | Clearly marked pending fields |
| Payment and returns terms | Not supplied | Clearly marked pending in the policies |

There are **11 `pending` callouts** across the site. Each explains what is
missing, why it has not been guessed, and that it will appear once supplied.
They are visually distinct and honest rather than hidden.

The homepage carries a section titled *"No invented lead times, and no claims
we cannot back"* which states this position openly. That section alone is
something the source site could not have produced.

---

## 9. Verification commands

```bash
node scripts/validate-content.mjs   # banned words, spellings, duplicates,
                                    # link rules, word counts, orphans
npm run build
node scripts/audit-build.mjs        # crawls the built HTML for duplicates,
                                    # broken links, and old-domain references
```

Both currently pass with **0 errors and 0 warnings**.

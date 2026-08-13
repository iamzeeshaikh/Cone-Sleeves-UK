# Pre-Launch Checklist — conesleeves.co.uk

Everything already verified, and everything that still needs a decision or a
piece of information from the business.

Items marked **BLOCKING** should be resolved before the site goes live.
Everything else can follow.

---

## Already verified

These were checked against the built output, not assumed. Two scripts enforce
them and both currently pass with zero errors and zero warnings.

```bash
node scripts/validate-content.mjs   # content model
npm run build                       # Astro production build
node scripts/audit-build.mjs        # crawls dist/client
```

### Build and crawl

- [x] Production build completes — 241 HTML pages, 1 serverless function
- [x] 3,730 image renditions generated
- [x] 239 indexable pages, 239 unique titles, 239 unique descriptions
- [x] Zero broken internal links
- [x] Zero missing images
- [x] Zero orphan pages
- [x] Zero duplicate titles, descriptions or H1s
- [x] Every page has exactly one H1
- [x] Every canonical is absolute, HTTPS, self-referencing and trailing-slashed
- [x] `hreflang="en-GB"` and `x-default` on every indexable page
- [x] Sitemap lists exactly the 239 indexable pages, nothing more
- [x] `robots.txt` generated from route data
- [x] Custom 404 page, noindex, with useful links
- [x] 243 redirects emitted, **every target verified to exist**
- [x] All JSON-LD parses; zero fabricated reviews, ratings, prices or availability
- [x] Every FAQPage question verified present in the rendered page text

### Domain separation

- [x] **Zero occurrences of `conesleeves.com`** anywhere in the build
- [x] Zero WordPress paths, `localhost`, or staging URLs in deployable files
- [x] Zero US phone numbers, dollar prices or `USD` references
- [x] Zero placeholder markers (`lorem ipsum`, `TODO`, `FIXME`)
- [x] All images served locally; nothing hotlinked
- [x] All schema URLs on `conesleeves.co.uk`

### Contact details

- [x] `+44 7458 651107` in the header bar, footer, contact page, every quote form, floating call button and `ContactPoint` schema
- [x] `tel:+447458651107` — build audit fails on any other `tel:` link
- [x] `https://wa.me/447458651107` — build audit fails on any other number
- [x] WhatsApp messages pre-filled with the current product or page
- [x] `info@conesleeves.co.uk` throughout; no other address anywhere

### Forms — tested end to end

Tested against a running server with real POSTs:

- [x] Honeypot field silently accepts and discards bot submissions
- [x] Submissions under 2.5 seconds rejected (429)
- [x] Rate limit triggers after 5 submissions per IP (429)
- [x] Missing name, invalid email, missing consent all rejected (400)
- [x] Disallowed file type rejected (415)
- [x] File over 10 MB rejected (413)
- [x] Valid submission with a PDF passes validation and reaches the send step
- [x] No-JavaScript fallback returns a 303 to `/thank-you/`
- [x] `GET /api/quote/` returns 405
- [x] Astro's origin check blocks cross-site POSTs
- [x] Filenames rebuilt server-side rather than trusted
- [x] Mail headers guarded against injection
- [x] SMTP credentials read from environment only; never in client code

### Design tool

- [x] Six steps with progress indicator; back and continue navigation
- [x] Live SVG representation updates with style, depth, board, print, finish and colour
- [x] Marked clearly as a representation, not a manufacturing proof
- [x] Summary screen lists every choice with a per-row "Change" button
- [x] Submits the full configuration as JSON with the enquiry
- [x] Artwork upload attaches to the same email
- [x] Keyboard operable; focus moves to each new step
- [x] No third-party libraries — plain DOM code

### Performance and accessibility

- [x] 39.6 KB CSS + 9.1 KB JS + 34.2 KB font for the entire site
- [x] Self-hosted subset variable font with metric-matched fallback (no swap shift)
- [x] Every image has `width`/`height`; every media box has a reserved ratio
- [x] LCP images preloaded with `fetchpriority="high"`
- [x] No render-blocking third-party scripts
- [x] `prefers-reduced-motion` respected globally
- [x] 16 px minimum input font size (no iOS zoom-on-focus)
- [x] Tables scroll inside their own container; body never scrolls sideways
- [x] Skip link, landmarks, visible focus, labelled forms, live status regions
- [x] No content hidden on mobile

---

## BLOCKING — information needed from the business

Each item below has a clearly marked placeholder in the site that renders only
when a real value is supplied. **Nothing has been invented.**

### 1. SMTP credentials — BLOCKING

Without these, every enquiry form returns a clear 503 telling the visitor to
email instead. The site is otherwise fully functional.

Copy `.env.example` to `.env` and fill in:

```
SMTP_HOST=            SMTP_PORT=            SMTP_SECURE=
SMTP_USER=            SMTP_PASS=
SMTP_TO=info@conesleeves.co.uk
SMTP_FROM_NAME=Cone Sleeves UK
SMTP_FROM_EMAIL=info@conesleeves.co.uk
```

Set the same variables in the hosting provider's environment settings.
**Never commit `.env`** — it is gitignored.

Then send one real test enquiry with an artwork attachment and confirm it
arrives at `info@conesleeves.co.uk` with the attachment intact.

### 2. Legal entity details — BLOCKING

Required by law on a UK business website, and currently absent because they
were not supplied.

```
PUBLIC_COMPANY_LEGAL_NAME=
PUBLIC_COMPANY_NUMBER=
PUBLIC_VAT_NUMBER=
PUBLIC_REGISTERED_ADDRESS=
PUBLIC_TRADING_ADDRESS=
```

Once set, these appear automatically in the footer, the privacy policy, the
terms, the contact page and the `Organization` schema. Until then, each of
those pages carries a visible note explaining what is missing and why it has
not been guessed.

### 3. Terms and policy gaps — BLOCKING

Three specific figures are marked pending in the published policies:

| Where | What is needed |
|---|---|
| Terms §6 | The quantity tolerance percentage the business works to |
| Terms §10 | Payment terms — deposits, credit terms, accepted methods |
| Returns page | The window for reporting problems, the return process, and how credits are issued |

The whole terms document should also be reviewed by whoever advises the
business before it is relied on.

---

## Non-blocking, but do these

### 4. DNS and hosting

- [ ] Point `conesleeves.co.uk` at the host
- [ ] Redirect `www.conesleeves.co.uk` → `https://conesleeves.co.uk` (301)
- [ ] Redirect all HTTP → HTTPS (301)
- [ ] Confirm the TLS certificate covers both apex and `www`
- [ ] Confirm SPF/DKIM for the sending domain so quote emails are not junked

The application enforces the canonical host in every canonical tag and schema
URL. The host-level redirects still need configuring at the DNS/hosting layer.

### 5. Search Console and analytics

- [ ] Add the property in Google Search Console (apex, not `www`)
- [ ] Verify — set `PUBLIC_GSC_VERIFICATION` and the meta tag appears
- [ ] Submit `https://conesleeves.co.uk/sitemap-index.xml`
- [ ] **Use the Change of Address tool** if `conesleeves.com` is being retired
- [ ] Set `PUBLIC_GA4_ID` or `PUBLIC_GTM_ID` if analytics is wanted

No measurement ID has been invented. Nothing is emitted until one is set.

### 6. If analytics is enabled — read this first

The cookie policy currently states, truthfully, that this site sets **no
cookies** and shows no consent banner because none is needed. Enabling a tag
makes that statement false.

Before turning analytics on:

- [ ] Add a consent mechanism that gates non-essential cookies
- [ ] Load the tag only after consent is given
- [ ] Update `/cookie-policy/` to name each cookie, its purpose and its lifetime

The cookie policy already contains a conditional block that changes when a tag
is configured, telling you exactly this. It is a genuine outstanding task, not
a formality.

### 7. Redirects from the old domain

If `conesleeves.com` is being retired, the 242 redirects in this project cover
paths **within** the new site. The old domain also needs host-level 301s
mapping its URLs to the equivalents documented in `URL-MAP.md`.

- [ ] Configure `conesleeves.com/*` → `conesleeves.co.uk/*` per the URL map
- [ ] Keep those redirects live for at least 12 months
- [ ] Spot-check the top 20 URLs by traffic in the old Search Console

### 8. Content review before launch

- [ ] Confirm the seven product ranges match what the business actually sells
- [ ] Confirm the 25 location pages describe areas genuinely served
- [ ] Read `/about/` — it states publicly what the business will not claim
- [ ] Confirm the "no reviews, no published lead times, no blanket recycling claims" position is what the business wants stated
- [ ] Confirm the 11 consolidated products (`MIGRATION-INVENTORY.md` §5) are genuinely duplicates and not separate lines

That last one is the most important business check in this list. Eleven source
products were folded into others because they were literal synonyms. If any is
actually a distinct product, tell us and it can be split back out with its own
page — the redirect map makes that a small change.

### 9. Product photography

- [ ] Confirm the watermarked photography can be used

The 847 images carry the original "CONE SLEEVES" watermark. It contains no
`.com` and matches the new brand name, and the new logo was drawn as a refined
evolution of that mark so the watermarks read as native branding. If the
business would rather they were removed, that is a separate piece of work on
the image set — the site itself needs no changes.

### 10. Optional additions

- [ ] Social profile URLs → `SOCIAL_PROFILES` in `src/config/site.ts`, which populates `sameAs` in the Organization schema
- [ ] A genuine public trading address → enables `LocalBusiness` schema for that one location (see `SCHEMA-REPORT.md` §4)
- [ ] Confirmed returns policy and shipping data → enables `MerchantReturnPolicy` and `OfferShippingDetails`
- [ ] Board grades, certifications and recycled-content figures → replaces the 11 "pending" callouts with real specifications

---

## Deployment

```bash
npm install
node scripts/validate-content.mjs   # must pass
npm run build                        # must complete
node scripts/audit-build.mjs         # must pass
```

The project targets Vercel via `@astrojs/vercel`. Set the environment
variables in the project settings before the first deploy, or the enquiry
forms will return a 503 (with a helpful message) until you do.

**Node version:** the Vercel adapter warns that local Node 25 is not a
supported serverless runtime and will use Node 24. That is fine — it is a
notice about the deployment runtime, not a build failure.

---

## Post-launch, first week

- [ ] Submit the sitemap and confirm indexing has begun
- [ ] Check Search Console coverage for unexpected exclusions
- [ ] Send a test enquiry from a phone and confirm arrival with attachment
- [ ] Complete the design tool on a phone and confirm the configuration arrives
- [ ] Test `tel:` and WhatsApp links on a real device
- [ ] Run PageSpeed Insights on the homepage, a product page and a category page
- [ ] Confirm the old domain's redirects resolve, with no chains
- [ ] Watch for 404s in the server logs and add redirects for anything real

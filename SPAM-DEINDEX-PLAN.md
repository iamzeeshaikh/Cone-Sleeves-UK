# Gambling-spam de-indexing — conesleeves.co.uk

**Source:** Search Console *Coverage → Valid* export, 13 August 2026.
**Status of this repo's part:** done and building. **Status overall: blocked on a deploy.**

---

## 1. What the export actually shows

| | |
|---|---|
| Indexed pages on 15 May 2026 | 552 |
| Indexed pages on 5 August 2026 | 3,854 |
| Indexed pages on 7 August 2026 | 3,712 |
| URLs listed in the export | 1,000 (Search Console caps the list) |
| Of those, gambling spam | **1,000 — every single one** |
| Of those, collisions with a real page on this site | **0** |

The 1,000 sampled URLs break down as 988 root-level slugs and 12 WordPress
query URLs (`/?p=18735`). Token frequency across them: casino 535, deposit 254,
free 245, bonus 196, spins 160, gambling 90, slots 62.

Two things follow from the shape of that data.

**The injection is live, not historical.** 552 pages in May and 3,854 in August
is not a one-off hack that was cleaned up; something is still writing pages.
Any de-indexing done before the injection stops will be outrun by it.

**Not one indexed URL belongs to this site.** The rebuild's 240 pages and the
3,712 indexed pages have an empty intersection. There is nothing here to
preserve — the entire indexed footprint of this domain is spam.

---

## 2. What has been done in this repository

A catch-all `410 Gone` handler at `src/pages/[...gone].ts`.

Every URL that is not a real page and not in the 243-entry legacy redirect map
now returns **410**, with `x-robots-tag: noindex` and a plain page telling a
human what happened. Verified against the production routing table
(`.vercel/output/config.json`), where the order resolves correctly:

1. trailing-slash normalisation (308)
2. the 243 legacy `.com` redirects (301)
3. `handle: filesystem` — all 240 real pages win here
4. **catch-all → 410**
5. `404.html` for paths with a file extension

Spot-checked: four spam URLs return 410, nine real pages return 200, three
legacy redirects still return 301 to the right place.

### Why 410 and not 404

404 means "not here, ask again later", and Google re-crawls a 404 for months
before dropping it. 410 means "gone, permanently" and is dropped considerably
faster. With ~3,700 URLs to clear, that difference is the whole timeline.

### Why the spam is deliberately *not* blocked in robots.txt

This is the mistake worth naming, because it is the intuitive move and it
backfires. A URL blocked in `robots.txt` cannot be crawled — so Google never
sees the 410, and the page stays in the index indefinitely on the strength of
external links alone. **The spam has to remain crawlable in order to die.**
`robots.txt` on this site blocks only genuine WordPress admin paths and utility
routes, and must stay that way until the index is clean.

---

## 3. What has to happen outside this repository

Ordered by how much each one moves the needle.

### 3.1 Deploy this site over the compromised one — *blocking, do first*

Nothing in section 2 is live. The domain is currently served by whatever is
still injecting those pages, and the 410 handler exists only in this codebase.
Deploying replaces a site generating spam with one that returns 410 for all of
it, in a single action. **Until this happens, no other step matters.**

### 3.2 Confirm the compromised host is genuinely gone

Repointing DNS is not the same as removing the attacker. If the old WordPress
install is still running and still compromised, anyone who can move DNS back —
or who finds the origin IP — restores the whole problem. The old hosting
account and its database should be shut down, not merely disconnected.

### 3.3 Check Search Console for an attacker-submitted sitemap

*Indexing → Sitemaps.* A sitemap listing several thousand spam URLs is the
usual way an injection gets indexed this fast. Delete any sitemap that is not
`https://conesleeves.co.uk/sitemap-index.xml`.

### 3.4 Check Security & Manual Actions

*Security & Manual actions → Security issues.* A hacked-content flag has to be
cleared with a reconsideration request once the 410s are live, and that request
should say what was done rather than just asking.

### 3.5 Do not attempt bulk removal through the Removals tool

Worth stating so nobody spends a day on it. Removals accepts one URL or one
prefix at a time. These 988 slugs sit directly at the root with no shared
prefix — 988 distinct first segments across 988 URLs. The only prefix that
covers them is `/`, which would hide the real site as well. Per-URL removal of
~3,700 pages is not realistic. The 410 is the mechanism; removals are not.

The exported list is saved as `spam-urls-2026-08-13.txt`, and is published as a
sitemap of removed URLs at **/sitemap-removed.xml** — see section 3.6.

### 3.6 Submit /sitemap-removed.xml — but only after 3.1

A sitemap does not ask Google to remove anything; it asks Google to *look
again*. That is what these URLs need, because a dead page is not dropped from
the index until it is re-crawled, and ~3,700 of them left alone take months.

Submit `https://conesleeves.co.uk/sitemap-removed.xml` in *Indexing →
Sitemaps* **once the domain actually returns 410**. Submitting it while DNS
still reaches the compromised WordPress — where these URLs return 200 with real
spam content — asks Google to re-crawl and re-affirm 3,700 casino pages.

It carries the 1,000 URLs Search Console exported, not all ~3,700 — that cap
is Search Console’s, not the file’s. Re-export and regenerate with
`node scripts/build-removed-sitemap.mjs YYYY-MM-DD` to widen it.

Kept out of `sitemap.xml` and out of `robots.txt` so the real sitemap stays
clean. Delete it once the indexed count is back to the real page count.

---

## 4. What to expect, and how to check it

Indexed count is the metric; it should fall rather than climb. Re-export
*Coverage → Valid* weekly and compare.

Direct check once deployed, from a terminal:

```
curl -s -o /dev/null -w "%{http_code}\n" https://conesleeves.co.uk/best-gambling-sites-to-win-uk/
```

410 means the mechanism is working. 200 means the old site is still being
served and section 3.1 has not actually happened.

Google clears URLs at its own pace and will not do it in days. What matters in
the first week is that the count stops rising; the fall follows the re-crawl
rate over the weeks after that.

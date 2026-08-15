/**
 * Generates public/sitemap-removed.xml — a throwaway sitemap listing the
 * injected gambling URLs so Google re-crawls them and sees the 410.
 *
 * A sitemap does not ask Google to remove anything. It asks Google to *look
 * again*, which is exactly what is needed: left alone, ~3,700 dead URLs take
 * months to be re-crawled, and none of them drop out of the index until they
 * are. Listing them shortens that considerably.
 *
 * SEQUENCING MATTERS. Submit this only once conesleeves.co.uk actually returns
 * 410 for these URLs. While the domain still points at the compromised
 * WordPress they return 200 with real spam content, and submitting the file
 * then tells Google to re-crawl and re-affirm 3,700 casino pages.
 *
 * Deliberately NOT listed in sitemap-index.xml and NOT referenced from
 * robots.txt. The real sitemap stays clean; this one is submitted by hand in
 * Search Console and deleted once the index is clear.
 *
 * Usage: node scripts/build-recrawl-sitemap.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'spam-urls-2026-08-13.txt');
const target = join(root, 'public', 'sitemap-removed.xml');

if (!existsSync(source)) {
  console.error(`Missing ${source}`);
  process.exit(1);
}

const urls = [
  ...new Set(
    readFileSync(source, 'utf8')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.startsWith('https://conesleeves.co.uk/')),
  ),
];

// A recent lastmod is the part that prompts a re-crawl. Passed in rather than
// generated so a rebuild does not silently restamp every URL to today.
const lastmod = process.argv[2] || new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) {
  console.error(`Bad date "${lastmod}" — expected YYYY-MM-DD`);
  process.exit(1);
}

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<!--',
  '  Temporary re-crawl sitemap for injected spam URLs. These all return 410.',
  '  This file is not part of sitemap-index.xml. Delete it once the index is',
  '  clear — see SPAM-DEINDEX-PLAN.md.',
  '-->',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((u) => `  <url><loc>${escape(u)}</loc><lastmod>${lastmod}</lastmod></url>`),
  '</urlset>',
  '',
].join('\n');

writeFileSync(target, xml);
console.log(`Wrote ${urls.length} URLs to public/sitemap-removed.xml (lastmod ${lastmod})`);
console.log('Submit in Search Console ONLY after conesleeves.co.uk returns 410 for these.');

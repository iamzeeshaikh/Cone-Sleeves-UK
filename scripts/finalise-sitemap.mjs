/**
 * Collapses Astro's sitemap output into a single flat /sitemap.xml.
 *
 * @astrojs/sitemap always emits an index (`sitemap-index.xml`) pointing at
 * numbered parts (`sitemap-0.xml`), and offers no way to change that. For 239
 * URLs an index is pure indirection: two files, two requests, and a crawler
 * hop, to reach one list that fits comfortably in one document.
 *
 * So this rewrites the output to what it should have been — every <url> in one
 * <urlset> at /sitemap.xml — and deletes the index and the parts so there is
 * exactly one sitemap on the site and no stale copies to be found.
 *
 * The 50,000-URL limit is respected rather than assumed away: past that the
 * flat file would be invalid, so the index and parts are kept as they are and
 * /sitemap.xml becomes the index instead. Nothing here needs revisiting if the
 * catalogue grows.
 *
 * Runs as part of `npm run build`, and writes to BOTH output directories. The
 * Vercel adapter copies static files into .vercel/output/static during
 * `astro build`, which finishes before this script starts — a file written only
 * to dist/client is a file Vercel never serves, and /sitemap.xml would 404 in
 * production while looking correct locally.
 */
import { readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_URLS_PER_FILE = 50000;

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outputs = [join(root, 'dist', 'client'), join(root, '.vercel', 'output', 'static')].filter(
  (d) => existsSync(d),
);

if (outputs.length === 0) {
  console.error('finalise-sitemap: no build output found');
  process.exit(1);
}

const indexFile = outputs.map((d) => join(d, 'sitemap-index.xml')).find((f) => existsSync(f));
if (!indexFile) {
  console.error('finalise-sitemap: no sitemap-index.xml — did the build finish?');
  process.exit(1);
}

const indexXml = readFileSync(indexFile, 'utf8');
const partNames = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].split('/').pop());

// Pull every <url> element out of every part, in order.
const sourceDir = dirname(indexFile);
const entries = [];
for (const name of partNames) {
  const partFile = join(sourceDir, name);
  if (!existsSync(partFile)) {
    console.error(`finalise-sitemap: sitemap part missing from the build: ${name}`);
    process.exit(1);
  }
  const xml = readFileSync(partFile, 'utf8');
  entries.push(...[...xml.matchAll(/<url>[\s\S]*?<\/url>/g)].map((m) => m[0]));
}

if (entries.length === 0) {
  console.error('finalise-sitemap: the sitemap parts contained no URLs');
  process.exit(1);
}

const flat = entries.length <= MAX_URLS_PER_FILE;

if (!flat) {
  // Too many URLs to be legal in one file. Keep the index and the parts, and
  // publish the index at /sitemap.xml so the address stays the same.
  for (const dir of outputs) writeFileSync(join(dir, 'sitemap.xml'), indexXml);
  console.log(
    `finalise-sitemap: ${entries.length} URLs exceeds ${MAX_URLS_PER_FILE}, ` +
      `keeping the index and ${partNames.length} part(s); /sitemap.xml is the index`,
  );
  process.exit(0);
}

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ' +
  'xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
  entries.map((e) => `  ${e}`).join('\n') +
  '\n</urlset>\n';

for (const dir of outputs) {
  writeFileSync(join(dir, 'sitemap.xml'), xml);
  // One sitemap on the site, not three. Leaving the old files behind means a
  // crawler that already knows sitemap-0.xml keeps fetching a duplicate list.
  rmSync(join(dir, 'sitemap-index.xml'), { force: true });
  for (const name of partNames) rmSync(join(dir, name), { force: true });
}

console.log(
  `finalise-sitemap: /sitemap.xml written with ${entries.length} URLs in one urlset; ` +
    `removed sitemap-index.xml and ${partNames.join(', ')}`,
);

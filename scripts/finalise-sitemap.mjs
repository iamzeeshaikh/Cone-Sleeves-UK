/**
 * Publishes the sitemap index at /sitemap.xml as well as /sitemap-index.xml.
 *
 * @astrojs/sitemap always names the index `sitemap-index.xml` and offers no
 * option to rename it. But /sitemap.xml is the address people actually type,
 * the one most tools probe first, and the one that was requested — so the
 * index is copied there after the build rather than redirected, because a
 * redirect is not an XML document and some crawlers will not follow one.
 *
 * A copy rather than a hand-written file: the copy cannot drift. If the site
 * ever grows past a single 45,000-URL part, sitemap-index.xml will list every
 * part and /sitemap.xml will list them too, with no second place to update.
 *
 * Runs as part of `npm run build`, and writes to BOTH output directories. The
 * Vercel adapter copies static files into .vercel/output/static during
 * `astro build`, which finishes before this script starts — a file written
 * only to dist/client is a file Vercel never serves, and /sitemap.xml would
 * 404 in production while looking correct locally.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outputs = [join(root, 'dist', 'client'), join(root, '.vercel', 'output', 'static')];

const source = outputs.map((d) => join(d, 'sitemap-index.xml')).find((f) => existsSync(f));
if (!source) {
  console.error('finalise-sitemap: no sitemap-index.xml in the build — did the build finish?');
  process.exit(1);
}

const xml = readFileSync(source, 'utf8');
const written = [];
for (const dir of outputs) {
  if (!existsSync(dir)) continue;
  writeFileSync(join(dir, 'sitemap.xml'), xml);
  written.push(dir.replace(root + '/', ''));
}

if (written.length === 0) {
  console.error('finalise-sitemap: no output directory found');
  process.exit(1);
}

const parts = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].split('/').pop());
console.log(
  `finalise-sitemap: /sitemap.xml published to ${written.join(' and ')}, ` +
    `listing ${parts.length} part(s): ${parts.join(', ')}`,
);

/**
 * Content integrity checks that run against the data model before a build.
 *
 * Catches the failures that are invisible until a page 404s in production:
 * dangling related-product slugs, internal links to pages that were never
 * created, duplicate SEO titles, orphan pages and banned vocabulary.
 *
 * Usage: node scripts/validate-content.mjs
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { register } from 'node:module';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

register('./ts-resolve.mjs', import.meta.url);

// The data files are TypeScript, so they are read as text and the object
// literals extracted rather than imported. That keeps this script dependency
// free and able to run before any build step.
const { PRODUCTS, CATEGORIES, LOCATIONS, POSTS, STATIC_PAGES } = await loadData();

const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

/** Every phrase the brief rules out of newly written copy. */
const BANNED = [
  'introducing', 'functional', 'embrace', 'versatility', 'look no further',
  'unparalleled', 'function', 'tailor-made', 'robust', 'paramount', 'crafted',
  'discover', 'elevate', 'aesthetic', 'unleash', 'versatile', 'enhance',
  'exquisite', 'precious', 'distinctive', 'exceptional', 'dive into a world',
  'bring', 'arrays', 'perfect for', 'expert', 'best',
];

/** Anchor text that says nothing about the destination. */
const BANNED_ANCHORS = ['click here', 'learn more', 'view', 'explore', 'read more', 'here'];

/** American spellings that should not appear on a British-English site. */
const US_SPELLINGS = [
  'color', 'colors', 'colored', 'coloring', 'favorite', 'flavor', 'flavors',
  'aluminum', 'customize', 'customized', 'customizing', 'organize', 'organized',
  'specialized', 'liter', 'liters', 'meter ', 'gray', 'catalog', 'analyze',
  'defense', 'license plate', 'center', 'centers', 'fiber', 'labeled', 'traveled',
  'canceled', 'practise ', 'apologize', 'recognize', 'realize', 'utilize',
];

// ---------------------------------------------------------------------------
// Build the set of every URL the site will publish.
// ---------------------------------------------------------------------------

const publishedPaths = new Set(STATIC_PAGES);
for (const c of CATEGORIES) {
  publishedPaths.add(c.parent ? `/${c.parent}/${c.slug}/` : `/${c.slug}/`);
}
for (const p of PRODUCTS) publishedPaths.add(`/${p.slug}/`);
for (const l of LOCATIONS) publishedPaths.add(`/${l.slug}/`);
for (const b of POSTS) publishedPaths.add(`/blog/${b.slug}/`);

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

const productSlugs = new Set();
for (const p of PRODUCTS) {
  if (productSlugs.has(p.slug)) fail(`Duplicate product slug: ${p.slug}`);
  productSlugs.add(p.slug);

  for (const r of p.related) {
    if (r === p.slug) fail(`${p.slug}: related list links to itself`);
    else if (!PRODUCTS.some((x) => x.slug === r)) {
      fail(`${p.slug}: related slug "${r}" does not exist`);
    }
  }

  const dir = join(root, 'src/assets/products', p.slug);
  if (!existsSync(dir)) {
    fail(`${p.slug}: no image directory at src/assets/products/${p.slug}`);
  } else {
    const files = readdirSync(dir).filter((f) => !f.startsWith('._'));
    if (files.length === 0) fail(`${p.slug}: image directory is empty`);
  }
}

// Orphan check: every product must be reachable from another product's
// related list, or from its own category grid. Category membership is the
// baseline, so this checks the contextual layer on top of it.
const linkedTo = new Set();
for (const p of PRODUCTS) for (const r of p.related) linkedTo.add(r);
for (const p of PRODUCTS) {
  if (!linkedTo.has(p.slug)) {
    warn(`${p.slug}: no other product links to it (reachable only via its category)`);
  }
}

// ---------------------------------------------------------------------------
// SEO field checks across every page type
// ---------------------------------------------------------------------------

const titles = new Map();
const descriptions = new Map();
const h1s = new Map();

function checkSeo(kind, id, seoTitle, seoDescription, h1) {
  if (!seoTitle) return fail(`${kind} ${id}: missing seoTitle`);
  if (!seoDescription) return fail(`${kind} ${id}: missing seoDescription`);

  // Titles get a brand suffix at render time, so the raw field is checked
  // against the length it will actually reach.
  if (seoTitle.length > 60) fail(`${kind} ${id}: title ${seoTitle.length} chars (max 60): ${seoTitle}`);
  if (seoTitle.length < 30) warn(`${kind} ${id}: title only ${seoTitle.length} chars`);
  if (seoDescription.length > 160) fail(`${kind} ${id}: description ${seoDescription.length} chars (max 160)`);
  if (seoDescription.length < 110) warn(`${kind} ${id}: description only ${seoDescription.length} chars`);

  const tKey = seoTitle.toLowerCase();
  if (titles.has(tKey)) fail(`Duplicate title: "${seoTitle}" on ${titles.get(tKey)} and ${id}`);
  titles.set(tKey, id);

  const dKey = seoDescription.toLowerCase();
  if (descriptions.has(dKey)) fail(`Duplicate description on ${descriptions.get(dKey)} and ${id}`);
  descriptions.set(dKey, id);

  if (h1) {
    const hKey = h1.toLowerCase();
    if (h1s.has(hKey)) fail(`Duplicate H1 "${h1}" on ${h1s.get(hKey)} and ${id}`);
    h1s.set(hKey, id);
  }
}

for (const p of PRODUCTS) checkSeo('product', p.slug, p.seoTitle, p.seoDescription, p.h1);
for (const c of CATEGORIES) checkSeo('category', c.slug, c.seoTitle, c.seoDescription, c.h1);
for (const l of LOCATIONS) checkSeo('location', l.slug, l.seoTitle, l.seoDescription, l.h1);
for (const b of POSTS) checkSeo('post', b.slug, b.seoTitle, b.seoDescription, b.title);

// Blog posts must clear the 1,000-word minimum, must carry a bullet list and
// a numbered list, and must reference an image that exists.
const { wordCount } = await import(new URL('../src/data/blog.ts', import.meta.url).href);
for (const b of POSTS) {
  const words = wordCount(b);
  if (words < 1000) fail(`post ${b.slug}: ${words} words (minimum 1000)`);
  const kinds = b.sections.map((s) => s.kind);
  if (!kinds.includes('bullets')) fail(`post ${b.slug}: no bullet list`);
  if (!kinds.includes('steps')) warn(`post ${b.slug}: no numbered list`);
  if (!b.imageFrom || !PRODUCTS.some((p) => p.slug === b.imageFrom)) {
    fail(`post ${b.slug}: featured image references unknown product "${b.imageFrom}"`);
  }
  if (!b.imageAlt) fail(`post ${b.slug}: featured image has no alt text`);
  if (!b.author || !b.published) fail(`post ${b.slug}: missing author or published date`);
}

// ---------------------------------------------------------------------------
// Internal links, anchors and prose rules
// ---------------------------------------------------------------------------

function checkLink(owner, link) {
  if (!link) return;
  const { href, anchor, sentence } = link;
  if (!publishedPaths.has(href)) fail(`${owner}: internal link to "${href}" which is not a published page`);
  const a = (anchor || '').toLowerCase().trim();
  if (BANNED_ANCHORS.includes(a)) fail(`${owner}: banned anchor text "${anchor}"`);
  const words = a.split(/\s+/).length;
  if (words < 3) fail(`${owner}: anchor "${anchor}" is too short to be descriptive`);
  if (words > 10) warn(`${owner}: anchor "${anchor}" is ${words} words`);
  if (sentence && !sentence.includes('{link}')) {
    fail(`${owner}: link sentence has no {link} placeholder`);
  }
  if (href === `/${owner.split(' ')[1]}/`) fail(`${owner}: self-link`);
}

/** Collects every string of prose a record publishes. */
function proseOf(record) {
  const out = [];
  const push = (s) => { if (typeof s === 'string') out.push(s); };
  (record.intro || []).forEach(push);
  push(record.h1);
  push(record.cardBlurb);
  push(record.seoTitle);
  push(record.seoDescription);
  for (const s of record.sections || []) {
    push(s.heading); push(s.intro); push(s.outro); push(s.note);
    // `body` is a string on callouts and an array of paragraphs elsewhere.
    if (Array.isArray(s.body)) s.body.forEach(push);
    else push(s.body);
    (s.items || []).forEach((i) => { push(i); push(i?.title); push(i?.body); });
    (s.steps || []).forEach((i) => { push(i?.title); push(i?.body); });
    (s.rows || []).forEach((r) => (r || []).forEach(push));
    if (s.link) push(s.link.sentence);
  }
  for (const f of record.faqs || []) { push(f.q); push(f.a); }
  (record.paragraphs || []).forEach(push);
  return out.filter(Boolean);
}

function checkProse(owner, record) {
  for (const s of record.sections || []) checkLink(`${owner} §${s.heading}`, s.link);

  // "best-before" is the legally correct UK term for a durability date and is
  // not the marketing superlative the banned list is aimed at.
  const text = proseOf(record).join('\n').toLowerCase().replace(/best-before/g, 'durability');

  for (const word of BANNED) {
    // Word-boundary match so "bringing" is caught but "brings" inside a URL is not.
    const re = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (re.test(text)) fail(`${owner}: banned word/phrase "${word}"`);
  }
  for (const sp of US_SPELLINGS) {
    const re = new RegExp(`\\b${sp.trim()}\\b`, 'i');
    if (re.test(text)) fail(`${owner}: American spelling "${sp.trim()}"`);
  }

  // Repeated opening paragraphs across pages read as a spun template.
  const opener = (record.intro || [])[0];
  if (opener) {
    const key = opener.slice(0, 60).toLowerCase();
    if (openers.has(key)) fail(`${owner}: opening paragraph duplicates ${openers.get(key)}`);
    openers.set(key, owner);
  }
}

const openers = new Map();
for (const p of PRODUCTS) checkProse(`product ${p.slug}`, p);
for (const c of CATEGORIES) checkProse(`category ${c.slug}`, c);
for (const l of LOCATIONS) checkProse(`location ${l.slug}`, l);
for (const b of POSTS) checkProse(`post ${b.slug}`, b);

// ---------------------------------------------------------------------------
// Old-domain sweep across every source file
// ---------------------------------------------------------------------------

const FORBIDDEN_STRINGS = [
  'conesleeves.com', 'theconesleeves.com', 'wp-content', 'wp-admin',
  'localhost:', '127.0.0.1', 'staging.', '.myshopify.',
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', 'dist', '.git', '.astro', '.vercel', '_source', 'src-images'].includes(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(astro|ts|tsx|js|mjs|json|css|md|txt|xml)$/.test(entry.name)) out.push(full);
  }
  return out;
}

for (const file of walk(join(root, 'src')).concat(walk(join(root, 'scripts')))) {
  const text = readFileSync(file, 'utf8');
  for (const bad of FORBIDDEN_STRINGS) {
    if (text.includes(bad)) {
      // The redirect map legitimately names legacy WordPress paths.
      if (file.endsWith('redirects.ts') && ['wp-content', 'wp-admin'].includes(bad)) continue;
      // The audit scripts contain these strings as their own detection lists.
      if (/scripts\/(validate-content|audit-build)\.mjs$/.test(file.replace(/\\/g, '/'))) continue;
      fail(`${file.replace(root, '.')}: contains forbidden string "${bad}"`);
    }
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

console.log(`\nChecked ${PRODUCTS.length} products, ${CATEGORIES.length} categories, ${LOCATIONS.length} locations, ${POSTS.length} posts.`);
console.log(`Published URLs: ${publishedPaths.size}\n`);

if (warnings.length) {
  console.log(`${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  ~ ${w}`);
  console.log('');
}

if (errors.length) {
  console.log(`${errors.length} error(s):`);
  for (const e of errors) console.log(`  x ${e}`);
  process.exit(1);
}

console.log('Content validation passed.\n');

// ---------------------------------------------------------------------------

async function loadData() {
  // Node strips TypeScript types natively, so the data modules import directly.
  const url = (rel) => new URL(`../${rel}`, import.meta.url).href;

  const [productsMod, catMod, locMod, blogMod, pagesMod] = await Promise.all([
    import(url('src/data/products/index.ts')),
    import(url('src/data/categories.ts')),
    import(url('src/data/locations.ts')),
    import(url('src/data/blog.ts')),
    import(url('src/data/static-pages.ts')),
  ]);

  return {
    PRODUCTS: productsMod.PRODUCTS,
    CATEGORIES: catMod.CATEGORIES,
    LOCATIONS: locMod.LOCATIONS,
    POSTS: blogMod.POSTS,
    STATIC_PAGES: pagesMod.STATIC_PAGE_PATHS,
  };
}

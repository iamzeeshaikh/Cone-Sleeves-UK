import type { Product } from '../types';
import { CONE_SLEEVES } from './cone-sleeves';
import { FOOD_SLEEVES } from './food-sleeves';
import { FOOD_TRAYS } from './food-trays';
import { FOOD_BOXES, BEVERAGE_SLEEVES } from './boxes-and-beverage';
import { CUP_SIZES, CUP_MATERIALS, CUP_COLOURS } from './cups-sizes-materials';
import { CUPS_BY_USE } from './cups-use-and-parts';
import { PRINTED_PAPERS } from './printed-papers';
import { PAPER_BAGS } from './paper-bags';

export const PRODUCTS: Product[] = [
  ...CONE_SLEEVES,
  ...FOOD_SLEEVES,
  ...FOOD_TRAYS,
  ...FOOD_BOXES,
  ...BEVERAGE_SLEEVES,
  ...CUP_SIZES,
  ...CUP_MATERIALS,
  ...CUP_COLOURS,
  ...CUPS_BY_USE,
  ...PRINTED_PAPERS,
  ...PAPER_BAGS,
];

const bySlug = new Map(PRODUCTS.map((p) => [p.slug, p]));

export function productBySlug(slug: string): Product | undefined {
  return bySlug.get(slug);
}

export function productExists(slug: string): boolean {
  return bySlug.has(slug);
}

export function productsInCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function productsInSubcategory(
  category: string,
  subcategory: string,
): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === category && p.subcategory === subcategory,
  );
}

/** Root-level product URL. */
export function productPath(p: Product | string): string {
  return `/${typeof p === 'string' ? p : p.slug}/`;
}

/**
 * Related products, filtered to slugs that actually resolve. A related list
 * that quietly points at a removed product would create a broken link, so the
 * filter runs at build time rather than trusting the data.
 */
export function relatedProducts(p: Product, limit = 4): Product[] {
  return p.related
    .filter((slug) => slug !== p.slug)
    .map((slug) => bySlug.get(slug))
    .filter((x): x is Product => Boolean(x))
    .slice(0, limit);
}

/**
 * Products that link to this one. Used to prove no product page is an orphan
 * and to surface a sensible cross-link on thin related lists.
 */
const inbound = new Map<string, string[]>();
for (const p of PRODUCTS) {
  for (const r of p.related) {
    if (r === p.slug) continue;
    const list = inbound.get(r) ?? [];
    list.push(p.slug);
    inbound.set(r, list);
  }
}

export function inboundLinks(slug: string): string[] {
  return inbound.get(slug) ?? [];
}

export const PRODUCT_COUNT = PRODUCTS.length;

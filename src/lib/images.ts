import type { ImageMetadata } from 'astro';

/**
 * Product photography lives at src/assets/products/<product-slug>/<file>.
 * Globbing it here means Astro fingerprints, resizes and converts every file
 * at build time, and each image arrives with intrinsic width/height so the
 * templates can reserve space and avoid layout shift.
 */
const productGlob = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/products/**/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

/** macOS writes `._name.jpg` AppleDouble sidecars onto non-APFS volumes. */
const isSidecar = (path: string) => path.split('/').pop()!.startsWith('._');

const byProduct = new Map<string, ImageMetadata[]>();

for (const [path, mod] of Object.entries(productGlob)) {
  if (isSidecar(path)) continue;
  const match = path.match(/\/products\/([^/]+)\//);
  if (!match) continue;
  const slug = match[1];
  const list = byProduct.get(slug) ?? [];
  list.push(mod.default);
  byProduct.set(slug, list);
}

// Stable, deterministic ordering: the primary shot is the file whose name
// matches the product slug most closely, then the rest alphabetically.
for (const [slug, list] of byProduct) {
  list.sort((a, b) => {
    const an = fileName(a.src);
    const bn = fileName(b.src);
    const ap = an.includes(slug) ? 0 : 1;
    const bp = bn.includes(slug) ? 0 : 1;
    if (ap !== bp) return ap - bp;
    return an.localeCompare(bn);
  });
  byProduct.set(slug, list);
}

function fileName(src: string): string {
  return src.split('/').pop()!.replace(/\.[a-z0-9]+$/i, '');
}

/** All images for a product, primary first. */
export function productImages(slug: string): ImageMetadata[] {
  return byProduct.get(slug) ?? [];
}

/** The hero/LCP image for a product page and its card in listings. */
export function primaryImage(slug: string): ImageMetadata | undefined {
  return productImages(slug)[0];
}

export function hasImages(slug: string): boolean {
  return (byProduct.get(slug)?.length ?? 0) > 0;
}

/**
 * Turns a source filename into readable words for alt-text construction.
 * `waffle-cone-sleeves-wholesale.jpg` → `waffle cone sleeves wholesale`.
 */
export function describeFile(img: ImageMetadata): string {
  return fileName(img.src)
    .replace(/-detail-\d+$/, '')
    .replace(/-\d+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .toLowerCase();
}

/**
 * Alt text that describes the individual photograph rather than repeating the
 * product name on every image in a gallery.
 */
export function galleryAlt(
  productName: string,
  img: ImageMetadata,
  index: number,
): string {
  if (index === 0) return `${productName} printed for a UK food business`;

  const words = describeFile(img);
  const normalisedProduct = productName.toLowerCase().replace(/^custom /, '');

  // A descriptive source filename makes better alt text than a counter.
  if (words && !words.startsWith(normalisedProduct.split(' ')[0])) {
    const cleaned = words.replace(/\bcustom\b/g, '').replace(/\s+/g, ' ').trim();
    if (cleaned.length > 6) {
      return `${cleaned.charAt(0).toUpperCase()}${cleaned.slice(1)}`;
    }
  }

  const angles = [
    `${productName} shown in use`,
    `Close view of the print finish on ${normalisedProduct}`,
    `${productName} stacked flat before assembly`,
    `Branded ${normalisedProduct} being handed to a customer`,
    `Alternative print layout for ${normalisedProduct}`,
    `${productName} photographed from the side`,
  ];
  return angles[(index - 1) % angles.length];
}

/** Total distinct product photographs bundled into the build. */
export function imageCount(): number {
  let n = 0;
  for (const list of byProduct.values()) n += list.length;
  return n;
}

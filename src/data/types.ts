/**
 * Content model.
 *
 * Product and category pages are not rendered from one fixed template. Each
 * record declares its own ordered list of typed sections, so the page shape
 * follows the product rather than a rota. A sleeve that is bought on print
 * quality leads with print; a tray bought on board strength leads with board.
 */

export type Section =
  | ProseSection
  | BulletsSection
  | SpecsSection
  | StepsSection
  | UsesSection
  | CalloutSection
  | CompareSection;

export interface ProseSection {
  kind: 'prose';
  heading: string;
  /** Short paragraphs — two or three sentences each. */
  body: string[];
  /** At most one contextual internal link per section. */
  link?: InternalLink;
}

export interface BulletsSection {
  kind: 'bullets';
  heading: string;
  intro?: string;
  items: string[];
  outro?: string;
  link?: InternalLink;
}

export interface SpecsSection {
  kind: 'specs';
  heading: string;
  intro?: string;
  rows: [label: string, value: string][];
  note?: string;
}

export interface StepsSection {
  kind: 'steps';
  heading: string;
  intro?: string;
  steps: { title: string; body: string }[];
  link?: InternalLink;
}

export interface UsesSection {
  kind: 'uses';
  heading: string;
  intro?: string;
  items: { title: string; body: string }[];
  link?: InternalLink;
}

export interface CalloutSection {
  kind: 'callout';
  heading: string;
  body: string;
  /** Rendered as a marked configuration field when the fact needs confirming. */
  pending?: boolean;
  link?: InternalLink;
}

export interface CompareSection {
  kind: 'compare';
  heading: string;
  intro?: string;
  columns: [string, string];
  rows: [criterion: string, a: string, b: string][];
  outro?: string;
}

export interface InternalLink {
  href: string;
  /** Descriptive anchor text — never "click here", "learn more" or "explore". */
  anchor: string;
  /** Sentence the anchor sits inside; `{link}` marks the anchor position. */
  sentence: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  /** Category slug this product belongs to. */
  category: string;
  /** Optional sub-category slug (paper cups only). */
  subcategory?: string;
  /** <title> — aim 50–60 characters. */
  seoTitle: string;
  /** meta description — aim 120–130 characters. */
  seoDescription: string;
  /** Page H1 — differs from the product name where that reads better. */
  h1: string;
  /** Opening paragraphs. Every product opens differently. */
  intro: string[];
  /** Ordered, typed content blocks. */
  sections: Section[];
  faqs: Faq[];
  /** Slugs of genuinely related products. */
  related: string[];
  /** Short label used on cards and in the quote form's product field. */
  cardBlurb: string;
  /** Words used for the WhatsApp prefilled message. */
  enquiryLabel?: string;
}

export interface LocationPage {
  slug: string;
  /** Place name as it appears in running text. */
  place: string;
  /** 'city' | 'county' — changes the framing and the internal linking. */
  kind: 'city' | 'county';
  /** Nation, used for delivery wording rather than decoration. */
  nation: 'England' | 'Scotland' | 'Wales' | 'Northern Ireland';
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string[];
  sections: Section[];
  faqs: Faq[];
  /** Product slugs genuinely relevant to this location's trade. */
  recommended: string[];
  /** Two or three other location slugs with a real geographic relationship. */
  nearby: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  /** ISO date the article was first published. */
  published: string;
  /** ISO date of the last substantive revision, when there has been one. */
  updated?: string;
  author: string;
  /** Short standfirst shown under the H1 and on the blog index. */
  standfirst: string;
  /** Estimated reading time in minutes, computed from the body at build time. */
  readingTime?: number;
  /** Product slug whose photography illustrates the article. */
  imageFrom: string;
  imageAlt: string;
  sections: Section[];
  faqs?: Faq[];
  /** Slugs of related posts. */
  related: string[];
  /** Topic tag used on the index. */
  topic: string;
}

export interface Category {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string[];
  /** Sections rendered after the quote form and product grid. */
  sections: Section[];
  faqs: Faq[];
  /** Source WooCommerce category names that map to this category. */
  sourceNames: string[];
  parent?: string;
  /** Card copy used on the homepage and in listings. */
  cardBlurb: string;
  /** Slug of a product whose photograph represents the category. */
  heroProduct: string;
  /**
   * Rendered on the homepage rather than at its own URL. Used for the flagship
   * range, which would otherwise compete with the homepage for the same head
   * term — the brand, the domain and the homepage all target "cone sleeves".
   */
  mergedIntoHome?: boolean;
}

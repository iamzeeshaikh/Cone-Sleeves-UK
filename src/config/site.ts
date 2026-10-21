/**
 * Single source of truth for brand, contact and canonical-URL details.
 * Nothing in the codebase should hard-code a domain, phone number or address.
 */

export const SITE = {
  name: 'Cone Sleeves UK',
  shortName: 'Cone Sleeves UK',
  origin: 'https://conesleeves.co.uk',
  locale: 'en-GB',
  language: 'en-GB',
  country: 'GB',
  currency: 'GBP',
  tagline: 'Custom printed cone sleeves and food packaging for UK businesses',
} as const;

export const CONTACT = {
  email: 'info@conesleeves.co.uk',
  /** E.164, used for tel: links and structured data. */
  phoneE164: '+447458651107',
  /** Human-readable, used in visible text. */
  phoneDisplay: '+44 7458 651107',
  /** wa.me requires the number without a leading plus. */
  whatsappNumber: '447458651107',
} as const;

/**
 * Trading address, supplied by the client 2026-08-13.
 *
 * Held as components rather than one string because structured data needs
 * them separately, and a single line cannot be split back apart reliably.
 * The registered office may differ from this and is still taken from the
 * environment — see BUSINESS_PENDING below.
 */
export const ADDRESS = {
  street: '7 Greys Court, Kingsland Grange',
  locality: 'Warrington',
  postcode: 'WA1 4SH',
  country: 'United Kingdom',
  countryCode: 'GB',
} as const;

/** One line, for footers and running text. */
export const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.postcode}, ${ADDRESS.country}`;

/** Schema.org PostalAddress built from the same components. */
export const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: ADDRESS.street,
  addressLocality: ADDRESS.locality,
  postalCode: ADDRESS.postcode,
  addressCountry: ADDRESS.countryCode,
} as const;

export const TEL_HREF = `tel:${CONTACT.phoneE164}`;

/**
 * Indicative starting unit price.
 *
 * One number, used by BOTH the visible "From £x.xx per …" line on a product
 * page and the Offer in that page's structured data, so the two can never
 * drift apart. A priced listing whose price appears nowhere in the page text
 * is what Merchant Center treats as misrepresentation, so neither half of
 * this is optional and neither is conditional.
 *
 * The figure is a floor, not a quotation: it sits below the unit price the
 * same range is sold at on the US sister site ($0.50 per
 * sleeve, roughly £0.39), so "from" is never an overstatement. Quantity,
 * board, colour count and finish still move the real number, which is why
 * every page carrying it also says the quotation is what binds.
 */
export const PRICING = {
  /** Lowest unit price across the range, GBP, excluding VAT and delivery. */
  unitPrice: 0.3,
  currency: SITE.currency,
  /** Rendered form of the same number — always built from `unitPrice`. */
  get display(): string {
    return `£${this.unitPrice.toFixed(2)}`;
  },
} as const;

/** The unit a price is quoted per, by category slug. */
const PRICE_UNIT_BY_CATEGORY: Record<string, string> = {
  'cone-sleeves': 'sleeve',
  'food-sleeves': 'sleeve',
  'beverage-sleeves': 'sleeve',
  'food-trays': 'tray',
  'food-boxes': 'box',
  'paper-cups': 'cup',
  'printed-papers-bags': 'unit',
};

export function priceUnit(categorySlug?: string): string {
  return (categorySlug && PRICE_UNIT_BY_CATEGORY[categorySlug]) || 'unit';
}

/** "From £0.30 per sleeve" — the one wording, built from the one number. */
export function fromPriceLine(categorySlug?: string): string {
  return `From ${PRICING.display} per ${priceUnit(categorySlug)}`;
}

/** Google Maps search link, built from the address rather than a stored URL. */
export const MAP_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS_LINE,
)}`;

/**
 * Builds a WhatsApp deep link with a message that names the page the visitor
 * is on, so an enquiry arrives with context rather than a bare "hello".
 */
export function whatsappHref(context?: string): string {
  const message = context
    ? `Hello Cone Sleeves UK, I'd like a quote for ${context}.`
    : `Hello Cone Sleeves UK, I'd like a quote for custom printed packaging.`;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Absolute, trailing-slashed canonical URL for any site path. */
export function canonical(path: string): string {
  let p = path.startsWith('/') ? path : `/${path}`;
  if (!p.endsWith('/')) p = `${p}/`;
  return `${SITE.origin}${p}`;
}

/**
 * Business details still to be confirmed. Templates render these only when an
 * environment variable supplies a real value — no placeholder company numbers,
 * VAT numbers or addresses are ever published.
 *
 * The trading address is no longer here: it was supplied and now lives in
 * ADDRESS above. `registeredAddress` stays, because a registered office is a
 * separate legal fact and may not be the same place.
 */
export const BUSINESS_PENDING = {
  legalName: import.meta.env.PUBLIC_COMPANY_LEGAL_NAME || '',
  companyNumber: import.meta.env.PUBLIC_COMPANY_NUMBER || '',
  vatNumber: import.meta.env.PUBLIC_VAT_NUMBER || '',
  registeredAddress: import.meta.env.PUBLIC_REGISTERED_ADDRESS || '',
} as const;

/**
 * Live chat: LiveChat Desk, the company's own chat system (replaced Zendesk
 * Chat on 2026-10-21). The site id is a public widget identifier, not a
 * secret. Blank the env var to remove the widget; the privacy and cookie
 * pages drop their chat sections with it.
 */
export const CHAT = {
  host: 'https://livechat-desk-omega.vercel.app',
  siteId: import.meta.env.PUBLIC_LIVECHAT_SITE ?? 'conesleeves-couk',
  /** What the widget keeps in the browser — listed on the cookie policy. */
  storage: {
    local: [
      ['lcd-vid-…', 'a random visitor id, so a returning visitor is recognised', 'until cleared'],
      ['lcd-sid-…, lcd-start-…, lcd-act-…', 'the current visit (ends after 30 minutes of inactivity or 12 hours)', '12 hours'],
      ['lcd-token-…', 'the id of your open conversation, so you can continue it', 'until the chat is closed'],
      ['lcd-contact-…', 'whether you have already given a name and email', 'until cleared'],
      ['lcd-ref-…', 'the site that referred you, so we know how you found us', 'until cleared'],
      ['lcd-dismissed-…, lcd-autoopen-…, lcd-muted-…', 'whether you closed the window, saw it open, or muted its sound', 'up to 24 hours'],
    ],
    session: [['lcd-open-…', 'whether the chat window is open, so it stays open as you move between pages', 'this tab']],
  },
} as const;

export const ANALYTICS = {
  ga4: import.meta.env.PUBLIC_GA4_ID || 'G-5LP51J1629',
  gtm: import.meta.env.PUBLIC_GTM_ID || '',
  gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION || '',
  /** Microsoft Clarity — the portfolio's packaging project. */
  clarity: import.meta.env.PUBLIC_CLARITY_ID || 'yk7d21q01g',
} as const;

/** Social profiles are only emitted in schema when a real profile exists. */
export const SOCIAL_PROFILES: string[] = [];

export const NAV_PRIMARY = [
  { label: 'Cone Sleeves', href: '/cone-sleeves/' },
  { label: 'Food Sleeves', href: '/food-sleeves/' },
  { label: 'Trays & Boxes', href: '/food-trays/' },
  { label: 'Paper Cups', href: '/paper-cups/' },
  { label: 'Papers & Bags', href: '/printed-papers-bags/' },
] as const;

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

export const TEL_HREF = `tel:${CONTACT.phoneE164}`;

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
 * Business details that must be confirmed before launch. Templates render
 * these only when an environment variable supplies a real value — no
 * placeholder company numbers, VAT numbers or addresses are ever published.
 */
export const BUSINESS_PENDING = {
  legalName: import.meta.env.PUBLIC_COMPANY_LEGAL_NAME || '',
  companyNumber: import.meta.env.PUBLIC_COMPANY_NUMBER || '',
  vatNumber: import.meta.env.PUBLIC_VAT_NUMBER || '',
  registeredAddress: import.meta.env.PUBLIC_REGISTERED_ADDRESS || '',
  tradingAddress: import.meta.env.PUBLIC_TRADING_ADDRESS || '',
} as const;

export const ANALYTICS = {
  ga4: import.meta.env.PUBLIC_GA4_ID || '',
  gtm: import.meta.env.PUBLIC_GTM_ID || '',
  gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION || '',
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

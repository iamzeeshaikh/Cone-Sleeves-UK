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

import {
  SITE,
  CONTACT,
  canonical,
  SOCIAL_PROFILES,
  BUSINESS_PENDING,
  POSTAL_ADDRESS,
} from '~/config/site';
import type { Faq } from '~/data/types';

/**
 * JSON-LD builders.
 *
 * Every node here is generated from content that is visibly on the page.
 * There are deliberately no builders for reviews, ratings, prices, stock
 * availability, delivery times or return policies, because none of those
 * facts have been supplied and inventing them would be worse than omitting
 * the markup entirely.
 */

const ORG_ID = `${SITE.origin}/#organization`;
const SITE_ID = `${SITE.origin}/#website`;

export function organisation() {
  const node: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: `${SITE.origin}/`,
    description: SITE.tagline,
    email: CONTACT.email,
    telephone: CONTACT.phoneE164,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.origin}/icons/logo-512.png`,
      width: 512,
      height: 512,
    },
    address: POSTAL_ADDRESS,
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: CONTACT.phoneE164,
        email: CONTACT.email,
        areaServed: 'GB',
        availableLanguage: ['en-GB'],
      },
    ],
  };

  // Only emitted once a genuine registered legal entity has been supplied.
  if (BUSINESS_PENDING.legalName) node.legalName = BUSINESS_PENDING.legalName;
  if (BUSINESS_PENDING.vatNumber) node.vatID = BUSINESS_PENDING.vatNumber;
  if (BUSINESS_PENDING.companyNumber) {
    node.identifier = {
      '@type': 'PropertyValue',
      name: 'Companies House registration',
      value: BUSINESS_PENDING.companyNumber,
    };
  }
  if (SOCIAL_PROFILES.length) node.sameAs = SOCIAL_PROFILES;

  return node;
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: `${SITE.origin}/`,
    name: SITE.name,
    inLanguage: SITE.locale,
    publisher: { '@id': ORG_ID },
  };
}

export function webPage(opts: {
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage';
  primaryImage?: string;
  breadcrumbId?: string;
}) {
  const url = canonical(opts.path);
  const node: Record<string, unknown> = {
    '@type': opts.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: SITE.locale,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
  };
  if (opts.primaryImage) {
    node.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: opts.primaryImage.startsWith('http')
        ? opts.primaryImage
        : `${SITE.origin}${opts.primaryImage}`,
    };
  }
  if (opts.breadcrumbId) node.breadcrumb = { '@id': opts.breadcrumbId };
  return node;
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbs(path: string, crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonical(path)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: canonical(c.path),
    })),
  };
}

/**
 * Product node without offers.
 *
 * Offer, AggregateOffer, price, availability, MerchantReturnPolicy and
 * OfferShippingDetails are all omitted on purpose: this is a quote-led site
 * with no published prices, no stated stock position and no confirmed
 * returns or shipping policy. Emitting them would mean inventing data.
 */
export function product(opts: {
  name: string;
  description: string;
  path: string;
  images: string[];
  category: string;
}) {
  return {
    '@type': 'Product',
    '@id': `${canonical(opts.path)}#product`,
    name: opts.name,
    description: opts.description,
    url: canonical(opts.path),
    category: opts.category,
    image: opts.images.map((src) =>
      src.startsWith('http') ? src : `${SITE.origin}${src}`,
    ),
    brand: { '@type': 'Brand', name: SITE.name },
    manufacturer: { '@id': ORG_ID },
  };
}

export function itemList(items: { name: string; path: string }[], path: string) {
  return {
    '@type': 'ItemList',
    '@id': `${canonical(path)}#itemlist`,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: canonical(it.path),
    })),
  };
}

/** Only call this where the same questions and answers are visible on the page. */
export function faqPage(faqs: Faq[], path: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${canonical(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function blogPosting(opts: {
  path: string;
  headline: string;
  description: string;
  image: string;
  published: string;
  updated?: string;
  author: string;
  wordCount: number;
  section: string;
}) {
  const url = canonical(opts.path);
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    image: opts.image.startsWith('http') ? opts.image : `${SITE.origin}${opts.image}`,
    datePublished: opts.published,
    dateModified: opts.updated ?? opts.published,
    wordCount: opts.wordCount,
    articleSection: opts.section,
    inLanguage: SITE.locale,
    author: { '@type': 'Organization', name: opts.author, url: `${SITE.origin}/about/` },
    publisher: { '@id': ORG_ID },
  };
}

/**
 * A service area page, not a LocalBusiness.
 *
 * LocalBusiness requires a genuine public address, which this business has
 * not supplied. Using it anyway would be a fabricated location, so location
 * pages describe a service area on the Organization instead.
 */
export function serviceArea(opts: {
  path: string;
  name: string;
  description: string;
  place: string;
}) {
  return {
    '@type': 'Service',
    '@id': `${canonical(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: 'Custom printed food packaging',
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Place', name: opts.place },
    url: canonical(opts.path),
  };
}

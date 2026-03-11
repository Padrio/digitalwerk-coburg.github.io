// ---------------------------------------------------------------------------
// Schema.org structured-data builders (JSON-LD)
// ---------------------------------------------------------------------------

import type {
  LocalBusiness,
  Person,
  Service,
  FAQPage,
  BreadcrumbList,
  HowTo,
  BlogPosting,
  WebSite,
  ProfilePage,
  WithContext,
} from 'schema-dts';

import { SITE } from '@data/site';

// ---------------------------------------------------------------------------
// Types used as function inputs
// ---------------------------------------------------------------------------

export interface ServiceInput {
  name: string;
  description: string;
  url?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BreadcrumbInput {
  label: string;
  href: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface BlogPostInput {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  url: string;
  heroImage?: string;
}

// ---------------------------------------------------------------------------
// @id constants for entity graph
// ---------------------------------------------------------------------------

const ID_ORGANIZATION = `${SITE.url}/#organization`;
const ID_PERSON = `${SITE.url}/#person`;
const ID_WEBSITE = `${SITE.url}/#website`;

// ---------------------------------------------------------------------------
// Builders
// ---------------------------------------------------------------------------

/**
 * Local business schema for Digitalwerk Coburg.
 * Central entity in the graph — referenced by Services, BlogPostings, WebSite.
 */
export function buildLocalBusiness(): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'] as unknown as 'LocalBusiness',
    '@id': ID_ORGANIZATION,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: '2024',
    logo: `${SITE.url}/favicon.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.zip,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    founder: { '@id': ID_PERSON } as unknown as Person,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 50.2612,
        longitude: 10.9628,
      },
      geoRadius: '50000',
    },
    priceRange: '$$',
    sameAs: [
      SITE.social.linkedIn,
      SITE.social.github,
    ].filter(Boolean),
    knowsAbout: [
      'Webdesign',
      'Webentwicklung',
      'Suchmaschinenoptimierung',
      'KI-Beratung',
      'Individualsoftware',
      'Responsive Design',
      'Barrierefreies Webdesign',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
  } as unknown as WithContext<LocalBusiness>;
}

/**
 * Person schema for Pascal (founder).
 * Referenced by LocalBusiness (founder), BlogPosting (author), ProfilePage.
 */
export function buildPerson(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': ID_PERSON,
    name: SITE.owner.name,
    jobTitle: SITE.owner.role,
    url: `${SITE.url}/ueber-mich`,
    description: 'Fachinformatiker und Gründer von Digitalwerk Coburg. Spezialisiert auf Webdesign, Webentwicklung, SEO und KI-Beratung für den Mittelstand in Oberfranken.',
    worksFor: { '@id': ID_ORGANIZATION } as unknown as LocalBusiness,
    knowsAbout: [
      'Webdesign',
      'Webentwicklung',
      'Suchmaschinenoptimierung',
      'Künstliche Intelligenz',
      'TypeScript',
      'React',
      'Astro',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Berufsausbildung',
      name: 'Fachinformatiker für Anwendungsentwicklung',
    },
    sameAs: [
      SITE.social.linkedIn,
      SITE.social.github,
    ].filter(Boolean),
  } as unknown as WithContext<Person>;
}

/**
 * WebSite schema — top-level entity linking publisher and language.
 */
export function buildWebSite(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': ID_WEBSITE,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: 'de-DE',
    publisher: { '@id': ID_ORGANIZATION } as unknown as LocalBusiness,
  } as unknown as WithContext<WebSite>;
}

/**
 * ProfilePage schema for the /ueber-mich page.
 */
export function buildProfilePage(): WithContext<ProfilePage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: { '@id': ID_PERSON } as unknown as Person,
    dateModified: new Date().toISOString().split('T')[0],
  } as unknown as WithContext<ProfilePage>;
}

/**
 * Service schema from a service data object.
 * Provider references the organization entity via @id.
 */
export function buildService(service: ServiceInput): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url ?? SITE.url,
    provider: { '@id': ID_ORGANIZATION } as unknown as LocalBusiness,
    areaServed: {
      '@type': 'Place',
      name: `${SITE.address.city}, ${SITE.address.region}`,
    },
  };
}

/**
 * FAQPage schema from an array of question / answer pairs.
 */
export function buildFaqPage(faqs: FaqItem[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question' as const,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: faq.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList schema from an ordered array of breadcrumb items.
 */
export function buildBreadcrumbList(items: BreadcrumbInput[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      name: item.label,
      item: `${SITE.url}${item.href}`,
    })),
  };
}

/**
 * HowTo schema from an ordered array of process steps.
 */
export function buildHowTo(steps: HowToStep[]): WithContext<HowTo> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Zusammenarbeit mit Digitalwerk Coburg',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep' as const,
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * BlogPosting schema for individual blog articles.
 * Author and publisher reference entities via @id.
 */
export function buildBlogPosting(post: BlogPostInput): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.pubDate.toISOString(),
    ...(post.updatedDate ? { dateModified: post.updatedDate.toISOString() } : {}),
    author: { '@id': ID_PERSON } as unknown as Person,
    publisher: { '@id': ID_ORGANIZATION } as unknown as LocalBusiness,
    ...(post.heroImage ? { image: `${SITE.url}${post.heroImage}` } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  };
}

/**
 * DefinedTerm schema for Wissen/Glossar entries.
 */
export function buildDefinedTerm(term: {
  name: string;
  description: string;
  url: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.name,
    description: term.description,
    url: term.url,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Digitalwerk Wissen — Glossar für digitale Begriffe',
      url: `${SITE.url}/wissen`,
    },
  };
}

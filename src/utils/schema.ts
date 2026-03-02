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

// ---------------------------------------------------------------------------
// Builders
// ---------------------------------------------------------------------------

/**
 * Local business schema for Digitalwerk Coburg.
 */
export function buildLocalBusiness(): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.zip,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    founder: {
      '@type': 'Person',
      name: SITE.owner.name,
      jobTitle: SITE.owner.role,
    },
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
  };
}

/**
 * Person schema for Pascal (founder).
 */
export function buildPerson(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.owner.name,
    jobTitle: SITE.owner.role,
    url: SITE.url,
    worksFor: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    ...(SITE.social.linkedIn ? { sameAs: [SITE.social.linkedIn] } : {}),
  };
}

/**
 * Service schema from a service data object.
 */
export function buildService(service: ServiceInput): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url ?? SITE.url,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name,
      url: SITE.url,
    },
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

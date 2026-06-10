// ---------------------------------------------------------------------------
// Site-wide constants & metadata
// ---------------------------------------------------------------------------

export interface Address {
  street: string;
  zip: string;
  city: string;
  region: string;
  regionCode: string;
  /** ISO-3166-Code, z. B. für Schema.org addressCountry */
  country: string;
  /** Ausgeschriebener Ländername für Impressum/Datenschutz */
  countryName: string;
}

/** Geo-Koordinaten des Firmensitzes (Schema.org GeoCoordinates, Geo-Meta-Tags) */
export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

/**
 * Rechtsträger der Website — Quelle für Impressum, Datenschutz und
 * Schema.org legalName. Nicht verwechseln mit `Owner` (Persona/Marke).
 */
export interface LegalEntity {
  companyName: string;
  legalForm: string;
  /** Vertretungsberechtigte Gesellschafter */
  representatives: string[];
  /** Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV */
  contentResponsible: string;
  /** Umsatzsteuer-Hinweis (§ 19 UStG) */
  vatNotice: string;
}

export interface SocialLinks {
  linkedIn: string;
  instagram: string;
  github: string;
}

/** Persona/Gesicht der Marke (Autor, /ueber-mich, Person-Schema) — nicht der Rechtsträger (siehe LegalEntity) */
export interface Owner {
  name: string;
  role: string;
}

export interface SiteConfig {
  url: string;
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  phoneE164: string;
  address: Address;
  geo: GeoCoordinates;
  social: SocialLinks;
  owner: Owner;
  legal: LegalEntity;
}

/**
 * Last manual update of /ueber-mich content.
 * Bump when adjusting profile, role, or biography text.
 */
export const PROFILE_LAST_MODIFIED = new Date('2026-06-10T00:00:00Z');

export const SITE: SiteConfig = {
  url: 'https://digitalwerk-coburg.de',
  name: 'Digitalwerk Coburg',
  tagline: 'Websites und Web-Apps, die wirklich funktionieren.',
  description:
    'Pascal Krason — Webentwickler aus Coburg. Webdesign, Webentwicklung, SEO und KI-Beratung für den Mittelstand in Oberfranken. Persönlich, lokal, ergebnisorientiert.',
  email: 'hallo@digitalwerk-coburg.de',
  phone: '+49 1579 2699700',
  phoneE164: '+4915792699700',
  address: {
    street: 'Andreas-Werner-Str. 2',
    zip: '96215',
    city: 'Lichtenfels',
    region: 'Oberfranken',
    regionCode: 'BY',
    country: 'DE',
    countryName: 'Deutschland',
  },
  geo: {
    latitude: 50.16492,
    longitude: 11.08093,
  },
  social: {
    linkedIn: 'https://www.linkedin.com/in/pascal-krason-b74028326/',
    instagram: '',
    github: 'https://github.com/Padrio',
  },
  owner: {
    name: 'Pascal Krason',
    role: 'Webentwickler & Inhaber',
  },
  legal: {
    companyName: 'Knorr & Markus Digitaldienstleistungen GbR',
    legalForm: 'Gesellschaft bürgerlichen Rechts',
    representatives: ['Florian Knorr', 'Lukas Grell'],
    contentResponsible: 'Florian Knorr',
    vatNotice:
      'Umsatzsteuerbefreit als Kleinunternehmer gemäß § 19 UStG. Es wird keine Umsatzsteuer ausgewiesen.',
  },
};

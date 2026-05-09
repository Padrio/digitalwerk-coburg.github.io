// ---------------------------------------------------------------------------
// Site-wide constants & metadata
// ---------------------------------------------------------------------------

export interface Address {
  street: string;
  zip: string;
  city: string;
  region: string;
  regionCode: string;
  country: string;
}

export interface SocialLinks {
  linkedIn: string;
  instagram: string;
  github: string;
}

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
  social: SocialLinks;
  owner: Owner;
}

/**
 * Last manual update of /ueber-mich content.
 * Bump when adjusting profile, role, or biography text.
 */
export const PROFILE_LAST_MODIFIED = new Date('2026-05-05T00:00:00Z');

export const SITE: SiteConfig = {
  url: 'https://digitalwerk-coburg.de',
  name: 'Digitalwerk Coburg',
  tagline: 'Websites und Web-Apps, die wirklich funktionieren.',
  description:
    'Pascal Krason — Webentwickler aus Coburg. Webdesign, Webentwicklung, SEO und KI-Beratung für den Mittelstand in Oberfranken. Persönlich, lokal, ergebnisorientiert.',
  email: 'hallo@digitalwerk-coburg.de',
  phone: '+49 174 660 3656',
  phoneE164: '+491746603656',
  address: {
    street: 'Von-Mayer-Straße 25',
    zip: '96450',
    city: 'Coburg',
    region: 'Oberfranken',
    regionCode: 'BY',
    country: 'DE',
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
};

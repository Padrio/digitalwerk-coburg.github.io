// ---------------------------------------------------------------------------
// Site-wide constants & metadata
// ---------------------------------------------------------------------------

export interface Address {
  street: string;
  zip: string;
  city: string;
  region: string;
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
  address: Address;
  social: SocialLinks;
  owner: Owner;
}

export const SITE: SiteConfig = {
  url: 'https://digitalwerk-coburg.de',
  name: 'Digitalwerk Coburg',
  tagline: 'Digitale Lösungen. Solide gebaut.',
  description:
    'Ihr zuverlässiger Digitalpartner aus Coburg für Webdesign, Webentwicklung, SEO und KI-Beratung. Persönlich. Regional. Ergebnisorientiert.',
  email: 'hallo@digitalwerk-coburg.de',
  phone: '+49 123 456789',
  address: {
    street: 'Musterstraße 1',
    zip: '96450',
    city: 'Coburg',
    region: 'Oberfranken',
    country: 'DE',
  },
  social: {
    linkedIn: 'https://www.linkedin.com/in/pascal-krason-b74028326/',
    instagram: '',
    github: 'https://github.com/Padrio',
  },
  owner: {
    name: 'Pascal Krason',
    role: 'Gründer & Entwickler',
  },
};

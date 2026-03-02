// ---------------------------------------------------------------------------
// Cities – regional landing pages (Phase 2 stub)
// ---------------------------------------------------------------------------

export interface City {
  name: string;
  slug: string;
  region: string;
  description: string;
  isActive: boolean;
}

export const cities: City[] = [
  {
    name: 'Coburg',
    slug: 'coburg',
    region: 'Oberfranken',
    description:
      'Webdesign, Webentwicklung und SEO aus Coburg – Ihr Digitalpartner direkt vor Ort in der Vestestadt.',
    isActive: true,
  },
  {
    name: 'Bamberg',
    slug: 'bamberg',
    region: 'Oberfranken',
    description:
      'Professionelle Websites und digitale Lösungen für Unternehmen in Bamberg und dem Bamberger Umland.',
    isActive: false,
  },
  {
    name: 'Kronach',
    slug: 'kronach',
    region: 'Oberfranken',
    description:
      'Webdesign und Online-Marketing für Betriebe in Kronach – regional verwurzelt, digital stark.',
    isActive: false,
  },
  {
    name: 'Lichtenfels',
    slug: 'lichtenfels',
    region: 'Oberfranken',
    description:
      'Digitale Lösungen für Lichtenfels und die Korbstadt-Region – von der Website bis zur KI-Beratung.',
    isActive: false,
  },
  {
    name: 'Sonneberg',
    slug: 'sonneberg',
    region: 'Südthüringen',
    description:
      'Webentwicklung und SEO für Unternehmen in Sonneberg – direkt an der bayerisch-thüringischen Grenze.',
    isActive: false,
  },
];

// Utility: get only active cities
export function getActiveCities(): City[] {
  return cities.filter((c) => c.isActive);
}

// Utility: look up a city by slug
export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

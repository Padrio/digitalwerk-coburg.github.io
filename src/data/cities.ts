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
      'Webdesign und SEO für Unternehmen im UNESCO-Welterbe Bamberg — von der Innenstadt-Brauerei bis zum Hotelier in der Inselstadt.',
    isActive: true,
  },
  {
    name: 'Kronach',
    slug: 'kronach',
    region: 'Oberfranken',
    description:
      'Webdesign und SEO für Betriebe in Kronach — vom Familienhandwerk bis zur Holzmöbel-Manufaktur am Fuß der Festung Rosenberg.',
    isActive: true,
  },
  {
    name: 'Lichtenfels',
    slug: 'lichtenfels',
    region: 'Oberfranken',
    description:
      'Webdesign und SEO für die Korbstadt Lichtenfels und das Obermain-Tal — Handwerk, Mittelstand, regionale Tourismusbetriebe.',
    isActive: true,
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

// ---------------------------------------------------------------------------
// Cities – Servicegebiete und regionale Landingpages
//
// Single Source of Truth für:
//   - die Ortsliste der Startseite (LocalSection)
//   - `areaServed` im LocalBusiness-Schema
// Welche Landingpages je Ort existieren, steht in `local-services.ts`
// (dort `city` + `citySlug` + `service`) — hier bewusst nicht dupliziert.
// ---------------------------------------------------------------------------

export interface City {
  name: string;
  slug: string;
  region: string;
  description: string;
  /** true = es existieren Landingpages für diesen Ort (siehe local-services.ts) */
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
  {
    name: 'Hildburghausen',
    slug: 'hildburghausen',
    region: 'Südthüringen',
    description: 'Servicegebiet im südthüringischen Grenzraum.',
    isActive: false,
  },
  {
    name: 'Kulmbach',
    slug: 'kulmbach',
    region: 'Oberfranken',
    description: 'Servicegebiet im nördlichen Oberfranken.',
    isActive: false,
  },
  {
    name: 'Bayreuth',
    slug: 'bayreuth',
    region: 'Oberfranken',
    description: 'Servicegebiet im östlichen Oberfranken.',
    isActive: false,
  },
];

/** Alle Orte, die als Servicegebiet beworben werden (inkl. ohne Landingpage). */
export function getServedCities(): City[] {
  return cities;
}

/** Nur Orte, für die Landingpages existieren. */
export function getActiveCities(): City[] {
  return cities.filter((c) => c.isActive);
}

/** Einen Ort per Slug nachschlagen. */
export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

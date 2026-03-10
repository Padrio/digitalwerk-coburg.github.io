// ---------------------------------------------------------------------------
// SEO helpers – meta tags & breadcrumb generation
// ---------------------------------------------------------------------------

const SITE_NAME = 'Digitalwerk Coburg';

export interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
  ogImage?: string;
  ogType?: string;
}

/**
 * Build a complete SeoMeta object from partial input.
 * - Title is suffixed with " | Digitalwerk Coburg" unless it already contains
 *   the site name.
 * - Default OG image points to /og-image.jpg.
 * - Default ogType is "website".
 */
export function buildSeoMeta(input: Partial<SeoMeta> & { title: string; description: string }): SeoMeta {
  const title = input.title.includes(SITE_NAME)
    ? input.title
    : `${input.title} | ${SITE_NAME}`;

  return {
    title,
    description: input.description,
    canonical: input.canonical,
    noIndex: input.noIndex ?? false,
    ogImage: input.ogImage ?? '/og-image.jpg',
    ogType: input.ogType ?? 'website',
  };
}

// ---------------------------------------------------------------------------
// Breadcrumbs
// ---------------------------------------------------------------------------

export interface BreadcrumbItem {
  label: string;
  href: string;
}

/** German label map for URL segments. */
const LABEL_MAP: Record<string, string> = {
  leistungen: 'Leistungen',
  webdesign: 'Webdesign',
  webentwicklung: 'Webentwicklung',
  'ki-beratung': 'KI-Beratung',
  seo: 'SEO',
  zusammenarbeit: 'Zusammenarbeit',
  'ueber-mich': 'Über mich',
  kontakt: 'Kontakt',
  blog: 'Blog',
  impressum: 'Impressum',
  datenschutz: 'Datenschutz',
};

/**
 * Derive a human-readable label from a URL segment.
 * Looks up the segment in `LABEL_MAP`; falls back to capitalising the first
 * letter of the raw segment.
 */
function segmentToLabel(segment: string): string {
  if (LABEL_MAP[segment]) return LABEL_MAP[segment];

  // Fallback: capitalise first letter, replace hyphens with spaces
  const cleaned = segment.replace(/-/g, ' ');
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

/**
 * Build an ordered breadcrumb trail from the current pathname.
 *
 * Example: `/leistungen/webdesign/` produces:
 * ```
 * [
 *   { label: 'Startseite', href: '/' },
 *   { label: 'Leistungen', href: '/leistungen/' },
 *   { label: 'Webdesign',  href: '/leistungen/webdesign/' },
 * ]
 * ```
 */
export function buildBreadcrumbs(pathname: string): BreadcrumbItem[] {
  let clean = pathname.replace(/\.html$/, '');
  clean = clean.replace(/\/index$/, '') || '/';
  const segments = clean.split('/').filter(Boolean);

  const crumbs: BreadcrumbItem[] = [{ label: 'Startseite', href: '/' }];

  segments.forEach((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    crumbs.push({ label: segmentToLabel(segment), href });
  });

  return crumbs;
}

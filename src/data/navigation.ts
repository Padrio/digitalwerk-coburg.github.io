// ---------------------------------------------------------------------------
// Navigation – main nav, footer nav
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterNavGroup {
  category: string;
  items: NavItem[];
}

// ---- Main navigation (header) ---------------------------------------------

export const mainNav: NavItem[] = [
  {
    label: 'Leistungen',
    href: '/leistungen',
    children: [
      { label: 'Webdesign', href: '/leistungen/webdesign' },
      { label: 'Webentwicklung', href: '/leistungen/webentwicklung' },
      { label: 'KI-Beratung', href: '/leistungen/ki-beratung' },
      { label: 'SEO', href: '/leistungen/seo' },
    ],
  },
  { label: 'Zusammenarbeit', href: '/zusammenarbeit' },
  { label: 'Über mich', href: '/ueber-mich' },
  { label: 'Kontakt', href: '/kontakt' },
];

// ---- Footer navigation ----------------------------------------------------

export const footerNav: FooterNavGroup[] = [
  {
    category: 'Leistungen',
    items: [
      { label: 'Webdesign', href: '/leistungen/webdesign' },
      { label: 'Webentwicklung', href: '/leistungen/webentwicklung' },
      { label: 'KI-Beratung', href: '/leistungen/ki-beratung' },
      { label: 'SEO', href: '/leistungen/seo' },
    ],
  },
  {
    category: 'Unternehmen',
    items: [
      { label: 'Über mich', href: '/ueber-mich' },
      { label: 'Zusammenarbeit', href: '/zusammenarbeit' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
  },
  {
    category: 'Rechtliches',
    items: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
];

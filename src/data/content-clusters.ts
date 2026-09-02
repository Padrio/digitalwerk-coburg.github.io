// ---------------------------------------------------------------------------
// Content-Cluster – Hub-Spoke-Zuordnung
//
// Jeder Leistungs-Hub (/leistungen/*) verweist auf seine Spokes (Blog- und
// Wissen-Artikel). Die Gegenrichtung (Spoke -> Hub) steht in den Artikeln
// selbst. Bewusst explizit gepflegt statt über Tag-Matching abgeleitet:
// eine falsche Heuristik verlinkt sonst Artikel in den falschen Cluster.
//
// Vertrag (CLAUDE.md): jeder Hub -> alle Spokes; jeder Spoke -> Hub.
// ---------------------------------------------------------------------------

export interface ContentCluster {
  /** Slug des Leistungs-Hubs unter /leistungen/ */
  hub: 'webdesign' | 'webentwicklung' | 'seo' | 'ki-beratung';
  /** Blog-Einträge (src/content/blog/<id>.md) */
  blog: string[];
  /** Wissen-Einträge (src/content/wissen/<id>.md) */
  wissen: string[];
}

export const contentClusters: ContentCluster[] = [
  {
    hub: 'webdesign',
    blog: ['micro-interactions-webdesign-conversion-rate-kmu'],
    wissen: [
      'was-ist-webdesign',
      'responsive-design',
      'was-kostet-eine-website',
      'dsgvo-website',
    ],
  },
  {
    hub: 'webentwicklung',
    blog: [
      'whatsapp-business-api-lokaler-kundenservice',
      'automatisierte-rechnungsstellung-warenwirtschaft-ki',
      'digitalisierungsfoerderung-bayern-2026',
    ],
    wissen: ['erp-warenwirtschaft'],
  },
  {
    hub: 'seo',
    blog: [
      'local-seo-coburg-google-business-profile',
      'google-my-business-coburg',
      'voice-search-seo-coburg-sprachsuche-optimierung',
    ],
    wissen: ['was-ist-seo'],
  },
  {
    hub: 'ki-beratung',
    blog: [
      'eu-ai-act-2026-kmu-compliance-oberfranken',
      'ki-assistenten-handwerk-angebotserstellung-kundenkommunikation',
      'automatisierte-rechnungsstellung-warenwirtschaft-ki',
    ],
    wissen: [],
  },
];

export function getClusterForHub(hub: string): ContentCluster | undefined {
  return contentClusters.find((c) => c.hub === hub);
}

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '@data/site';
import { services } from '@data/services';
import {
  getLocalServicesGroupedByCity,
  localServicePath,
} from '@data/local-services';

/**
 * llms.txt wird aus denselben Datenquellen erzeugt wie die Website.
 *
 * Vorher lag die Datei statisch in public/ und war veraltet: keine der neun
 * regionalen Landingpages war gelistet, die Wissen-Einträge fehlten ganz.
 * Als Endpoint kann das nicht mehr auseinanderlaufen.
 */
export const GET: APIRoute = async () => {
  const u = (p: string) => `${SITE.url}${p}`;
  const cityGroups = getLocalServicesGroupedByCity();
  const wissen = (await getCollection('wissen')).sort((a, b) =>
    a.data.title.localeCompare(b.data.title, 'de')
  );

  const lines = [
    `# ${SITE.name}`,
    '',
    '> Digitale Lösungen. Solide gebaut.',
    '',
    `${SITE.name} ist ein Freelancer-Unternehmen für Webdesign, Webentwicklung, SEO und KI-Beratung mit Sitz in ${SITE.address.city}, ${SITE.address.region}. Gegründet 2024 von ${SITE.owner.name}, Fachinformatiker für Anwendungsentwicklung mit über 10 Jahren Berufserfahrung (u.a. CHECK24).`,
    '',
    '## Leistungen',
    '',
    ...services.map(
      (s) =>
        `- [${s.shortTitle}](${u(s.href)}): ${s.description.split('. ')[0]}.`
    ),
    '',
    '## Regionale Leistungsseiten',
    '',
    ...cityGroups.flatMap((g) =>
      g.services.map(
        (ls) => `- [${ls.serviceLabel} ${ls.city}](${u(localServicePath(ls))}): ${ls.metaDescription}`
      )
    ),
    '',
    '## Schlüsselseiten',
    '',
    `- [Startseite](${u('/')})`,
    `- [Alle Leistungen](${u('/leistungen')})`,
    `- [Zusammenarbeit](${u('/zusammenarbeit')}): Ablauf eines Projekts`,
    `- [Über mich](${u('/ueber-mich')}): ${SITE.owner.name} – Gründer & Entwickler`,
    `- [Blog](${u('/blog')}): Fachartikel zu Webdesign, SEO und Digitalisierung`,
    `- [Wissen](${u('/wissen')}): Glossar digitaler Fachbegriffe`,
    `- [Kontakt](${u('/kontakt')}): Kostenloses Erstgespräch vereinbaren`,
    '',
    '## Wissen (Glossar)',
    '',
    ...wissen.map((e) => `- [${e.data.title}](${u(`/wissen/${e.id}`)}): ${e.data.description}`),
    '',
    '## Kontakt',
    '',
    `- Name: ${SITE.owner.name}`,
    `- Unternehmen: ${SITE.name}`,
    `- Rechtsträger: ${SITE.legal.companyName}`,
    `- E-Mail: ${SITE.email}`,
    `- Telefon: ${SITE.phone}`,
    `- Adresse: ${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`,
    `- Region: ${SITE.address.region}, Bayern`,
    '',
    '## Expertise',
    '',
    'Webdesign, Webentwicklung, Suchmaschinenoptimierung (SEO), Local SEO, KI-Beratung, Responsive Design, Barrierefreies Webdesign, TypeScript, React, Astro, Individualsoftware, API-Entwicklung',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

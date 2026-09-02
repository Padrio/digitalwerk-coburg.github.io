import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '@data/site';
import { industries } from '@data/industries';
import {
  getLocalServicesGroupedByCity,
  localServicePath,
} from '@data/local-services';

/**
 * llms-full.txt – ausführliche Fassung, aus den Projektdaten erzeugt.
 *
 * Die redaktionellen Leistungsbeschreibungen sind bewusst als Text hinterlegt
 * (sie stammen 1:1 aus der bisherigen public/llms-full.txt). Alles, was
 * veralten kann – Blog, Wissen, regionale Seiten, Branchen – wird aus den
 * Collections und Datenfiles generiert.
 */

const SERVICE_DETAIL: { title: string; path: string; text: string }[] = [
  {
    title: 'Webdesign',
    path: '/leistungen/webdesign',
    text: 'Professionelles Webdesign aus Coburg: Individuelle, moderne Websites, die Vertrauen aufbauen und Kunden gewinnen. Responsive, schnell und SEO-optimiert. Jede Website wird individuell gestaltet — kein WordPress-Template, kein Baukastensystem. Mobile-First-Ansatz, Lighthouse-Score 95+, WCAG 2.1 AA Accessibility. Typischer Projektumfang: 5-Seiten-Unternehmenswebsite bis komplexe Webauftritte mit CMS.',
  },
  {
    title: 'Webentwicklung',
    path: '/leistungen/webentwicklung',
    text: 'Individuelle Webentwicklung aus Coburg: Leistungsstarke Webanwendungen mit modernen Technologien. Sauberer Code, API-Anbindungen und langfristig wartbare Lösungen. Technologien: TypeScript, React, Astro, Node.js. Individualsoftware, Dashboards, Online-Buchungssysteme, Schnittstellen zu bestehenden Systemen.',
  },
  {
    title: 'SEO / Suchmaschinenoptimierung',
    path: '/leistungen/seo',
    text: 'SEO aus Coburg: Suchmaschinenoptimierung für lokale Sichtbarkeit. Keyword-Recherche, technisches SEO, lokales SEO und monatliches Reporting. Schwerpunkt auf Local SEO für Unternehmen in Coburg und Oberfranken. Google Business Profile Optimierung, strukturierte Daten (Schema.org), Content-Strategie.',
  },
  {
    title: 'KI-Beratung',
    path: '/leistungen/ki-beratung',
    text: 'KI-Beratung aus Coburg: Künstliche Intelligenz praxisnah einsetzen. Potenzialanalyse, Chatbot-Entwicklung, Automatisierung und Team-Schulungen für Unternehmen. Fokus auf pragmatische KI-Integration im Mittelstand — keine Science-Fiction, sondern messbare Effizienzgewinne.',
  },
];

export const GET: APIRoute = async () => {
  const u = (p: string) => `${SITE.url}${p}`;
  const blog = (await getCollection('blog', ({ data }) => data.draft !== true)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const wissen = (await getCollection('wissen')).sort((a, b) =>
    a.data.title.localeCompare(b.data.title, 'de')
  );
  const cityGroups = getLocalServicesGroupedByCity();

  const lines = [
    `# ${SITE.name} — Vollständige Übersicht`,
    '',
    '> Digitale Lösungen. Solide gebaut.',
    '',
    `${SITE.name} ist ein Freelancer-Unternehmen für Webdesign, Webentwicklung, SEO und KI-Beratung mit Sitz in ${SITE.address.city}, ${SITE.address.region} (Bayern). Gegründet 2024 von ${SITE.owner.name}, Fachinformatiker für Anwendungsentwicklung mit über 10 Jahren Berufserfahrung in der Softwareentwicklung, unter anderem bei CHECK24.`,
    '',
    'Die Zielgruppe sind Geschäftsinhaber, Handwerker, Praxen, Gastronomen und mittelständische Unternehmen in der Region Coburg, Oberfranken und dem angrenzenden Südthüringen. Digitalwerk bietet persönliche Beratung und individuelle Umsetzung — keine Baukastensysteme, keine Massenware.',
    '',
    '---',
    '',
    '## Leistungen im Detail',
    '',
    ...SERVICE_DETAIL.flatMap((s) => [`### ${s.title} (${u(s.path)})`, s.text, '']),
    '---',
    '',
    '## Regionale Leistungsseiten',
    '',
    ...cityGroups.flatMap((g) => [
      `### ${g.city}`,
      ...g.services.map(
        (ls) => `- [${ls.serviceLabel} ${ls.city}](${u(localServicePath(ls))}): ${ls.metaDescription}`
      ),
      '',
    ]),
    '---',
    '',
    '## Über den Gründer',
    '',
    `${SITE.owner.name} ist Fachinformatiker für Anwendungsentwicklung und Gründer von ${SITE.name}. Über 10 Jahre Berufserfahrung in der Softwareentwicklung, unter anderem bei CHECK24. Spezialisiert auf Webdesign, Webentwicklung, SEO und KI-Beratung für den Mittelstand in ${SITE.address.region}.`,
    '',
    `- LinkedIn: ${SITE.social.linkedIn}`,
    `- GitHub: ${SITE.social.github}`,
    `- Über-mich-Seite: ${u('/ueber-mich')}`,
    '',
    '---',
    '',
    `## Zusammenarbeit (${u('/zusammenarbeit')})`,
    '',
    `So läuft eine Zusammenarbeit mit ${SITE.name} ab: Von der ersten Idee bis zum fertigen Projekt — transparent, persönlich und effizient. Kostenlose Erstberatung, Konzeptphase, Umsetzung, Qualitätssicherung, Launch und optionale Betreuung.`,
    '',
    '---',
    '',
    `## Blog (${u('/blog')})`,
    '',
    'Fachartikel zu Webdesign, SEO, Digitalisierung und KI für den Mittelstand. Praxisnahe Tipps und aktuelle Informationen für Unternehmer in Oberfranken.',
    '',
    ...blog.map((e) => `- [${e.data.title}](${u(`/blog/${e.id}`)}): ${e.data.description}`),
    '',
    '---',
    '',
    `## Wissen / Glossar (${u('/wissen')})`,
    '',
    'Verständliche Erklärungen digitaler Fachbegriffe, zielgruppengerecht für Nicht-Techniker aufbereitet.',
    '',
    ...wissen.map((e) => `- [${e.data.title}](${u(`/wissen/${e.id}`)}): ${e.data.description}`),
    '',
    '---',
    '',
    '## Kontakt',
    '',
    `- Name: ${SITE.owner.name}`,
    `- Unternehmen: ${SITE.name}`,
    `- Rechtsträger: ${SITE.legal.companyName}`,
    `- E-Mail: ${SITE.email}`,
    `- Telefon: ${SITE.phone}`,
    `- Adresse: ${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}, Bayern`,
    `- Region: Coburg und Umgebung, ${SITE.address.region}, Bayern (Einzugsgebiet ca. 50 km)`,
    `- Website: ${SITE.url}`,
    `- Erstberatung: Kostenlos und unverbindlich — ${u('/kontakt')}`,
    '',
    '---',
    '',
    '## Expertise-Bereiche',
    '',
    '- Webdesign & UI/UX Design',
    '- Webentwicklung & Individualsoftware',
    '- Suchmaschinenoptimierung (SEO)',
    '- Local SEO & Google Business Profile',
    '- KI-Beratung & Automatisierung',
    '- Responsive Design & Mobile First',
    '- Barrierefreies Webdesign (WCAG 2.1 AA)',
    '- Content-Strategie',
    '- Schema.org / Strukturierte Daten',
    '- TypeScript, React, Astro, Node.js',
    '',
    `## Branchen (beschrieben auf ${u('/zusammenarbeit')})`,
    '',
    ...industries.map((i) => `- ${i.title}: ${i.challenge}`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

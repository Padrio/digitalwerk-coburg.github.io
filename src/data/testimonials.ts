// ---------------------------------------------------------------------------
// Testimonials – client quotes (placeholder, Phase 1)
// ---------------------------------------------------------------------------

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Thomas Richter',
    role: 'Geschäftsführer',
    company: 'Richter Schreinerei Coburg',
    quote:
      'Endlich eine Website, die unser Handwerk so zeigt, wie es ist: solide und professionell. Seit dem Launch bekommen wir deutlich mehr Anfragen über Google. Pascal hat sich wirklich in unser Geschäft reingedacht und eine Lösung gebaut, die zu uns passt – ohne Schnickschnack, aber mit allem, was zählt.',
    rating: 5,
    initials: 'TR',
  },
  {
    name: 'Dr. Maria Hofmann',
    role: 'Inhaberin',
    company: 'Praxis für Physiotherapie Hofmann',
    quote:
      'Die Online-Terminbuchung, die Pascal für uns umgesetzt hat, spart meinem Team jeden Tag mindestens eine Stunde Telefonate. Die Patienten sind begeistert, und wir haben endlich eine Website, die professionell aussieht und einfach funktioniert. Die Zusammenarbeit war unkompliziert und angenehm.',
    rating: 5,
    initials: 'MH',
  },
  {
    name: 'Stefan Weber',
    role: 'Inhaber',
    company: 'Weber Gastro GmbH',
    quote:
      'Wir waren bei Google praktisch unsichtbar – das hat sich durch die SEO-Betreuung von Digitalwerk komplett geändert. Nach drei Monaten stehen wir bei den wichtigsten Suchbegriffen für Gastronomie in Coburg auf der ersten Seite. Klare Empfehlung für alle, die online gefunden werden wollen.',
    rating: 5,
    initials: 'SW',
  },
];

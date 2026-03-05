// ---------------------------------------------------------------------------
// Process steps – the six phases of working together
// ---------------------------------------------------------------------------

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Erstgespräch',
    description:
      'In einem kostenlosen Gespräch lernen wir uns kennen. Sie erzählen mir von Ihrem Unternehmen, Ihren Zielen und Herausforderungen – ich höre zu und stelle die richtigen Fragen. Danach wissen wir beide, ob die Zusammenarbeit passt.',
    icon: 'message-circle',
  },
  {
    number: 2,
    title: 'Konzept',
    description:
      'Auf Basis unseres Gesprächs erstelle ich ein detailliertes Konzept mit Struktur, Inhalten und technischem Ansatz. Sie erhalten ein transparentes Angebot, das auf Ihr Projekt zugeschnitten ist – ohne versteckte Kosten oder Überraschungen.',
    icon: 'lightbulb',
  },
  {
    number: 3,
    title: 'Umsetzung',
    description:
      'Ich mache mich an die Arbeit: Design, Entwicklung, Texte, Technik. Dabei setze ich auf bewährte Prozesse und moderne Tools. Sie erhalten regelmäßige Zwischenstände und können jederzeit Feedback geben.',
    icon: 'hammer',
  },
  {
    number: 4,
    title: 'Feedback',
    description:
      'Sie testen das Ergebnis ausgiebig und geben mir Ihr Feedback. Anpassungen und Feinkorrekturen sind fest eingeplant – schließlich muss das Ergebnis zu 100 % passen, bevor es live geht.',
    icon: 'message-square-text',
  },
  {
    number: 5,
    title: 'Launch',
    description:
      'Nach Ihrer Freigabe geht Ihr Projekt live. Ich kümmere mich um Hosting, Domain-Konfiguration, SSL-Zertifikat und alle technischen Details. Sie erhalten eine persönliche Einweisung in die Pflege und Nutzung.',
    icon: 'rocket',
  },
  {
    number: 6,
    title: 'Betreuung',
    description:
      'Nach dem Launch lasse ich Sie nicht allein. Regelmäßige Wartung, Sicherheitsupdates und schneller Support sorgen dafür, dass Ihr Projekt langfristig reibungslos läuft und sich weiterentwickeln kann.',
    icon: 'shield-check',
  },
];

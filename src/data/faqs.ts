// ---------------------------------------------------------------------------
// FAQs – global questions & service-specific questions
// ---------------------------------------------------------------------------

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceFAQs {
  [serviceId: string]: FAQ[];
}

// ---- Global FAQs ----------------------------------------------------------

export const globalFaqs: FAQ[] = [
  {
    question: 'Wie läuft eine Zusammenarbeit mit Digitalwerk Coburg ab?',
    answer:
      'Alles beginnt mit einem kostenlosen Erstgespräch, in dem wir Ihre Ziele und Anforderungen besprechen. Danach erhalten Sie ein transparentes Angebot mit Festpreis. Nach Ihrer Zusage arbeite ich in klar definierten Phasen – von Konzept über Umsetzung bis zum Launch. Dabei halten wir regelmäßig Rücksprache, damit das Ergebnis genau zu Ihnen passt.',
  },
  {
    question: 'Arbeiten Sie nur mit Unternehmen aus Coburg?',
    answer:
      'Mein Schwerpunkt liegt auf Unternehmen aus Coburg und Oberfranken – daher kenne ich die Region und den lokalen Markt gut. Ich arbeite aber auch gerne mit Kunden aus ganz Deutschland zusammen. Dank digitaler Kommunikation ist die Zusammenarbeit ortsunabhängig problemlos möglich.',
  },
  {
    question: 'Was unterscheidet Digitalwerk von einer großen Agentur?',
    answer:
      'Bei mir haben Sie einen festen Ansprechpartner, der Ihr Projekt von Anfang bis Ende betreut. Es gibt keine Übergaben zwischen Abteilungen und keine aufgeblähten Strukturen. Das bedeutet: schnellere Kommunikation, schlanke Prozesse und ein besseres Preis-Leistungs-Verhältnis. Sie zahlen für Ergebnisse, nicht für Overhead.',
  },
  {
    question: 'Wie lange dauert ein typisches Projekt?',
    answer:
      'Eine einfache Unternehmenswebsite ist in 4–6 Wochen fertig. Komplexere Projekte mit individuellen Funktionen oder umfangreichen Inhalten brauchen 8–12 Wochen. Den genauen Zeitrahmen klären wir im Erstgespräch – ich gebe Ihnen immer eine realistische Einschätzung, die ich auch einhalte.',
  },
  {
    question: 'Bieten Sie auch Wartung und Support nach dem Launch an?',
    answer:
      'Ja. Nach dem Launch unterstütze ich Sie mit regelmäßiger Wartung, Sicherheitsupdates und technischem Support. Dafür gibt es flexible Wartungsverträge ab 150 € pro Monat. Im ersten Monat nach Launch ist der Support bei jedem Projekt inklusive.',
  },
  {
    question: 'Muss ich technisches Vorwissen mitbringen?',
    answer:
      'Überhaupt nicht. Ich erkläre alles verständlich und ohne Fachjargon. Mein Ziel ist, dass Sie Ihre digitale Lösung verstehen und selbstbewusst nutzen können. Für die Pflege Ihrer Website erhalten Sie eine persönliche Einweisung und bei Bedarf eine einfache Anleitung.',
  },
];

// ---- Service-specific FAQs ------------------------------------------------

export const serviceFaqs: ServiceFAQs = {
  webdesign: [
    {
      question: 'Kann ich meine Website später selbst aktualisieren?',
      answer:
        'Ja, auf Wunsch binde ich ein benutzerfreundliches Content-Management-System ein, mit dem Sie Texte, Bilder und Neuigkeiten eigenständig pflegen können. Dafür erhalten Sie eine ausführliche Einweisung. Alternativ übernehme ich die Pflege für Sie im Rahmen eines Wartungsvertrags.',
    },
    {
      question: 'Nutzen Sie WordPress oder Baukastensysteme?',
      answer:
        'Nein. Ich setze auf moderne Technologien wie Astro, die deutlich schneller und sicherer sind als klassische WordPress-Seiten. Das Ergebnis: bessere Performance, weniger Wartungsaufwand und keine Abhängigkeit von Plugins, die Sicherheitslücken verursachen können.',
    },
    {
      question: 'Was kostet ein professionelles Webdesign?',
      answer:
        'Eine individuelle Unternehmenswebsite beginnt bei 2.500 €. Der endgültige Preis hängt vom Umfang ab – etwa der Anzahl der Seiten, besonderen Funktionen und ob ein CMS benötigt wird. Im Erstgespräch klären wir Ihre Anforderungen und Sie erhalten ein verbindliches Festpreisangebot.',
    },
    {
      question: 'Ist meine neue Website auch für Mobilgeräte optimiert?',
      answer:
        'Selbstverständlich. Jede Website wird von Anfang an responsive gestaltet – also für Smartphones, Tablets und Desktop-Bildschirme gleichermaßen optimiert. Über 60 % aller Website-Besuche erfolgen heute mobil, daher ist das keine Option, sondern Standard.',
    },
    {
      question: 'Kümmern Sie sich auch um Texte und Bilder?',
      answer:
        'Ich unterstütze Sie gerne bei der Texterstellung – entweder als Sparringspartner, der Ihre Entwürfe optimiert, oder mit KI-gestützter Texterstellung für Ihre Inhalte. Für professionelle Fotos empfehle ich Fotografen aus der Region. Hochwertige Stockbilder kann ich bei Bedarf ebenfalls einbinden.',
    },
  ],

  webentwicklung: [
    {
      question: 'Welche Technologien setzen Sie für die Entwicklung ein?',
      answer:
        'Ich arbeite hauptsächlich mit Astro, React, TypeScript und Tailwind CSS. Für Backend-Anforderungen kommen Node.js, Supabase oder individuelle API-Lösungen zum Einsatz. Die Technologiewahl richtet sich dabei immer nach den Anforderungen Ihres Projekts – nicht nach persönlichen Vorlieben.',
    },
    {
      question: 'Kann meine bestehende Software angebunden werden?',
      answer:
        'In den meisten Fällen ja. Viele gängige Systeme wie CRM-Software, Buchungstools oder Warenwirtschaftssysteme bieten Schnittstellen (APIs), über die eine Integration möglich ist. Im Erstgespräch prüfe ich, welche Ihrer Systeme angebunden werden können und wie.',
    },
    {
      question: 'Gehört mir der Code nach Projektabschluss?',
      answer:
        'Ja, vollständig. Nach Abschluss und Bezahlung erhalten Sie den gesamten Quellcode, die Dokumentation und Zugriff auf das Code-Repository. Es gibt kein Vendor-Lock-in – Sie können das Projekt jederzeit selbst weiterführen oder einen anderen Entwickler beauftragen.',
    },
    {
      question: 'Wie stellen Sie die Qualität des Codes sicher?',
      answer:
        'Durch saubere Code-Architektur, automatisierte Tests und Code-Reviews. Jedes Projekt wird mit TypeScript in striktem Modus entwickelt, was viele Fehler bereits beim Schreiben verhindert. Vor dem Launch gibt es eine gründliche Testphase mit Ihrem Feedback.',
    },
    {
      question: 'Können Sie ein bestehendes Projekt übernehmen oder erweitern?',
      answer:
        'Ja, das ist möglich. Ich schaue mir den bestehenden Code an und gebe Ihnen eine ehrliche Einschätzung: Was lässt sich sinnvoll erweitern, und wo wäre ein Neuaufbau effizienter? Manchmal spart eine Neuentwicklung langfristig mehr als aufwändige Flickarbeit an Altcode.',
    },
  ],

  'ki-beratung': [
    {
      question: 'Brauche ich als kleines Unternehmen wirklich KI?',
      answer:
        'Nicht jedes Unternehmen braucht KI – aber fast jedes kann davon profitieren. Schon einfache Automatisierungen wie KI-gestützte E-Mail-Vorlagen, automatische Textzusammenfassungen oder ein intelligenter Chatbot können im Alltag spürbar Zeit sparen. Im Erstgespräch finden wir heraus, ob und wo KI für Sie sinnvoll ist.',
    },
    {
      question: 'Ist der Einsatz von KI datenschutzkonform möglich?',
      answer:
        'Ja, wenn man es richtig macht. Ich berate Sie zu DSGVO-konformen Lösungen und achte darauf, dass keine sensiblen Daten unkontrolliert an externe Dienste fließen. Es gibt mittlerweile viele KI-Tools, die in Europa gehostet werden oder lokal laufen können.',
    },
    {
      question: 'Was kostet ein KI-Beratungsprojekt?',
      answer:
        'Eine Potenzialanalyse mit konkreten Handlungsempfehlungen beginnt bei 1.200 €. Wenn daraus eine Umsetzung folgt – etwa ein Chatbot oder eine Automatisierung – hängen die Kosten vom Umfang ab. Sie erhalten immer vorab ein transparentes Angebot.',
    },
    {
      question: 'Wie schnell sehe ich Ergebnisse?',
      answer:
        'Erste Quick-Wins sind oft schon nach wenigen Tagen möglich – zum Beispiel durch die Einführung von KI-Tools für Texterstellung oder Kundenservice. Komplexere Projekte wie individuelle Chatbots oder Automatisierungen brauchen typischerweise 4–8 Wochen bis zur produktiven Nutzung.',
    },
    {
      question: 'Schulen Sie auch mein Team im Umgang mit KI-Tools?',
      answer:
        'Ja, das ist sogar ein wichtiger Teil meiner Beratung. Die beste KI-Lösung bringt nichts, wenn Ihr Team sie nicht nutzt. Ich biete praxisnahe Workshops an, in denen Ihre Mitarbeiter lernen, KI-Tools sicher und effektiv im Arbeitsalltag einzusetzen.',
    },
  ],

  seo: [
    {
      question: 'Wie lange dauert es, bis SEO-Maßnahmen wirken?',
      answer:
        'Erste Verbesserungen bei technischem SEO (Ladezeiten, Seitenstruktur) zeigen sich oft schon nach wenigen Wochen. Für signifikante Ranking-Verbesserungen bei umkämpften Suchbegriffen sollten Sie 3–6 Monate einplanen. SEO ist kein Sprint, sondern ein Marathon – aber einer, der sich langfristig sehr lohnt.',
    },
    {
      question: 'Garantieren Sie Platz 1 bei Google?',
      answer:
        'Nein, und seien Sie vorsichtig bei Anbietern, die das versprechen. Kein seriöser SEO-Spezialist kann Rankings garantieren, weil Google über 200 Faktoren berücksichtigt und den Algorithmus ständig anpasst. Was ich garantiere: eine fundierte Strategie, saubere Umsetzung und messbare Fortschritte.',
    },
    {
      question: 'Was bringt lokales SEO für mein Unternehmen in Coburg?',
      answer:
        'Wenn jemand in Coburg „Handwerker in der Nähe" oder „Restaurant Coburg" sucht, entscheiden lokale SEO-Maßnahmen, ob Ihr Unternehmen angezeigt wird. Ein optimiertes Google Business Profil, lokale Keywords und Verzeichniseinträge können Ihre Sichtbarkeit in der Region erheblich steigern – oft mit weniger Aufwand als überregionales SEO.',
    },
    {
      question: 'Kann ich SEO auch selbst machen?',
      answer:
        'Grundlagen wie die Pflege Ihres Google Business Profils oder das Schreiben guter Texte können Sie durchaus selbst übernehmen. Für technisches SEO, Keyword-Strategie und Wettbewerbsanalyse ist Fachwissen nötig. Ich helfe Ihnen gerne dabei, die richtige Balance zwischen Eigenarbeit und professioneller Unterstützung zu finden.',
    },
    {
      question: 'Bin ich an einen langfristigen Vertrag gebunden?',
      answer:
        'Nein. Meine SEO-Betreuung ist monatlich kündbar. Ich bin überzeugt, dass gute Arbeit für sich spricht und Sie nicht durch Vertragslaufzeiten gebunden werden sollten. Die meisten meiner Kunden bleiben freiwillig, weil sie die Ergebnisse sehen.',
    },
  ],
};

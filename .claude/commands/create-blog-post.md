# Blog-Post erstellen

Du erstellst einen vollständigen, publikationsfertigen Blog-Post für digitalwerk-coburg.de.

## Thema

- **Titel:** $TITLE
- **Beschreibung:** $DESCRIPTION
- **Keywords:** $KEYWORDS
- **Zielgruppe:** $AUDIENCE
- **Aktualitätsbezug:** $TIMELINESS

## Aufgabe

Erstelle eine Markdown-Datei unter `src/content/blog/`. Lies zuerst die bestehenden Blog-Posts in diesem Ordner als Stilreferenz.

## Dateiname

- Slug aus dem Titel ableiten: Kleinbuchstaben, Bindestriche, keine Umlaute (ue, ae, oe, ss), kein Datum
- Beispiel: `ki-assistenten-im-handwerk-coburg.md`

## Frontmatter-Schema

```yaml
---
title: "Exakter Titel mit Fokus-Keyword"
description: "150-160 Zeichen Meta-Description mit Fokus-Keyword"
summary: "1-3 Sätze Zusammenfassung für KI-Zitation — direkte, faktische Kernaussage des Artikels"
pubDate: 2026-03-10  # Heutiges Datum verwenden
tags: ["Tag1", "Tag2", "Tag3", "Tag4"]
draft: false
faqs:
  - question: "Frage 1?"
    answer: "Antwort 1"
  - question: "Frage 2?"
    answer: "Antwort 2"
  - question: "Frage 3?"
    answer: "Antwort 3"
  - question: "Frage 4?"
    answer: "Antwort 4"
  - question: "Frage 5?"
    answer: "Antwort 5"
---
```

## Inhaltliche Anforderungen

### Umfang & Struktur
- **Minimum 2.000 Wörter** (Ziel: 2.500+)
- 6-8 Hauptabschnitte (## h2) mit jeweils 2-3 Unterabschnitten (### h3)
- Einleitung mit konkreter Problemstellung und Statistik/Fakt als Hook
- Fazit mit nummerierten Key-Takeaways

### SEO
- **Fokus-Keyword** aus den gegebenen Keywords identifizieren — im Titel, in der Description, in h2-Überschriften und natürlich im Text
- **Sekundär-Keywords** organisch einstreuen
- **Title-Tag-Format:** "[Seitenthema] | Digitalwerk Coburg" (wird automatisch generiert, der `title` im Frontmatter ist das Seitenthema)

### Interne Verlinkung (PFLICHT)
Mindestens 2 Links zu Leistungsseiten, natürlich in den Text eingebettet:
- `/leistungen/webdesign` — Webdesign & UI/UX
- `/leistungen/webentwicklung` — Webentwicklung & Individualsoftware
- `/leistungen/seo` — Suchmaschinenoptimierung
- `/leistungen/ki-beratung` — KI-Beratung & Automatisierung

Wähle die thematisch passenden Leistungsseiten. Zusätzlich mindestens 1 Link zu `/kontakt` oder `/ueber-mich`.

### GEO-Optimierung (KI-Sichtbarkeit)
- **Zusammenfassungs-Box:** Wird automatisch aus dem `summary`-Frontmatter generiert — 1-3 Sätze, die die Kernaussage des Artikels direkt beantworten
- **Zitierfähige Absätze:** Jeder wichtige Absatz beginnt mit einer direkten, faktischen Aussage (kein Hedging, keine Frage). Maximal 2-3 Sätze, selbsterklärend ohne Kontext
- **Mindestens 1 HTML-Tabelle** mit Kennzahlen, Vergleich oder Übersicht — KI-Engines extrahieren Tabellen bevorzugt
- **FAQ-Antworten:** Erster Satz = direkte Antwort auf die Frage, dann Erklärung/Details
- **Überschriften als Fragen/Aussagen** statt generische Labels ("Was kostet...?" statt "Kosten")
- **Konkrete Zahlen mit Quelle** einstreuen — Seiten mit Statistiken werden 2-3x häufiger zitiert

### FAQ-Sektion
- 5 Fragen mit ausführlichen Antworten (3-5 Sätze pro Antwort)
- Die FAQs müssen sowohl im Frontmatter-Array stehen (für Schema.org JSON-LD) als auch als ## FAQ-Abschnitt am Ende des Artikels ausgeschrieben sein
- Fragen sollen echte Suchintentionen abbilden, nicht Marketing-Fragen
- FAQ-Antworten beginnen mit einer direkten Aussage (kein "Es kommt darauf an...")

### Abschluss
- Nach der FAQ-Sektion: kurzer Absatz mit CTA-Verweis auf `/kontakt`
- Formulierung wie: "Sie möchten [Thema] in Ihrem Unternehmen umsetzen? [Wir beraten Sie gerne](/kontakt) — kostenlos und unverbindlich."

## Tonalität & Sprache

- **Deutsch** — alle Texte auf Deutsch
- **Siezen** — "Sie", "Ihr", "Ihnen" (niemals duzen)
- **Professionell & nahbar** — seriöses Ingenieurbüro, kein Startup-Slang
- **Kein Entwickler-Jargon** — Fachbegriffe nur mit sofortiger Erklärung
- **Regionaler Bezug** — Coburg, Oberfranken, Bayern wo passend einbauen
- **Konkrete Zahlen** statt vager Aussagen ("in 4-6 Wochen" statt "schnell")
- **Zielgruppe:** Geschäftsinhaber, Handwerker, Praxen, Gastronomen, Mittelstand

## Nach dem Schreiben

1. Lies den erstellten Post nochmal und prüfe:
   - Mindestens 2.000 Wörter?
   - Mindestens 2 interne Links zu `/leistungen/*`?
   - 5 FAQs im Frontmatter UND als Textabschnitt?
   - Kein Duzen?
   - Fokus-Keyword im Titel und in mindestens 2 h2-Überschriften?
   - `summary` im Frontmatter vorhanden (1-3 Sätze)?
   - Zusammenfassungs-Box wird automatisch gerendert?
   - Mindestens 1 HTML-Tabelle im Artikel?
   - Überschriften als Fragen/Aussagen formuliert?
   - FAQ-Antworten beginnen mit direkter Aussage?
2. Führe `npm run build` aus, um sicherzustellen, dass der Post fehlerfrei kompiliert.

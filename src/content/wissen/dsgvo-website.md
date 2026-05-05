---
title: "DSGVO-konforme Website — Anforderungen, Pflichten und Umsetzung"
description: "Eine DSGVO-konforme Website schützt Nutzerdaten gemäß EU-Recht. Pflichten: Datenschutzerklärung, Cookie-Banner, sichere Datenübertragung, Auftragsverarbeitung."
summary: "Eine DSGVO-konforme Website erfüllt die EU-Datenschutz-Grundverordnung von 2018: vollständige Datenschutzerklärung, korrektes Cookie-Banner (nur bei Tracking), Verschlüsselung via SSL, kein Google Analytics ohne Einwilligung. Bußgelder bei Verstößen reichen bis 20 Mio. Euro oder 4 % des Jahresumsatzes."
category: "recht"
related: ["was-ist-webdesign", "was-kostet-eine-website"]
pubDate: 2026-05-05
faqs:
  - question: "Brauche ich ein Cookie-Banner?"
    answer: "Nur, wenn Sie nicht-essentielle Cookies oder Tracking einsetzen (Google Analytics, Facebook Pixel, Marketing-Tools). Für reine Funktions-Websites ohne Tracking ist ein Cookie-Banner nicht erforderlich. Bei Digitalwerk Coburg verzichten wir bewusst auf Tracking — daher kein Banner."
  - question: "Was passiert bei DSGVO-Verstößen?"
    answer: "Bußgelder bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes — je nachdem, was höher ist. Bei kleineren Verstößen liegen Bußgelder typischerweise bei 1.000–10.000 €. Abmahnungen durch Mitbewerber kosten oft 800–2.000 € Anwaltskosten plus Unterlassungspflicht."
  - question: "Darf ich Google Fonts auf meiner Website nutzen?"
    answer: "Nicht direkt vom Google CDN — das LG München hat 2022 entschieden, dass Google Fonts CDN ohne Einwilligung gegen die DSGVO verstößt. Lokal gehostete Schriften (z.B. via Fontsource) sind unproblematisch. Bei Digitalwerk Coburg sind Schriften standardmäßig lokal gehostet."
---

<dfn>**Eine DSGVO-konforme Website erfüllt die Vorgaben der EU-Datenschutz-Grundverordnung (DSGVO), die seit Mai 2018 in der gesamten EU verbindlich ist.** Pflichten umfassen vollständige Datenschutzerklärung, korrektes Cookie-Banner (bei Tracking), Verschlüsselung via SSL, transparente Datenverarbeitung und Auftragsverarbeitungsverträge mit Dienstleistern.</dfn>

Verstöße gegen die DSGVO können teuer werden — bis 20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes. In der Praxis sind Bußgelder bei kleinen Unternehmen meist niedriger (1.000–10.000 €), aber Abmahnungen durch Konkurrenten oder spezialisierte Anwälte (sogenannte „Abmahnvereine") kosten regelmäßig 800–2.000 € pro Fall.

## Die fünf Pflichtelemente einer DSGVO-konformen Website

### 1. Datenschutzerklärung

Jede Website braucht eine vollständige Datenschutzerklärung, die alle Datenverarbeitungen transparent erklärt. Pflichtinhalte:

- Wer ist verantwortlich (Anbieter, Adresse, Kontakt)
- Welche Daten werden erhoben (Server-Logs, Formulareingaben, Cookies)
- Wozu (Vertragsabwicklung, Marketing, Analyse)
- Auf welcher Rechtsgrundlage (Vertrag, Einwilligung, berechtigtes Interesse)
- Wie lange werden Daten gespeichert
- An welche Dritten werden Daten weitergegeben (z.B. Hosting, Newsletter-Anbieter)
- Rechte der Nutzer (Auskunft, Löschung, Widerspruch, Beschwerde)

Die Datenschutzerklärung muss leicht auffindbar sein — typischerweise im Footer auf jeder Seite verlinkt.

### 2. Impressum

§ 5 TMG (Telemediengesetz) verpflichtet jede gewerbliche Website zu einem Impressum. Pflichtangaben: vollständiger Name, Adresse, Kontakt, Handelsregister-Eintrag (falls vorhanden), Umsatzsteuer-ID (falls vorhanden), Verantwortlicher nach § 18 Abs. 2 MStV.

Auch ein fehlendes oder unvollständiges Impressum ist abmahnfähig.

### 3. SSL-Verschlüsselung (HTTPS)

Jede Website muss verschlüsselt ausgeliefert werden. Erkennbar am Schloss-Symbol im Browser und der URL mit `https://`. Ohne SSL warnen Browser vor unsicherer Verbindung — Nutzer brechen ab.

SSL-Zertifikate sind heute kostenlos via Let's Encrypt erhältlich und bei jedem seriösen Hosting-Anbieter Standard.

### 4. Cookie-Banner (bei Tracking)

Cookie-Banner sind nur erforderlich, wenn nicht-essentielle Cookies oder Tracking eingesetzt werden. Beispiele:

- Google Analytics → Banner Pflicht
- Facebook Pixel → Banner Pflicht
- Reines Plausible-Tracking (cookie-frei) → Banner nicht erforderlich
- Reine Funktions-Cookies (Login, Warenkorb) → Banner nicht erforderlich

Wichtig: Das Banner muss eine echte Wahl bieten. „Akzeptieren" + „Ablehnen" als gleichwertige Buttons. Vorausgewählte Häkchen oder versteckte „Ablehnen"-Buttons sind unzulässig.

### 5. Auftragsverarbeitungsverträge (AVV)

Jeder Dienstleister, der personenbezogene Daten verarbeitet, braucht einen Auftragsverarbeitungsvertrag. Typische Beispiele:

- Hosting-Anbieter (Server-Logs enthalten IP-Adressen)
- Newsletter-Anbieter (Mailchimp, Brevo)
- Cloud-Speicher (Dropbox, Google Drive)
- Tracking-Anbieter (Plausible, Matomo)

Ohne AVV ist die Datenweitergabe rechtswidrig. AVVs sind heute meist online beim Anbieter herunterladbar.

## Die größten DSGVO-Fallen bei Websites

Sechs Probleme, die wir regelmäßig bei alten Websites finden:

### 1. Google Fonts CDN

Das Landgericht München hat 2022 entschieden, dass Google Fonts CDN ohne Einwilligung des Nutzers gegen die DSGVO verstößt. Hintergrund: Beim Aufruf einer Website mit Google Fonts wird die IP-Adresse des Nutzers an Google in den USA übertragen — ohne Einwilligung.

**Lösung:** Schriften lokal hosten. Tools wie [Fontsource](https://fontsource.org) machen das einfach. Bei Digitalwerk Coburg standardmäßig.

### 2. Google Analytics ohne Einwilligung

Google Analytics darf in Deutschland nur mit aktiver Einwilligung des Nutzers eingesetzt werden — ein Cookie-Banner ist Pflicht. Auch dann liegen Bedenken vor, da Daten in die USA fließen.

**Alternative:** [Plausible](https://plausible.io) oder [Umami](https://umami.is) — beide DSGVO-konform, cookie-frei, keine Einwilligung nötig. Bei Digitalwerk Coburg empfohlen.

### 3. Google Maps direkt eingebunden

Google Maps lädt direkt vom Google CDN — IP-Übertragung an Google ohne Einwilligung. Abmahnfähig.

**Alternative:** OpenStreetMap, statisches Karten-Bild oder Google Maps mit Click-to-Load (Karte erscheint erst nach Klick + Einwilligung).

### 4. Newsletter-Anmeldung ohne Double-Opt-In

Newsletter-Anmeldung muss durch Double-Opt-In bestätigt werden — Nutzer trägt Mail ein, erhält Bestätigungsmail, klickt Link. Erst dann ist Anmeldung wirksam.

Single-Opt-In oder Vorausgefüllte Häkchen sind unzulässig.

### 5. Kontaktformular ohne Einwilligung

Kontaktformulare verarbeiten personenbezogene Daten (Name, E-Mail, Telefon, Anliegen). Pflicht: Hinweis auf Datenschutzerklärung mit Verlinkung, optional Häkchen zur Einwilligung.

Reine Vertragsbahnung (z.B. Anfrage zu Dienstleistung) braucht keine separate Einwilligung — ist von Art. 6 Abs. 1 b DSGVO gedeckt.

### 6. Server in den USA

Server in den USA sind seit dem EuGH-Urteil „Schrems II" (2020) problematisch. US-Behörden haben Zugriff auf Daten — auch ohne deutschen Gerichtsbeschluss.

**Lösung:** Hosting in Deutschland oder EU-Länder mit angemessenem Datenschutzniveau. Beispiele: Hetzner (Deutschland), IONOS (Deutschland), Strato (Deutschland), OVH (Frankreich).

## Was kostet DSGVO-Compliance?

Die meisten DSGVO-Maßnahmen kosten kein Extra-Geld — sie sind Bestandteil eines professionellen [Webdesigns](/wissen/was-ist-webdesign):

| Maßnahme | Kosten | Häufigkeit |
|----------|--------|------------|
| SSL-Zertifikat | Kostenlos (Let's Encrypt) | Auto-Erneuerung |
| Lokale Schriften | Kostenlos (Fontsource) | Einmalig |
| Plausible-Tracking | 9 €/Monat (Selfhosted: 0 €) | Monatlich |
| Datenschutzerklärung | 0–500 € (Generator oder Anwalt) | Einmalig + Updates |
| Cookie-Banner-Tool | Kostenlos (eigene Lösung) bis 30 €/Monat (Cookiebot) | Monatlich |
| Hosting Deutschland | 5–30 €/Monat | Monatlich |

Wer auf Tracking verzichtet, spart Geld und hat weniger DSGVO-Risiko. Bei Digitalwerk Coburg ist DSGVO-konformes Setup im [Festpreis](/wissen/was-kostet-eine-website) enthalten — kein Aufpreis.

## DSGVO-Check für Ihre bestehende Website

Vier schnelle Tests:

1. **Schloss-Symbol im Browser?** Wenn nicht: SSL fehlt.
2. **Schriften via Google Fonts?** Browser-DevTools (F12) → Network-Tab → suchen nach „fonts.googleapis.com". Treffer = Problem.
3. **Google Analytics oder Tag Manager im Quellcode?** F12 → Sources → suchen nach „googletagmanager.com" oder „google-analytics.com". Treffer = Cookie-Banner Pflicht.
4. **Datenschutzerklärung vorhanden + verlinkt?** Footer-Check.

Bei Auffälligkeiten sollten Sie handeln — entweder selbst nachbessern oder professionellen Anbieter beauftragen.

## Wann brauchen Sie einen Datenschutzbeauftragten?

Externe Datenschutzbeauftragte sind Pflicht, wenn:

- Mehr als 20 Mitarbeitende regelmäßig personenbezogene Daten verarbeiten, ODER
- Kerngeschäft besonders sensible Daten betrifft (Gesundheit, Recht, Finanzen).

Bei kleineren Unternehmen reicht es, dass eine verantwortliche Person die DSGVO-Pflichten kennt und umsetzt. Externe Beratung kostet 50–200 € pro Stunde — meist 1–3 Stunden initial.

## Mehr Sicherheit beginnt mit dem richtigen Webdesign

Eine DSGVO-konforme Website ist kein nachträgliches Add-on, sondern Bestandteil professioneller Konzeption. Bei [Webdesign Coburg](/webdesign-coburg) ist DSGVO-Konformität standardmäßig: lokale Schriften, kein Google Maps direkt, kein Google Analytics, transparentes Setup.

Im [kostenlosen Erstgespräch](/kontakt) prüfen wir Ihre bestehende Website auf DSGVO-Probleme und zeigen, welche Maßnahmen kurzfristig umsetzbar sind.

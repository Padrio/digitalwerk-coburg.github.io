import { useState } from "react";

const brandColors = {
  primary: { name: "Veste Navy", hex: "#0f1d3d", rgb: "15, 29, 61", usage: "Hauptfarbe – Headlines, Navigation, Footer, primäre Flächen" },
  primaryLight: { name: "Coburg Blau", hex: "#1e3a6e", rgb: "30, 58, 110", usage: "Sekundäre Flächen, Hover-States, Karten-Hintergründe" },
  accent: { name: "Signal Orange", hex: "#e8620a", rgb: "232, 98, 10", usage: "CTAs, Buttons, Highlights, Akzente – sparsam einsetzen!" },
  accentHover: { name: "Flamme", hex: "#ff7a1a", rgb: "255, 122, 26", usage: "Hover-State des Accent, aktive Elemente" },
  neutral900: { name: "Stahl", hex: "#1a1a2e", rgb: "26, 26, 46", usage: "Fließtext auf hellem Hintergrund" },
  neutral600: { name: "Granit", hex: "#4a4a5a", rgb: "74, 74, 90", usage: "Sekundärtext, Captions, Metadaten" },
  neutral300: { name: "Nebel", hex: "#b8b8c8", rgb: "184, 184, 200", usage: "Rahmen, Trennlinien, Platzhalter" },
  neutral100: { name: "Lichtgrau", hex: "#f0f0f5", rgb: "240, 240, 245", usage: "Sektions-Hintergründe, Cards, Alternating Sections" },
  white: { name: "Reinweiß", hex: "#ffffff", rgb: "255, 255, 255", usage: "Haupthintergrund, Karten, Eingabefelder" },
  success: { name: "Erfolg", hex: "#0a8f5c", rgb: "10, 143, 92", usage: "Erfolgsmeldungen, positive Indikatoren" },
  dark: { name: "Tiefblau", hex: "#0a1128", rgb: "10, 17, 40", usage: "Dark-Mode-Hintergrund, Footer" },
};

const typographyScale = [
  { name: "Display", size: "clamp(2.5rem, 5vw, 4rem)", weight: "800", font: "DM Sans", usage: "Hero-Headlines, max 1x pro Seite", lineHeight: "1.1", letterSpacing: "-0.03em" },
  { name: "H1", size: "clamp(2rem, 3.5vw, 2.75rem)", weight: "700", font: "DM Sans", usage: "Seitenüberschriften", lineHeight: "1.15", letterSpacing: "-0.02em" },
  { name: "H2", size: "clamp(1.5rem, 2.5vw, 2rem)", weight: "700", font: "DM Sans", usage: "Sektionsüberschriften", lineHeight: "1.2", letterSpacing: "-0.015em" },
  { name: "H3", size: "1.25rem", weight: "600", font: "DM Sans", usage: "Karten-Titel, Unterabschnitte", lineHeight: "1.3", letterSpacing: "-0.01em" },
  { name: "Body", size: "1.0625rem", weight: "400", font: "Source Sans 3", usage: "Fließtext, Beschreibungen", lineHeight: "1.7", letterSpacing: "0" },
  { name: "Small", size: "0.875rem", weight: "400", font: "Source Sans 3", usage: "Captions, Meta-Info, Footer-Text", lineHeight: "1.5", letterSpacing: "0.01em" },
  { name: "Button", size: "0.9375rem", weight: "600", font: "DM Sans", usage: "Buttons, CTAs, Navigation", lineHeight: "1", letterSpacing: "0.02em" },
];

function ColorSwatch({ color, large }) {
  const [copied, setCopied] = useState(false);
  const isLight = ["#ffffff", "#f0f0f5", "#b8b8c8"].includes(color.hex);
  return (
    <div
      onClick={() => { navigator.clipboard?.writeText(color.hex); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      style={{
        cursor: "pointer",
        background: color.hex,
        borderRadius: large ? "16px" : "12px",
        padding: large ? "28px 24px" : "20px 16px",
        minHeight: large ? "160px" : "120px",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        border: isLight ? "1px solid #e0e0e8" : "1px solid transparent",
        position: "relative", overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      {copied && (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(0,0,0,0.8)", color: "#fff", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 600 }}>
          Kopiert!
        </div>
      )}
      <div style={{ color: isLight ? "#1a1a2e" : "#fff", fontSize: "13px", fontWeight: 700, marginBottom: "4px", letterSpacing: "0.03em", textTransform: "uppercase", opacity: 0.8 }}>{color.name}</div>
      <div style={{ color: isLight ? "#1a1a2e" : "#fff", fontSize: "15px", fontWeight: 600, fontFamily: "monospace" }}>{color.hex}</div>
      <div style={{ color: isLight ? "#4a4a5a" : "rgba(255,255,255,0.7)", fontSize: "12px", marginTop: "4px" }}>{color.usage}</div>
    </div>
  );
}

function LogoMark({ size = 48, variant = "dark" }) {
  const bg = variant === "dark" ? "#0f1d3d" : "transparent";
  const fg = variant === "dark" ? "#ffffff" : "#0f1d3d";
  const accent = "#e8620a";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="10" fill={bg} />
      <text x="8" y="34" fontFamily="Georgia, serif" fontWeight="800" fontSize="30" fill={fg}>D</text>
      <rect x="30" y="12" width="4" height="24" rx="2" fill={accent} />
      <rect x="36" y="18" width="4" height="18" rx="2" fill={accent} opacity="0.6" />
    </svg>
  );
}

function Section({ title, subtitle, children, dark, id }) {
  return (
    <section id={id} style={{
      padding: "64px 0",
      background: dark ? "linear-gradient(135deg, #0a1128 0%, #0f1d3d 100%)" : "#ffffff",
      color: dark ? "#ffffff" : "#1a1a2e",
      borderBottom: dark ? "none" : "1px solid #e8e8f0",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div style={{ width: "32px", height: "3px", background: "#e8620a", borderRadius: "2px" }} />
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: dark ? "#e8620a" : "#e8620a" }}>{subtitle}</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, margin: 0, color: dark ? "#fff" : "#0f1d3d" }}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function BrandKit() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Übersicht" },
    { id: "colors", label: "Farben" },
    { id: "typography", label: "Typografie" },
    { id: "logo", label: "Logo & Marke" },
    { id: "components", label: "UI-Bausteine" },
    { id: "moodboard", label: "Moodboard" },
    { id: "voice", label: "Tonalität" },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#f8f8fc", minHeight: "100vh", color: "#1a1a2e" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <header style={{
        background: "linear-gradient(135deg, #0a1128 0%, #0f1d3d 50%, #1e3a6e 100%)",
        padding: "48px 32px 40px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(ellipse at top right, rgba(232,98,10,0.12) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <LogoMark size={52} />
            <div>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8620a", marginBottom: "2px" }}>Brand Kit & Moodboard</div>
              <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#fff", margin: 0, letterSpacing: "-0.03em" }}>Digitalwerk Coburg</h1>
            </div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", maxWidth: "600px", lineHeight: 1.6, margin: 0 }}>
            Markenidentität für Webentwicklung, Individualsoftware & KI-Beratung im Raum Coburg und Oberfranken. Version 1.0
          </p>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav style={{
        background: "#fff", borderBottom: "1px solid #e8e8f0",
        position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", display: "flex", gap: "4px", overflowX: "auto" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "14px 18px",
                fontSize: "13px", fontWeight: activeTab === t.id ? 700 : 500,
                color: activeTab === t.id ? "#0f1d3d" : "#4a4a5a",
                background: "none", border: "none", cursor: "pointer",
                borderBottom: activeTab === t.id ? "2px solid #e8620a" : "2px solid transparent",
                whiteSpace: "nowrap", transition: "all 0.15s",
                fontFamily: "inherit",
              }}
            >{t.label}</button>
          ))}
        </div>
      </nav>

      {/* ===== OVERVIEW ===== */}
      {activeTab === "overview" && (
        <>
          <Section title="Die Marke auf einen Blick" subtitle="Kernidentität">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {[
                { label: "Markenname", value: "Digitalwerk Coburg", note: "Schreibweise immer: \"Digitalwerk\" als ein Wort, \"Coburg\" getrennt" },
                { label: "Domain", value: "digitalwerk-coburg.de", note: "Redirect sichern: digitalwerk.de (für spätere Expansion)" },
                { label: "Claim / Tagline", value: "Digitale Lösungen. Solide gebaut.", note: "Alternativ: \"Websites, Software & KI aus Coburg\"" },
                { label: "Positionierung", value: "Der zuverlässige Digitalpartner aus der Region", note: "Nicht hip, nicht billig – solide, kompetent, nahbar" },
                { label: "Zielgruppe", value: "Lokale KMU, Handwerk, Praxen, Gastro", note: "Entscheider: 35-60 Jahre, pragmatisch, sucht Vertrauen" },
                { label: "Markenpersönlichkeit", value: "Kompetent · Bodenständig · Modern", note: "Wie ein Ingenieur, der auch gut erklären kann" },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: "12px", padding: "24px",
                  border: "1px solid #e8e8f0",
                  borderLeft: "3px solid #e8620a",
                }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e8620a", marginBottom: "8px" }}>{item.label}</div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#0f1d3d", marginBottom: "6px", lineHeight: 1.3 }}>{item.value}</div>
                  <div style={{ fontSize: "13px", color: "#4a4a5a", lineHeight: 1.5 }}>{item.note}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Markenwerte" subtitle="Wofür wir stehen" dark>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
              {[
                { icon: "🏗️", title: "Solidität", desc: "Wir bauen digital wie andere Häuser bauen – durchdacht, stabil, langlebig." },
                { icon: "🤝", title: "Nähe", desc: "Persönlicher Ansprechpartner, kurze Wege, kein Callcenter." },
                { icon: "🧠", title: "Kompetenz", desc: "10+ Jahre Erfahrung, moderne Technologien, echte Lösungen." },
                { icon: "🔮", title: "Zukunft", desc: "KI und Digitalisierung nicht als Buzzwords, sondern als echten Mehrwert." },
              ].map((v, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "28px 24px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <div style={{ fontSize: "32px", marginBottom: "16px" }}>{v.icon}</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>{v.title}</div>
                  <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </Section>
        </>
      )}

      {/* ===== COLORS ===== */}
      {activeTab === "colors" && (
        <>
          <Section title="Primär- & Akzentfarben" subtitle="Farbsystem">
            <p style={{ fontSize: "15px", color: "#4a4a5a", maxWidth: "700px", lineHeight: 1.7, marginBottom: "32px" }}>
              Das Farbsystem basiert auf einem tiefen, vertrauenswürdigen Blau als Hauptfarbe und einem kräftigen Orange als Akzent. Die Kombination signalisiert: professionell und handlungsorientiert. Klick auf eine Farbe kopiert den Hex-Wert.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
              <ColorSwatch color={brandColors.primary} large />
              <ColorSwatch color={brandColors.primaryLight} large />
              <ColorSwatch color={brandColors.accent} large />
              <ColorSwatch color={brandColors.accentHover} large />
            </div>

            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "#0f1d3d" }}>Neutraltöne & System</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
              {[brandColors.neutral900, brandColors.neutral600, brandColors.neutral300, brandColors.neutral100, brandColors.white, brandColors.success, brandColors.dark].map((c, i) => (
                <ColorSwatch key={i} color={c} />
              ))}
            </div>
          </Section>

          <Section title="Farbverhältnisse & Regeln" subtitle="Anwendung" dark>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "24px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>60 / 30 / 10 Regel</div>
                <div style={{ display: "flex", borderRadius: "8px", overflow: "hidden", height: "40px", marginBottom: "16px" }}>
                  <div style={{ width: "60%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#1a1a2e" }}>60% Weiß/Grau</div>
                  <div style={{ width: "30%", background: "#0f1d3d", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff" }}>30% Navy</div>
                  <div style={{ width: "10%", background: "#e8620a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff" }}>10%</div>
                </div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>Orange wird ausschließlich für CTAs, aktive Zustände und wichtige Akzente eingesetzt – nie als Flächenfarbe.</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "24px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>Kontrastanforderungen (WCAG AA)</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    { bg: "#ffffff", fg: "#0f1d3d", label: "Navy auf Weiß", ratio: "15.4:1 ✓" },
                    { bg: "#ffffff", fg: "#e8620a", label: "Orange auf Weiß", ratio: "4.6:1 ✓ (nur groß)" },
                    { bg: "#0f1d3d", fg: "#ffffff", label: "Weiß auf Navy", ratio: "15.4:1 ✓" },
                    { bg: "#0f1d3d", fg: "#e8620a", label: "Orange auf Navy", ratio: "3.3:1 ⚠ (dekorativ)" },
                  ].map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "80px", height: "28px", background: c.bg, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, color: c.fg, border: "1px solid rgba(255,255,255,0.15)" }}>{c.label.split(" ")[0]}</div>
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", flex: 1 }}>{c.label}</span>
                      <span style={{ fontSize: "12px", fontFamily: "monospace", color: c.ratio.includes("✓") ? "#4ade80" : "#fbbf24" }}>{c.ratio}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </>
      )}

      {/* ===== TYPOGRAPHY ===== */}
      {activeTab === "typography" && (
        <>
          <Section title="Typografie-System" subtitle="Schriften">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "48px" }}>
              <div style={{ background: "#fff", borderRadius: "12px", padding: "32px", border: "1px solid #e8e8f0" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e8620a", marginBottom: "16px" }}>Display & Headlines</div>
                <div style={{ fontSize: "48px", fontWeight: 800, color: "#0f1d3d", lineHeight: 1.1, letterSpacing: "-0.03em", fontFamily: "'DM Sans', sans-serif", marginBottom: "16px" }}>DM Sans</div>
                <p style={{ fontSize: "14px", color: "#4a4a5a", lineHeight: 1.6 }}>
                  Geometrisch, modern und dennoch warm. Wirkt professionell ohne kalt zu sein. Breite Buchstaben sorgen für gute Lesbarkeit auch in großen Größen.
                </p>
                <div style={{ marginTop: "16px", fontSize: "13px", fontFamily: "monospace", color: "#4a4a5a", background: "#f0f0f5", padding: "8px 12px", borderRadius: "6px" }}>
                  @fontsource/dm-sans → Lokal gehostet
                </div>
              </div>
              <div style={{ background: "#fff", borderRadius: "12px", padding: "32px", border: "1px solid #e8e8f0" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e8620a", marginBottom: "16px" }}>Body & Fließtext</div>
                <div style={{ fontSize: "48px", fontWeight: 400, color: "#0f1d3d", lineHeight: 1.1, fontFamily: "'Source Sans 3', sans-serif", marginBottom: "16px" }}>Source Sans 3</div>
                <p style={{ fontSize: "14px", color: "#4a4a5a", lineHeight: 1.6, fontFamily: "'Source Sans 3', sans-serif" }}>
                  Von Adobe entwickelt, optimal für lange Texte. Hervorragende Lesbarkeit in kleinen Größen, klare Buchstabenformen, professionelle Ausstrahlung.
                </p>
                <div style={{ marginTop: "16px", fontSize: "13px", fontFamily: "monospace", color: "#4a4a5a", background: "#f0f0f5", padding: "8px 12px", borderRadius: "6px" }}>
                  @fontsource/source-sans-3 → Lokal gehostet
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px", color: "#0f1d3d" }}>Typografie-Skala</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {typographyScale.map((t, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: "10px", padding: "20px 24px",
                  border: "1px solid #e8e8f0",
                  display: "flex", alignItems: "baseline", gap: "24px", flexWrap: "wrap",
                }}>
                  <div style={{
                    fontSize: t.size, fontWeight: t.weight,
                    fontFamily: t.font === "DM Sans" ? "'DM Sans', sans-serif" : "'Source Sans 3', sans-serif",
                    color: "#0f1d3d", letterSpacing: t.letterSpacing, lineHeight: t.lineHeight,
                    flex: "1 1 300px", minWidth: 0,
                  }}>
                    {t.name === "Display" ? "Digitalwerk" : t.name === "Body" ? "Ihre digitale Lösung aus Coburg." : t.name === "Small" ? "© 2026 Digitalwerk Coburg" : t.name === "Button" ? "ERSTGESPRÄCH VEREINBAREN" : `Heading ${t.name}`}
                  </div>
                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#e8620a", background: "rgba(232,98,10,0.08)", padding: "4px 10px", borderRadius: "4px" }}>{t.name}</span>
                    <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#4a4a5a" }}>{t.size}</span>
                    <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#4a4a5a" }}>w{t.weight}</span>
                    <span style={{ fontSize: "11px", color: "#b8b8c8" }}>{t.usage}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </>
      )}

      {/* ===== LOGO ===== */}
      {activeTab === "logo" && (
        <Section title="Logo & Markenzeichen" subtitle="Identität">
          <p style={{ fontSize: "15px", color: "#4a4a5a", maxWidth: "700px", lineHeight: 1.7, marginBottom: "32px" }}>
            Das Logo-Konzept kombiniert ein geometrisches „D" mit vertikalen Balken, die an Codezeilen und gleichzeitig an die Zinnen der Veste Coburg erinnern. Monochrom einsetzbar, skalierbar, wiedererkennbar.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {/* Logo auf Weiß */}
            <div style={{ background: "#fff", borderRadius: "16px", padding: "48px", border: "1px solid #e8e8f0", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <LogoMark size={52} variant="dark" />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#0f1d3d", letterSpacing: "-0.02em" }}>Digitalwerk</div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#e8620a", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "-2px" }}>Coburg</div>
                </div>
              </div>
              <span style={{ fontSize: "11px", color: "#b8b8c8", fontWeight: 600 }}>Auf hellem Hintergrund</span>
            </div>
            {/* Logo auf Dark */}
            <div style={{ background: "linear-gradient(135deg, #0a1128, #0f1d3d)", borderRadius: "16px", padding: "48px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <LogoMark size={52} variant="dark" />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>Digitalwerk</div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#e8620a", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "-2px" }}>Coburg</div>
                </div>
              </div>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>Auf dunklem Hintergrund</span>
            </div>
          </div>

          {/* Logomark only */}
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "#0f1d3d" }}>Bildmarke (Solo)</h3>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginBottom: "40px" }}>
            {[64, 48, 36, 24].map(s => (
              <div key={s} style={{ background: "#f0f0f5", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <LogoMark size={s} />
                <span style={{ fontSize: "11px", color: "#b8b8c8" }}>{s}px</span>
              </div>
            ))}
          </div>

          {/* Schutzzone */}
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "#0f1d3d" }}>Schutzzone & Don'ts</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { title: "Schutzzone", desc: "Mindestabstand um das Logo: Breite des \"D\" in der Bildmarke auf allen Seiten. Keine anderen Elemente in dieser Zone." },
              { title: "Mindestgröße", desc: "Kombination: min. 120px breit. Bildmarke allein: min. 24px. Darunter wird die Lesbarkeit beeinträchtigt." },
              { title: "Don'ts", desc: "Nie verzerren, nie rotieren, nie Farben ändern (nur freigegebene Varianten), nie auf unruhigem Hintergrund ohne Container." },
            ].map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "20px", border: "1px solid #e8e8f0" }}>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f1d3d", marginBottom: "8px" }}>{r.title}</div>
                <div style={{ fontSize: "13px", color: "#4a4a5a", lineHeight: 1.6 }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ===== COMPONENTS ===== */}
      {activeTab === "components" && (
        <Section title="UI-Bausteine" subtitle="Komponenten">
          {/* Buttons */}
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "#0f1d3d" }}>Buttons</h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "40px", alignItems: "center" }}>
            <button style={{ background: "#e8620a", color: "#fff", border: "none", padding: "14px 28px", borderRadius: "8px", fontSize: "15px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.01em", boxShadow: "0 2px 8px rgba(232,98,10,0.3)" }}>
              Erstgespräch vereinbaren
            </button>
            <button style={{ background: "#0f1d3d", color: "#fff", border: "none", padding: "14px 28px", borderRadius: "8px", fontSize: "15px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              Leistungen entdecken
            </button>
            <button style={{ background: "transparent", color: "#0f1d3d", border: "2px solid #0f1d3d", padding: "12px 28px", borderRadius: "8px", fontSize: "15px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              Mehr erfahren
            </button>
            <button style={{ background: "transparent", color: "#e8620a", border: "none", padding: "12px 4px", fontSize: "15px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", borderBottom: "2px solid #e8620a" }}>
              Alle Leistungen →
            </button>
          </div>

          {/* Service Card */}
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "#0f1d3d" }}>Service-Karte</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {[
              { icon: "🌐", title: "Webdesign & Websites", desc: "Professionelle Webpräsenzen für Handwerk, Gastronomie, Praxen und mehr." },
              { icon: "⚙️", title: "Individualsoftware", desc: "Maßgeschneiderte Web-Anwendungen für komplexe Anforderungen." },
              { icon: "🤖", title: "KI-Beratung", desc: "Künstliche Intelligenz praktisch in Ihrem Unternehmen einsetzen." },
              { icon: "📈", title: "SEO & Marketing", desc: "Gefunden werden, wo Ihre Kunden suchen." },
            ].map((s, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: "12px", padding: "28px",
                border: "1px solid #e8e8f0", cursor: "pointer",
                transition: "all 0.2s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#e8620a"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8e8f0"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{s.icon}</div>
                <div style={{ fontSize: "17px", fontWeight: 700, color: "#0f1d3d", marginBottom: "8px" }}>{s.title}</div>
                <div style={{ fontSize: "14px", color: "#4a4a5a", lineHeight: 1.6, marginBottom: "16px", fontFamily: "'Source Sans 3', sans-serif" }}>{s.desc}</div>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#e8620a" }}>Mehr erfahren →</span>
              </div>
            ))}
          </div>

          {/* Trust Bar */}
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "#0f1d3d" }}>Vertrauens-Leiste</h3>
          <div style={{
            background: "#f0f0f5", borderRadius: "12px", padding: "24px 32px",
            display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap", marginBottom: "40px",
          }}>
            {["10+ Jahre Erfahrung", "100% aus Coburg", "DSGVO-konform", "Persönlicher Kontakt"].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e8620a" }} />
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#0f1d3d" }}>{t}</span>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "#0f1d3d" }}>CTA-Banner</h3>
          <div style={{
            background: "linear-gradient(135deg, #0f1d3d 0%, #1e3a6e 100%)",
            borderRadius: "16px", padding: "48px 40px",
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", right: "-20px", top: "-20px", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(232,98,10,0.15) 0%, transparent 70%)" }} />
            <div style={{ position: "relative" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "8px", letterSpacing: "-0.02em" }}>Lassen Sie uns über Ihr Projekt sprechen.</h3>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", margin: 0, fontFamily: "'Source Sans 3', sans-serif" }}>Kostenloses Erstgespräch – unverbindlich und persönlich.</p>
            </div>
            <button style={{ background: "#e8620a", color: "#fff", border: "none", padding: "16px 32px", borderRadius: "8px", fontSize: "15px", fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(232,98,10,0.4)", flexShrink: 0 }}>
              Erstgespräch vereinbaren →
            </button>
          </div>
        </Section>
      )}

      {/* ===== MOODBOARD ===== */}
      {activeTab === "moodboard" && (
        <>
          <Section title="Visuelles Moodboard" subtitle="Designsprache">
            <p style={{ fontSize: "15px", color: "#4a4a5a", maxWidth: "700px", lineHeight: 1.7, marginBottom: "32px" }}>
              Die Designsprache von Digitalwerk Coburg: Seriös, aber nicht steif. Modern, aber nicht verspielt. Regional verwurzelt, aber nicht altmodisch. Denke an ein Architekturbüro, das auch gute Websites baut.
            </p>

            {/* Moodboard Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "120px", gap: "12px", marginBottom: "48px" }}>
              {/* Navy gradient block */}
              <div style={{ gridColumn: "1 / 3", gridRow: "1 / 3", background: "linear-gradient(135deg, #0a1128, #1e3a6e)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Klarheit &<br />Präzision</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>Aufgeräumte Layouts, großzügiger Whitespace</div>
              </div>
              {/* Orange accent */}
              <div style={{ background: "#e8620a", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "36px", fontWeight: 800, color: "#fff" }}>→</span>
              </div>
              {/* Texture block */}
              <div style={{
                background: `repeating-linear-gradient(45deg, #f0f0f5, #f0f0f5 10px, #e8e8f0 10px, #e8e8f0 20px)`,
                borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#0f1d3d", background: "#fff", padding: "6px 12px", borderRadius: "4px" }}>Subtile Texturen</span>
              </div>
              {/* Code snippet feel */}
              <div style={{ gridColumn: "3 / 5", background: "#1a1a2e", borderRadius: "12px", padding: "16px", fontFamily: "monospace", fontSize: "11px", color: "#4ade80", overflow: "hidden" }}>
                <div style={{ opacity: 0.5 }}>{"// Ihre digitale Lösung"}</div>
                <div><span style={{ color: "#e8620a" }}>const</span> website = <span style={{ color: "#60a5fa" }}>build</span>();</div>
                <div><span style={{ color: "#e8620a" }}>const</span> ki = <span style={{ color: "#60a5fa" }}>integrate</span>();</div>
                <div style={{ opacity: 0.5 }}>{"// solide gebaut. ✓"}</div>
              </div>
              {/* Typography showcase */}
              <div style={{ gridColumn: "1 / 2", background: "#fff", borderRadius: "12px", padding: "16px", border: "1px solid #e8e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "32px", fontWeight: 800, color: "#0f1d3d", letterSpacing: "-0.03em" }}>Aa</span>
              </div>
              {/* Regional block */}
              <div style={{ gridColumn: "2 / 4", background: "linear-gradient(135deg, #0f1d3d, #1e3a6e)", borderRadius: "12px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>🏰 Region & Tradition</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>Verwurzelt in Coburg · Oberfranken</div>
                </div>
              </div>
              {/* Warm accent */}
              <div style={{ background: "linear-gradient(135deg, #e8620a, #ff7a1a)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff", textAlign: "center", lineHeight: 1.4 }}>Wärme als<br />Akzent</span>
              </div>
            </div>

            {/* Design Principles */}
            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px", color: "#0f1d3d" }}>Designprinzipien</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
              {[
                { title: "Geradlinig", yes: "Klare Kanten, definierte Abstände, Grid-basierte Layouts", no: "Runde Blob-Formen, übermäßige Schatten, schwebende Elemente" },
                { title: "Ruhig", yes: "Großzügiger Whitespace, max. 2 Schriftgrößen pro Sektion, wenig Farbe", no: "Bunte Hintergründe, Animationen überall, zu viele visuelle Elemente" },
                { title: "Gewichtig", yes: "Fette Headlines, starke Kontraste, klare Hierarchie", no: "Dünne Schriften, blasse Farben, alles gleich groß/wichtig" },
                { title: "Warm", yes: "Orange-Akzente, persönliches Foto, nahbare Sprache", no: "Kaltes Blau überall, Stock-Fotos, Corporate-Sprech" },
              ].map((p, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "24px", border: "1px solid #e8e8f0" }}>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#0f1d3d", marginBottom: "12px" }}>{p.title}</div>
                  <div style={{ marginBottom: "8px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#0a8f5c", display: "block", marginBottom: "4px" }}>✓ SO</span>
                    <span style={{ fontSize: "13px", color: "#4a4a5a", lineHeight: 1.5 }}>{p.yes}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#dc2626", display: "block", marginBottom: "4px" }}>✗ NICHT SO</span>
                    <span style={{ fontSize: "13px", color: "#4a4a5a", lineHeight: 1.5 }}>{p.no}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Fotografie & Bildsprache" subtitle="Visuals" dark>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {[
                { title: "Persönliches Foto", desc: "Seriöses, sympathisches Portraitfoto. Business-Casual (Hemd, kein Anzug). Natürliches Licht, neutraler Hintergrund. Kein verschränkte-Arme-Pose. Leichtes, ehrliches Lächeln.", bg: "linear-gradient(135deg, #1e3a6e, #0f1d3d)" },
                { title: "Arbeitsumgebung", desc: "Aufgeräumter Arbeitsplatz, Monitor mit Code oder Design. Coburg im Hintergrund (Fenster). Warmes Licht, keine Neon-RGB-Gaming-Ästhetik.", bg: "linear-gradient(135deg, #0f1d3d, #0a1128)" },
                { title: "Abstrakte Grafiken", desc: "Geometrische Formen, dezente Liniennetze, subtile Raster-Muster. Farben aus dem Brand-Palette. Als Hintergrund-Elemente und Section-Trenner.", bg: "linear-gradient(135deg, #e8620a, #ff7a1a)" },
                { title: "Keine Stock-Fotos!", desc: "Kein Laptop-auf-Holztisch, keine lachenden Business-Menschen, keine generischen Büros. Lieber ein SVG-Icon als ein falsches Foto. Authentizität über Perfektion.", bg: "linear-gradient(135deg, #dc2626, #991b1b)" },
              ].map((b, i) => (
                <div key={i} style={{ background: b.bg, borderRadius: "12px", padding: "28px", minHeight: "180px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>{b.title}</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{b.desc}</div>
                </div>
              ))}
            </div>
          </Section>
        </>
      )}

      {/* ===== VOICE ===== */}
      {activeTab === "voice" && (
        <Section title="Tonalität & Sprache" subtitle="Brand Voice">
          <p style={{ fontSize: "15px", color: "#4a4a5a", maxWidth: "700px", lineHeight: 1.7, marginBottom: "32px" }}>
            Wie Digitalwerk Coburg spricht, ist genauso wichtig wie das Design. Die Zielgruppe sind keine Techies – es sind Geschäftsinhaber, die eine Lösung suchen, keinen Vortrag über Frameworks.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {[
              {
                title: "Verständlich statt technisch",
                good: "\"Ihre Website lädt in unter einer Sekunde – Ihre Besucher bleiben, statt abzuspringen.\"",
                bad: "\"Wir nutzen SSG mit Astro Islands Architecture und erreichen einen Lighthouse Performance Score von 100.\"",
              },
              {
                title: "Nutzen statt Features",
                good: "\"Mehr Anfragen über Ihre Website – durch bessere Sichtbarkeit bei Google.\"",
                bad: "\"On-Page SEO-Optimierung mit Schema.org Structured Data und technischem Audit.\"",
              },
              {
                title: "Persönlich statt Corporate",
                good: "\"Ich bin Pascal – und ich helfe Coburger Unternehmen, online sichtbar zu werden.\"",
                bad: "\"Digitalwerk Coburg ist Ihr kompetenter Partner für ganzheitliche digitale Transformationslösungen.\"",
              },
              {
                title: "Konkret statt vage",
                good: "\"Ihre neue Website in 4-6 Wochen. Ab 1.500 €. Inkl. Einweisung.\"",
                bad: "\"Wir bieten individuelle Lösungen in einem agilen Prozess mit nachhaltigen Ergebnissen.\"",
              },
            ].map((ex, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "24px", border: "1px solid #e8e8f0" }}>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#0f1d3d", marginBottom: "16px" }}>{ex.title}</div>
                <div style={{ background: "#f0fdf4", borderRadius: "8px", padding: "14px", marginBottom: "10px", borderLeft: "3px solid #0a8f5c" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#0a8f5c", marginBottom: "4px" }}>✓ SO</div>
                  <div style={{ fontSize: "14px", color: "#1a1a2e", lineHeight: 1.5, fontFamily: "'Source Sans 3', sans-serif", fontStyle: "italic" }}>{ex.good}</div>
                </div>
                <div style={{ background: "#fef2f2", borderRadius: "8px", padding: "14px", borderLeft: "3px solid #dc2626" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#dc2626", marginBottom: "4px" }}>✗ NICHT SO</div>
                  <div style={{ fontSize: "14px", color: "#1a1a2e", lineHeight: 1.5, fontFamily: "'Source Sans 3', sans-serif", fontStyle: "italic" }}>{ex.bad}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Wording Guide */}
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "#0f1d3d" }}>Wording-Leitfaden</h3>
          <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e8e8f0", overflow: "hidden" }}>
            {[
              { instead: "Digitale Transformation", use: "Digitale Lösung / Digitaler Auftritt" },
              { instead: "Responsive Design", use: "Optimiert für Smartphone und Desktop" },
              { instead: "KI / Artificial Intelligence", use: "Künstliche Intelligenz (beim ersten Mal ausschreiben)" },
              { instead: "Skalierbare Architektur", use: "Wächst mit Ihrem Unternehmen" },
              { instead: "Agile Entwicklung", use: "Regelmäßige Abstimmung & schnelle Anpassungen" },
              { instead: "Tech Stack", use: "Technologien, die ich einsetze" },
              { instead: "Conversion-Optimierung", use: "Mehr Anfragen über Ihre Website" },
              { instead: "UI/UX Design", use: "Benutzerfreundliches Design" },
            ].map((w, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", padding: "14px 24px",
                borderBottom: i < 7 ? "1px solid #f0f0f5" : "none",
                gap: "16px",
              }}>
                <span style={{ fontSize: "14px", color: "#dc2626", textDecoration: "line-through", flex: 1, fontFamily: "'Source Sans 3', sans-serif" }}>{w.instead}</span>
                <span style={{ fontSize: "16px", color: "#b8b8c8" }}>→</span>
                <span style={{ fontSize: "14px", color: "#0a8f5c", fontWeight: 600, flex: 1, fontFamily: "'Source Sans 3', sans-serif" }}>{w.use}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Footer */}
      <footer style={{ background: "#0a1128", padding: "32px", textAlign: "center" }}>
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
          Digitalwerk Coburg · Brand Kit v1.0 · {new Date().getFullYear()} · Erstellt für Pascal Krason
        </div>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Consent für optionale Analyse-Dienste
//
// Microsoft Clarity setzt Cookies und zeichnet Sitzungen auf. Der Dienst wird
// daher erst nach aktiver Zustimmung geladen – vorher findet keine Übertragung
// an Microsoft statt.
// ---------------------------------------------------------------------------

export const CONSENT_KEY = 'dw-consent-analytics';

const CLARITY_PROJECT_ID = 'wu9eyqoa50';

let loaded = false;

/** Lädt Clarity genau einmal. Nur nach erteilter Zustimmung aufrufen. */
export async function loadAnalytics(): Promise<void> {
  if (loaded) return;
  loaded = true;
  const { default: Clarity } = await import('@microsoft/clarity');
  Clarity.init(CLARITY_PROJECT_ID);
}

/** Lädt Clarity nur, wenn bereits zugestimmt wurde. */
export function loadAnalyticsIfConsented(): void {
  try {
    if (localStorage.getItem(CONSENT_KEY) === 'granted') void loadAnalytics();
  } catch {
    // localStorage nicht verfügbar (Private Mode o. ä.) – dann kein Tracking.
  }
}

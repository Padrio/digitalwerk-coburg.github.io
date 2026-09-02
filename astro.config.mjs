import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Echte Änderungsdaten für Content-Collections aus dem Frontmatter lesen.
 *
 * Vorher stand in der Sitemap für ALLE URLs der Build-Zeitpunkt
 * (`lastmod: new Date()`). Damit war das Feld wertlos: bei jedem Deploy
 * behaupteten alle 35 URLs, sie hätten sich geändert. Google lernt daraus,
 * das Feld zu ignorieren. Jetzt trägt nur ein lastmod, wer eins hat.
 */
function collectContentDates() {
  const dates = new Map();
  for (const [collection, urlPrefix] of [
    ['blog', '/blog/'],
    ['wissen', '/wissen/'],
  ]) {
    const dir = path.resolve('src/content', collection);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!/\.mdx?$/.test(file)) continue;
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const fm = raw.split('---')[1] ?? '';
      const updated = fm.match(/^updatedDate:\s*["']?([0-9-]{10})/m)?.[1];
      const published = fm.match(/^pubDate:\s*["']?([0-9-]{10})/m)?.[1];
      const stamp = updated ?? published;
      if (stamp) dates.set(urlPrefix + file.replace(/\.mdx?$/, ''), stamp);
    }
  }
  return dates;
}

const contentDates = collectContentDates();

export default defineConfig({
  site: 'https://digitalwerk-coburg.de',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },
  prefetch: {
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/impressum') && !page.includes('/datenschutz'),
      changefreq: 'weekly',
      serialize(item) {
        const pathname = new URL(item.url).pathname.replace(/\/$/, '');
        const stamp = contentDates.get(pathname);
        if (stamp) {
          item.lastmod = new Date(`${stamp}T00:00:00Z`).toISOString();
        } else {
          delete item.lastmod;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

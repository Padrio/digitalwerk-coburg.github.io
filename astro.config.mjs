import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://digitalwerk-coburg.de',
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/impressum') && !page.includes('/datenschutz'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://conversionworks.site',
  // Static pages in public/ (like /content-machine/) are not discovered automatically.
  integrations: [sitemap({ customPages: ['https://conversionworks.site/content-machine/'] })],
  vite: {
    plugins: [tailwindcss()],
  },
});

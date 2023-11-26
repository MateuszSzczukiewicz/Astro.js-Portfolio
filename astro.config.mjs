import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'http://mateuszszczukiewicz.verce.app',
  integrations: [svelte(), tailwind(), mdx(), sitemap(),],
  output: 'static',
  adapter: vercel(),
});

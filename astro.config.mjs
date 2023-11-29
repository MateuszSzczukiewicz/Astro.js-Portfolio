import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'http://mateuszszczukiewicz.vercel.app',
  integrations: [svelte(), tailwind(), mdx(), sitemap(),],
  dist: './dist',
  public: './public',
  buildOptions: {
    sitemap: true,
  },
  output: 'server',
  adapter: vercel(),
  renderers: [
    "@astrojs/renderer-svelte"
  ],
});

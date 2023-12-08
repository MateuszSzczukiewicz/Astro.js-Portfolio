import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://mateusz-szczukiewicz.vercel.app',
  integrations: [svelte(), tailwind(), mdx(), sitemap()],
  output: 'server',
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
  }),
});

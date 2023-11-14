import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), react()],
  // output: ‘server’,
  adapter: vercel()
});
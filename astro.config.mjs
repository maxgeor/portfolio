import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [mdx(), tailwind()],
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true,
  },
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
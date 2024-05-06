import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro.aacevski.com',
  integrations: [
    sitemap(),
    tailwind(),
    icon(),
    preact({
      compat: true,
    }),
    expressiveCode(),
    mdx(),
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
})


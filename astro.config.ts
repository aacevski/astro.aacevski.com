import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import expressiveCode, { ExpressiveCodeTheme } from 'astro-expressive-code'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import fs from 'node:fs'

const jsoncString = fs.readFileSync(
  new URL(`./public/mono-theme.jsonc`, import.meta.url),
  'utf-8',
)

const monoTheme = ExpressiveCodeTheme.fromJSONString(jsoncString)

// https://astro.build/config
export default defineConfig({
  site: 'https://aacevski.com',
  integrations: [
    sitemap(),
    tailwind(),
    icon(),
    expressiveCode({
      themes: [monoTheme],
      styleOverrides: {
        codeFontFamily: 'IBM Plex Mono',
        borderColor: '#282828',
        frames: {
          shadowColor: 'none',
        },
      },
    }),
    mdx(),
  ],
  output: 'hybrid',
  vite: {
    define: {
      'import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID': JSON.stringify(
        process.env.VERCEL_ANALYTICS_ID,
      ),
      'import.meta.env.PUBLIC_VERCEL_URL': JSON.stringify(
        process.env.VERCEL_URL,
      ),
    },
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})

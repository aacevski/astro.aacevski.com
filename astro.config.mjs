import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
const astroExpressiveCodeOptions = {
  themes: ['github-light', 'github-dark'],
  shiki: {
    langs: [],
  },
}

export default defineConfig({
  site: 'https://astro.aacevski.com',
  integrations: [
    sitemap(),
    tailwind(),
    icon(),
    preact({ compat: true }),
    expressiveCode(astroExpressiveCodeOptions),
    mdx(),
  ],
})

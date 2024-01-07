import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://acevski.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    icon(),
    preact({ compat: true }),
  ],
});

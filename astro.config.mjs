import { defineConfig } from 'astro/config';
import yaml from "@rollup/plugin-yaml";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://change.me',
  integrations: [mdx(), tailwind(), sitemap()],
  vite: {
    plugins: [yaml()]
  }
});

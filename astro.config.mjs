import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://change.me",
  integrations: [mdx(), tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: [
            { type: "text", value: " " },
            { type: "element", tagName: "i", properties: { class: "external-link" } },
          ],
        },
      ],
    ],
  },
  vite: {
    plugins: [yaml()],
  },
});

import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import robotsTxt from "astro-robots-txt";
import robotsConfig from "./robots-txt.config";

import webmanifest from "astro-webmanifest";
import webmanifestConfig from "./webmanifest.config";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://change.me",
  integrations: [
    expressiveCode(),
    mdx(),
    tailwind(),
    sitemap(),
    robotsTxt(robotsConfig),
    webmanifest(webmanifestConfig),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [
      [rehypeKatex, {}],
      [
        rehypeExternalLinks,
        {
          content: [
            {
              type: "text",
              value: " ",
            },
            {
              type: "element",
              tagName: "i",
              properties: {
                class: "external-link",
              },
            },
          ],
        },
      ],
    ],
  },
  vite: {
    plugins: [yaml()],
  },
});

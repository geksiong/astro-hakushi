import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import robotsTxt from "astro-robots-txt";
import robotsConfig from "./robots-txt.config";
import webmanifest from "astro-webmanifest";
import webmanifestConfig from "./webmanifest.config";
import remarkEmoji from "remark-emoji";
import expressiveCode from "astro-expressive-code";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import remarkDirective from "remark-directive";
import remarkCalloutDirectives from "@microflash/remark-callout-directives";

// https://astro.build/config
export default defineConfig({
  site: "https://change.me",
  integrations: [
    expressiveCode({
      plugins: [pluginCollapsibleSections()],
    }),
    mdx(),
    tailwind(),
    sitemap(),
    robotsTxt(robotsConfig),
    webmanifest(webmanifestConfig),
    alpinejs(),
  ],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      remarkMath,
      remarkDirective,
      remarkCalloutDirectives,
      [
        remarkEmoji,
        {
          accessible: true,
          emoticon: true,
        },
      ],
    ],
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
                class: "external-link-icon",
              },
            },
          ],
          properties: {
            className: ["external-link"],
          },
        },
      ],
    ],
  },
  vite: {
    plugins: [yaml()],
  },
});

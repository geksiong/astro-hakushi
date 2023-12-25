import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import siteConfig from "@site/config.yml";

export async function GET(context) {
  const posts = await getCollection("demo");
  return rss({
    title: siteConfig.site_title,
    description: siteConfig.site_description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/demo/${post.slug}/`,
    })),
  });
}

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://devkasun.me",
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: vercel(),
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: 268435456, // 16384 x 16384 pixels (adjust if needed)
      },
    },
  },
});

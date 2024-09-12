// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: vercel(),
  integrations: [tailwind()],
  vite: {
    ssr: {
      noExternal: ["path-to-regexp"],
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
  image: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
    service: passthroughImageService(),
  },
});

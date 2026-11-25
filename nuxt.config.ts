import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    // Set NUXT_CASE_PASSWORD in the environment; never commit the value.
    casePassword: "",
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Portfolio of Niels de Bont, digital product designer. UX research, UI design and design systems for Visma, Agrovision, SNS Bank and others.",
        },
        { name: "theme-color", content: "#1e1f1f" },
        { property: "og:site_name", content: "Niels de Bont" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "alternate icon", href: "/favicon.ico" },
      ],
    },
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-12-07",
});
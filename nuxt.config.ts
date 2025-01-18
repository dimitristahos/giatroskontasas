import { field, group } from "@nuxt/content/preview";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  content: {},
  appConfig: {
    parent: group({
      title: "UI",
      description: "UI configuration",
      icon: "i-ph-palette-fill",
      fields: {
        primary: field({
          type: "string",
          title: "Primary",
          description: "Primary color of your UI.",
          icon: "i-ph-palette",
          default: "sky",
          required: ["sky", "mint", "rose", "amber"],
        }),
      },
    }),
  },
});

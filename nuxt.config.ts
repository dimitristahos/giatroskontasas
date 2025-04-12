// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxtjs/turnstile", "@nuxt/icon", "@nuxt/eslint", "@nuxtjs/seo"],
  app: {
    head: {
      script: [{ src: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js", defer: true }],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css",
        },
      ],
    },
  },
  seo: {
    baseUrl: "https://giatroskontasas.gr",
    siteName: "Γιατρός Κοντά σας",
    description: "Βρείτε τον κατάλληλο επαγγελματία υγίας δίπλα σας",
  },
  ssr: false,
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || "http://localhost:3000",
      onlineFormUrl: process.env.ONLINE_FORM_URL || "http://localhost:3000",
    },
  },
  colorMode: {
    preference: "light",
  },
  icon: {
    clientBundle: {
      scan: true,
    },
  },
  content: {},
  eslint: {
    checker: true,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});

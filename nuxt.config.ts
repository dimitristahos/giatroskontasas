// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxtjs/turnstile"],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || "http://localhost:3000",
      onlineFormUrl: process.env.ONLINE_FORM_URL || "http://localhost:3000",
    },
  },
  colorMode: {
    preference: "light",
  },
  content: {},
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});

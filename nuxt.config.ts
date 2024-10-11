// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-tradingview",
    "nuxt-mongoose",
    "@unlok-co/nuxt-stripe",
    "nuxt-security",
  ],

  plugins: [
    { src: "@/plugins/aos", ssr: false, mode: "client" },
    "@/plugins/axios",
  ],

  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: "models",
    devtools: true,
  },

  compatibilityDate: "2024-08-08",
});
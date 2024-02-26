import { plugin } from "mongoose";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: "src/",

  components: true,

  css: [
    "primevue/resources/themes/aura-light-purple/theme.css",
    "primeicons/primeicons.css",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  modules: [
    // https://i18n.nuxtjs.org
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-primevue",
    "@nuxt/image",
  ],

  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
  
  i18n: {
    // experimental: {
    //   localeDetector: "./localeDetector.ts",
    // },
    vueI18n: "./i18n.config.ts",
    strategy: "prefix_except_default",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
      },
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français",
      },
    ],
    defaultLocale: "en",
  },


  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;',
        },
      },
    },
  },

  nitro: {
    plugins: ['~/server/index.ts']
  },

  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
    JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET,

  },
});

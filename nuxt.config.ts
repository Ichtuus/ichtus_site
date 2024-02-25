// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;',
        },
      },
    },
  },

  srcDir: "src/",

  modules: [
    // https://i18n.nuxtjs.org
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-primevue",
    "@nuxt/image",
  ],

  css: [
    "primevue/resources/themes/aura-light-purple/theme.css",
    "primeicons/primeicons.css",
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

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  css: ['assets/style/index.css'],
  i18n: {
    vueI18n: 'config/i18n.ts',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

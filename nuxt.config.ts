// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-auth-utils', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt/module', '@nuxtjs/i18n'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})

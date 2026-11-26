// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-auth-utils',
    '@pinia/nuxt', 
    '@nuxtjs/tailwindcss', 
    '@vueuse/nuxt/module', 
    '@nuxtjs/i18n'
  ],

  compatibilityDate: '2026-11-26',

  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  devtools: { enabled: true }
})

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

  devtools: { enabled: true },

  i18n: {
    strategy: 'no_prefix',
    locales: [
      {code: 'en', language: 'en-us', name: 'English', dir: 'ltr', file: 'en.json'},
      {code: 'fa', language: 'fa-IR', name: 'فارسی', dir: 'rtl', file: 'fa.json'},
    ],
    defaultLocale: 'en'
  },

  css: [
    '~/assets/css/background.css'
  ]
})

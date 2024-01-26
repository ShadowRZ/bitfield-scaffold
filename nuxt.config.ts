// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "nuxt-icon"
  ],
  colorMode: {
    classSuffix: ''
  },
  typescript: {
    strict: true,
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'vitesse-light',
        light: 'vitesse-light',
        dark: 'vitesse-black'
      }
    }
  }
})

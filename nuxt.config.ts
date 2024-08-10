// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
  ],

  colorMode: {
    classSuffix: '',
  },

  typescript: {
    strict: true,
  },

  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
    highlight: {
      theme: {
        default: 'vitesse-light',
        light: 'vitesse-light',
        dark: 'vitesse-black',
      },
    },
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },

  icon: {
    clientBundle: {
      icons: [
        'ph:check-bold',
        'ph:anchor-simple-duotone',
        'ph:calendar-duotone',
        'ph:folders-duotone',
        'ph:tag-duotone',
        'ph:clock-duotone',
        'ph:article-duotone',
        'ph:copy-duotone',
        'ph:monitor-duotone',
        'ph:sun-duotone',
        'ph:moon-duotone',
      ],
    },
  },

  compatibilityDate: '2024-08-10',
})

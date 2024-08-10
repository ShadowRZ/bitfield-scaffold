import type BitfieldAppConfig from '../types'

export default defineAppConfig({
  bitfield: {
    baseURL: 'https://shadowrz.github.io/bitfield-scaffold',
    title: '@ShadowRZ\'s Bitfield Scaffold',
    description: 'A Nuxt Layer used for my websites',
    generator: true,
    navigation: [
      {
        icon: 'ph:house-duotone',
        name: 'Home',
        to: '/',
      },
    ],
    readingTime: true,
    wordCount: true,
  } as BitfieldAppConfig,
})

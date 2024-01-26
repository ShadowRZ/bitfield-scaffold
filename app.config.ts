import type BitfieldAppConfig from "./types"

export default defineAppConfig({
  bitfield: {
    baseURL: 'https://example.com/',
    title: 'Example Title',
    description: 'Example description',
    generator: true,
  } as BitfieldAppConfig
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    bitfield?: BitfieldAppConfig
  }

  interface AppConfig {
    bitfield?: BitfieldAppConfig
  }
}

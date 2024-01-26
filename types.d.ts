type BitfieldAppConfig = {
  /**
   * The Base URL of the site.
   */
  baseURL: string
  /**
   * The site title.
   */
  title: string
  /**
   * The global description if a local one is not provided.
   */
  description: string
  /**
   * Copyright to show at the footer
   *
   * If a function, accepts only a {@link Date} argument and returns a copyright string.
   * @default `© ${title}`
   * @example (date) => `© 2024-${date.getFullYear()} You`
   */
  copyright?: string | ((date: Date) => string)
  /**
   * Whether to show the Built with Nuxt string.
   */
  generator?: boolean
  navigation: BitfieldNavigation[]
}

type BitfieldNavigation = {
  /**
   * Navigation item name.
   */
  name: string
  /**
   * Where to navigate to.
   */
  to: string
  /**
   * What icon to use, see https://icones.js.org
   */
  icon: string
}

export default BitfieldAppConfig

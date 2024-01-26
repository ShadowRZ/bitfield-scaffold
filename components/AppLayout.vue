<script setup lang="ts">
import "@unocss/reset/tailwind-compat.css"
import "@fontsource-variable/jost"
import "@fontsource-variable/jetbrains-mono"

import { useWindowScroll } from "@vueuse/core"

const { y } = useWindowScroll()
const showTop = computed(() => y.value >= 100)

const url = useRequestURL()
const { path } = useRoute()
const { bitfield } = useAppConfig()
const { page } = useContent()

if (path === '/') {
  useHead({
    title: () => bitfield.title
  })
} else {
  useHead({
    titleTemplate: (subtitle) => {
      return subtitle
        ? `${subtitle} || ${bitfield.title}`
        : `${bitfield.title}`;
    },
  })
}

useSeoMeta({
  ogUrl: () => {
    if (bitfield.baseURL) return concatURLParts(bitfield.baseURL, path)
    else return url.toString()
  }
})

useContentHead(page)
</script>

<template>
  <Head>
    <Meta
      name="og:title"
      :content="page?.title ? page?.title : bitfield.title"
    />
    <Meta
      name="og:description"
      :content="page?.description ? page?.description : bitfield.description"
    />
    <Meta
      name="twitter:title"
      :content="page?.title ? page?.title : bitfield.title"
    />
    <Meta
      name="twitter:description"
      :content="page?.description ? page?.description : bitfield.description"
    />
  </Head>
  <NuxtLoadingIndicator />
  <div
    flex="~ col"
    min-h="dvh"
    px="4 sm:8 md:16"
    font="sans"
  >
    <AppHeader />
    <div grow>
      <slot />
    </div>
    <AppFooter />
  </div>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-1 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-1 opacity-0"
  >
    <ScrollToTop v-if="showTop" />
  </Transition>
</template>

<style>
body {
  --at-apply: bg-pink-50 dark:bg-pink-950 text-pink-800 dark:text-pink-200;
}
</style>

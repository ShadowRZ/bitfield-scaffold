<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'
import '@fontsource-variable/jost'
import '@fontsource-variable/jetbrains-mono'

const url = useRequestURL()
const { path } = useRoute()
const { bitfield } = useAppConfig()
const { page } = useContent()

if (path === '/') {
  useHead({
    title: () => bitfield.title,
  })
}
else {
  useHead({
    titleTemplate: (subtitle) => {
      return subtitle
        ? `${subtitle} || ${bitfield.title}`
        : `${bitfield.title}`
    },
  })
}

useSeoMeta({
  ogUrl: () => {
    if (bitfield.baseURL) return concatURLParts(bitfield.baseURL, path)
    else return url.toString()
  },
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
  <NuxtLoadingIndicator
    color="false"
    :height="4"
    bg="pink-800 dark:pink-200"
  />
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
</template>

<style>
body {
  --at-apply: bg-pink-50 dark:bg-pink-950 text-pink-800 dark:text-pink-200;
}
</style>

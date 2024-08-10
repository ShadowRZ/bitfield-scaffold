<script setup lang="ts">
const route = useRoute()
const title = () => `[No Document on ${route.path}]`

useHead({
  title: title(),
})

useSeoMeta({
  ogTitle: title(),
  twitterTitle: title(),
})
</script>

<template>
  <div
    text-base
    max-w-full
    xl="text-xl"
    py="16"
  >
    <h1
      font="bold"
      text="4xl xl:6xl"
      flex="~ col"
      justify="center"
    >
      <div>
        <Icon name="ph:cursor-text-duotone" />
        <Icon name="ph:seal-warning-duotone" />
      </div>
      <span mx="2 xl:4">Document not found</span>
    </h1>
    <section
      mt="4"
      mx="2 xl:4"
    >
      If you see this, it means the content that should render <code font="mono">{{ route.path }}</code>
      was not found and need to be provided.
    </section>
  </div>
</template>

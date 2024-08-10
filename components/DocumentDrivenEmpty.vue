<script setup lang="ts">
const { page, layout } = useContent()
const title = () => `[No Content]`

const shown = computed(() => layout.value !== 'listing')

if (shown.value) {
  useHead({
    title: title(),
  })

  useSeoMeta({
    ogTitle: title(),
    twitterTitle: title(),
  })
}
</script>

<template>
  <div
    v-if="shown"
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
      </div>
      <span mx="2 xl:4">No content......</span>
    </h1>
    <section
      mt="4"
      mx="2 xl:4"
    >
      Now write something in <code>{{ page._file }}</code> and it will render here!
    </section>
  </div>
</template>

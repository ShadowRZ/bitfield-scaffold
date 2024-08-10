<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content'

const { page } = defineProps<{
  page: ParsedContent
}>()
</script>

<template>
  <div
    text-lg
    xl="text-2xl"
    pt="16"
  >
    <main
      grow
      prose
      max-w-full
    >
      <section grow>
        <slot />
      </section>
    </main>
    <PostMetas :page="page" />
  </div>
</template>

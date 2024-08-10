<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <ShortPost
    v-if="page.short"
    :page="page"
  >
    <slot />
  </ShortPost>
  <LongPost
    v-else
    :page="page"
  >
    <slot />
  </LongPost>
</template>

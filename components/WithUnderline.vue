<script setup lang="ts">
const props = defineProps<{
  is: Component | string
}>()
</script>

<template>
  <component
    :is="props.is"
    duration="200"
    style="background-position-y: 85%; transition-property: background-position;"
    from="50% pink-400 dark:pink-700"
    to="50% pink-200 dark:pink-900"
    bg="gradient-to-r no-repeat underline-start hover:underline-end"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

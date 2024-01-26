<template>
  <h5 :id="id">
    <a
      v-if="id && generate"
      class="no-underline group"
      flex="~ row"
      items="center"
      :href="`#${id}`"
    >
      <slot />
      <Icon
        name="ph:anchor-simple-duotone"
        ml="2"
        transition
        duration="200"
        class="opacity-0 group-hover:opacity-80"
      />
    </a>
    <slot v-else />
  </h5>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h5)
</script>

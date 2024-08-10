<template>
  <div
    relative
    bg="gray-200 dark:gray-800"
    rounded="lg"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <slot />
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ProseCodeCopyButton
        v-if="hovered && $props.code"
        absolute
        end="2"
        bottom="2"
        :code="$props.code"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
})

const hovered = ref(false)
</script>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>

<template>
  <button
    v-if="isSupported"
    type="button"
    title="Copy to Clipboard"
    rounded="lg"
    flex
    w="8"
    h="8"
    transition
    duration="200"
    shadow="md"
    items="center"
    justify="center"
    border="~ slate-300 1"
    ring="pink-500 hover:1 focus:2"
    bg="pink-50 hover:pink-200 dark:pink-900 dark:hover:gray-900"
    un-text="hover:pink-500"
    @click="copy"
  >
    <span
      block
      relative
      flex="~ row"
      items="center"
      justify="center"
    >
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <Icon
          v-if="copied"
          absolute
          name="ph:check-bold"
          size="1.25rem"
        />
        <Icon
          v-else
          absolute
          name="ph:copy-duotone"
          size="1.25rem"
        />
      </Transition>
    </span>
    <span sr-only>Copy to Clipboard</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  code?: string
}>()

const { copy: copyToClipboard, copied, isSupported } = useClipboard()

const copy = () => {
  if (props.code) copyToClipboard(props.code)
}
</script>

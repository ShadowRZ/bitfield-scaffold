<script setup lang="ts">
const { bitfield } = useAppConfig()

const copyright = computed(() => {
  if (typeof bitfield?.copyright === 'string') {
    return bitfield?.copyright
  }
  else if (typeof bitfield.copyright === 'function') {
    return bitfield.copyright(new Date())
  }
  else {
    return `© ${bitfield.title ?? '[No Titie]'}`
  }
})
</script>

<template>
  <footer
    flex="~ row"
    gap="8"
    justify="start"
    py="4"
  >
    <div flex="~ col">
      <span>{{ copyright }}</span>
      <GeneratorReference v-if="bitfield.generator" />
    </div>
  </footer>
</template>

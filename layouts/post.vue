<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <div
    text-base
    xl="text-xl"
    pt="32"
  >
    <PostMetas :page="page" />
    <main
      grow
      prose
      max-w-full
    >
      <h1 font="bold">
        {{ page.title }}
      </h1>
      <div flex="~ col lg:row-reverse">
        <TOCContainer />
        <section grow>
          <slot />
        </section>
      </div>
    </main>
  </div>
</template>

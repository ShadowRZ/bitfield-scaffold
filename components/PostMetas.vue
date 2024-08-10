<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

const { page } = defineProps<{
  page: ParsedContent
}>()

const { bitfield } = useAppConfig()
</script>

<template>
  <div
    flex="~ row wrap"
    gap="2"
  >
    <div
      inline-flex
      gap="1"
      items="center"
    >
      <Icon name="ph:calendar-duotone" />
      <span sr-only>Publish Date: </span>
      <time
        :datetime="page.date"
        font="bold"
      >{{
        page.date ? new Date(page.date).toDateString() : '(Working)'
      }}</time>
    </div>
    <template v-if="page.categories">
      <div
        v-for="category in page.categories"
        :key="category"
        inline-flex
        gap="1"
        items="center"
      >
        <Icon name="ph:folders-duotone" />
        <span sr-only>Category: </span>
        <span
          font="bold"
          flex="~ row"
          gap="1"
        >{{ category }}</span>
      </div>
    </template>
    <template v-if="page.tags">
      <div
        v-for="tag in page.tags"
        :key="tag"
        inline-flex
        gap="1"
        items="center"
      >
        <Icon name="ph:tag-duotone" />
        <span sr-only>Tag: </span>
        <span
          font="bold"
          flex="~ row"
          gap="1"
        >{{ tag }}</span>
      </div>
    </template>
    <div
      v-if="bitfield.readingTime"
      inline-flex
      gap="1"
      items="center"
    >
      <Icon name="ph:clock-duotone" />
      <span sr-only>Reading Time: </span>
      <span
        font="bold"
        flex="~ row"
        gap="1"
      >{{ page.readingTime.text }}</span>
    </div>
    <div
      v-if="bitfield.wordCount"
      inline-flex
      gap="1"
      items="center"
    >
      <Icon name="ph:article-duotone" />
      <span sr-only>Word Count: </span>
      <span
        font="bold"
        flex="~ row"
        gap="1"
      >{{ page.readingTime.words }} words</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { page: thisPage } = useContent()
</script>

<template>
  <div mb="24">
    <header
      py="16"
      xl="py-32"
    >
      <section
        flex="~ col"
        gap="2"
      >
        <h1
          font="bold"
          text="4xl xl:7xl"
        >
          {{ thisPage.title }}
        </h1>
        <p
          text-xl
          xl="text-2xl"
        >
          {{ thisPage.description }}
        </p>
      </section>
      <section
        prose
        max-w-full
        text-base
        xl="text-xl"
      >
        <slot />
      </section>
    </header>
    <main
      flex="~ col"
      text-base=""
      xl="text-xl"
      gap="16"
    >
      <ContentList
        v-slot="{ list }"
        :query="thisPage.query"
      >
        <section
          v-for="page in list"
          :key="page._path"
          flex="~ col"
          gap="1"
        >
          <ShortPost
            v-if="page.short"
            :page="page"
          >
            <ContentRenderer :value="page" />
          </ShortPost>
          <template v-else>
            <PostMetas
              v-if="thisPage.metas"
              :page="page"
            />
            <NuxtLink
              max-w="fit"
              :href="page._path"
            >
              <WithUnderline
                is="h2"
                transition="all"
                duration="200"
                font="bold"
                text="3xl xl:5xl"
                class="bg-underline-large inline"
              >
                {{ page.title }}
              </WithUnderline>
            </NuxtLink>
            <p mt="2">
              {{ page.description }}
            </p>
          </template>
        </section>
      </ContentList>
    </main>
  </div>
</template>

<script setup lang="ts">
const { bitfield } = useAppConfig()
</script>

<template>
  <div
    flex="~ row"
    gap="8"
    justify="end"
    items="center"
    py="4"
  >
    <nav v-if="bitfield.navigation && bitfield.navigation?.length > 0">
      <ul
        flex="~ row"
        gap="2"
        items="center"
      >
        <li
          v-for="item in bitfield.navigation"
          :key="item.to"
        >
          <NuxtLink
            class="group"
            items="center"
            flex="~ row"
            gap="1"
            :to="item.to"
            :title="item.name"
          >
            <div
              flex
              w="8"
              h="8"
              items="center"
              justify="center"
              transition
              duration="200"
              rounded="full"
              ring="pink-500 group-focus:2"
              bg="gray-200 hover:pink-200 dark:pink-900 dark:hover:gray-900"
              un-text="hover:pink-500"
            >
              <Icon
                :name="item.icon"
                size="1.25rem"
              />
            </div>
            <span
              hover="underline"
              sr-only
            >{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <ThemeToggle />
  </div>
</template>

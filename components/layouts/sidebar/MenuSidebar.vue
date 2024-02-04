<template>
  <a-menu
    theme="light"
    class="bg-transparent"
    mode="inline"
    :default-selected-keys="[keyMenu]"
  >
    <a-menu-item
      v-for="menu in menus"
      :key="menu.id"
      class="after:right-[calc(100%_-_4px)] after:border-r-4"
    >
      <NuxtLink
        :to="menu.link"
        custom-prop="value"
        class="flex items-center gap-2"
      >
        <a-icon class="text-xl flex" :type="menu.icon" />
        <span class="flex">{{ menu.name }}</span>
      </NuxtLink>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      menus: 'GET_MENU',
      keyMenu: 'KEY_MENU',
    }),
  },
}
</script>

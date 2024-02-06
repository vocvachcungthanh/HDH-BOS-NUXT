<template>
  <a-menu
    theme="light"
    mode="inline"
    :default-selected-keys="[keyMenu]"
    class="bg-transparent"
    @click="handleSelected"
  >
    <a-menu-item
      v-for="menu in menus"
      :key="menu.id"
      class="justify-center items-center after:right-[calc(100%_-_4px)] after:border-r-4"
      :style="styleAMenuItem"
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
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    styleAMenuItem() {
      return this.isToggleMenu ? 'padding: 0 0!important;display: flex' : ''
    },

    ...mapGetters({
      menus: 'GET_MENU',
      keyMenu: 'KEY_MENU',
    }),

    ...mapState({
      isToggleMenu: (state) => state.IS_TOGGLE_MENU,
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
  },

  methods: {
    async handleSelected() {
      await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
    },
  },
}
</script>

<style lang="scss">
.ant-menu-item {
  &-selected {
    &::after {
      opacity: 1 !important;
      transform: scaleY(1) !important;
    }
  }
}
</style>

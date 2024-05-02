<template>
  <MenuBarPage />
</template>

<script>
import { MenuBarPage } from '~/components/pages/MenuBarPage'

export default {
  components: {
    MenuBarPage,
  },

  data() {
    return {
      title: 'Nhân sự',
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  created() {
    this.$store.dispatch('ACT_TITLE_HEADER', this.title)
  },

  async beforeCreate() {
    this.$store.commit('SET_TOGGLE_MENU', false)
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
  },
}
</script>

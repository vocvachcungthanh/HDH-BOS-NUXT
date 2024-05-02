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
    const sub = this.$route.params.sub

    switch (sub) {
      case 'business':
        this.title = 'Kinh doanh'
        break
      case 'financials':
        this.title = 'Tài chính'
        break
      case 'supply':
        this.title = 'Cung ứng'

        break
      case 'marketing':
        this.title = 'marketing'

        break
      case 'applications':
        this.title = 'Các ứng dụng'

        break
      case 'settings':
        this.title = 'Cài đặt'

        break
    }
    this.$store.dispatch('ACT_TITLE_HEADER', this.title)
  },

  async beforeCreate() {
    this.$store.commit('SET_TOGGLE_MENU', false)
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
  },
}
</script>

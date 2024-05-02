<template>
  <section class="page__dashboard">
    <DashboardPgs />
  </section>
</template>

<script>
import { mapState } from 'vuex'

import DashboardPgs from '~/components/pages/Dashboard'

export default {
  name: 'IndexPage',

  components: {
    DashboardPgs,
  },

  data() {
    return {
      title: 'BOS - Nền tảng QUẢN TRỊ TỔNG THỂ doanh nghiệp',
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  computed: {
    ...mapState({
      isReloadToken: (state) => state.reloadToken,
    }),
  },

  created() {
    this.$store.dispatch('ACT_TITLE_HEADER', this.title)

    if (this.isReloadToken) {
      this.$store.commit('SET_RELOAD_TOEKN', false)
      this.$router.back()
    }
  },

  beforeCreate() {
    this.$store.commit('SET_TOGGLE_MENU', true)
  },
}
</script>

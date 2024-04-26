<template>
  <section class="page__dashboard">
    <DashboardPgs />
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { MwAuth } from '@/libraries/auth/index'
import DashboardPgs from '~/components/pages/Dashboard'

const auth = new MwAuth()
export default {
  name: 'IndexPage',

  components: {
    DashboardPgs,
  },

  data() {
    return {
      title: auth.getCompanyInfo()?.name,
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

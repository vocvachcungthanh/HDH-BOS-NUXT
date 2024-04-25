<template>
  <section class="page__dashboard">
    <h1>Page dashboard</h1>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { MwAuth } from '@/libraries/auth/index'

const auth = new MwAuth()
export default {
  name: 'IndexPage',

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
}
</script>

<template>
  <section class="page__dashboard">
    <h1>Page dashboard</h1>
  </section>
</template>

<script>
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

  beforeCreate() {
    this.$store.dispatch('ACT_EXPIRES_IN')
  },

  created() {
    this.$store.dispatch('ACT_TITLE_HEADER', this.title)
  },
}
</script>

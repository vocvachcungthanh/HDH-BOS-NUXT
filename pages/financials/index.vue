<template>
  <section class="page__financials">
    <h1>Trang tài chính</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Tài chính',
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

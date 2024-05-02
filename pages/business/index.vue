<template>
  <section class="page_business">
    <h1>Trang kinh doanh</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Kinh doanh',
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

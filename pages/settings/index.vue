<template>
  <section class="page__applications">
    <h1>Trang cài đặt</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Cài đặt',
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

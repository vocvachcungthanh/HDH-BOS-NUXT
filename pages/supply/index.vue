<template>
  <section class="page__supply">
    <h1>Trang cung ứng</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Cung ứng',
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

<template>
  <section class="page__financials">
    <h1>Trang tài chính</h1>
  </section>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
  },
}
</script>

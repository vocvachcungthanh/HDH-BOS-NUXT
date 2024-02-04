<template>
  <section class="page__marketing">
    <h1>Trang marketing</h1>
  </section>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
  },
}
</script>

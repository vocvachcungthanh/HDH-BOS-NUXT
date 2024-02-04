<template>
  <section class="page__applications">
    <h1>Trang cài đặt</h1>
  </section>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
  },
}
</script>

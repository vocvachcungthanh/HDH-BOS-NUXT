<template>
  <section class="page__supply">
    <h1>Trang cung ứng</h1>
  </section>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
  },
}
</script>

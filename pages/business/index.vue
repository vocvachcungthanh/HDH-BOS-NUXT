<template>
  <section class="page_business">
    <h1>Trang kinh doanh</h1>
  </section>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
  },
}
</script>

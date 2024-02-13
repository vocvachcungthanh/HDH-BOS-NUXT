<template>
  <section class="page__marketing">
    <h1>Trang marketing</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Marketing',
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
}
</script>

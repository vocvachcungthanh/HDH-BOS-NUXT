<template>
  <section class="page__dashboard">
    <h1>Page dashboard</h1>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      title: 'HỆ ĐIỀU HÀNH QUẢN TRỊ BOS',
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

<template>
  <section class="page__resources">
    <NuxtChild />
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'NHÂN SỰ',
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

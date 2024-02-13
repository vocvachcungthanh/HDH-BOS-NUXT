<template>
  <h1>Danh sách nhân sự</h1>
</template>

<script>
export default {
  data() {
    return {
      title: 'Danh sách nhân sự',
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

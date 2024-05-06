<template>
  <div class="page__postion mt-3">
    <TablePostionPgs />
  </div>
</template>

<script>
import TablePostionPgs from '~/components/pages/HumanResources/Postions'

export default {
  components: {
    TablePostionPgs,
  },

  data() {
    return {
      title: 'Nhân sự - Danh sách vị trí',
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

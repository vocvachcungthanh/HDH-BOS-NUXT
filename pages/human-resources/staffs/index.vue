<template>
  <div class="page__postion mt-3">
    <TableStaffPgs />
  </div>
</template>

<script>
import TableStaffPgs from '~/components/pages/HumanResources/Staffs'

export default {
  components: {
    TableStaffPgs,
  },

  data() {
    return {
      title: 'Nhân viên',
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

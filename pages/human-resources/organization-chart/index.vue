<template>
  <div>
    <OrgChart />
  </div>
</template>

<script>
import OrgChart from '~/components/pages/HumanResources/OrgChart'

export default {
  components: {
    OrgChart,
  },

  data() {
    return {
      title: 'Nhân sự - Sơ đồ tổ chức',
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

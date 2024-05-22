<template>
  <ul v-if="staffs.length > 0" class="org__chart max-w-[239px] w-full">
    <li v-for="item in staffs" :key="item.id">
      <OrgChartItem :data-item="item" />
    </li>
  </ul>
</template>

<script>
import OrgChartItem from './OrgChartItemPgs.vue'
export default {
  components: {
    OrgChartItem,
  },

  props: {
    staffs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

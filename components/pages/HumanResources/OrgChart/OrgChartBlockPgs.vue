<template>
  <ul
    v-if="blocks.length > 0"
    class="org__chart max-w-[279px] w-full chart__note--ul"
  >
    <li v-for="item in blocks" :key="item.id">
      <OrgChartItem :data-item="item" />

      <OrgChartStaffPgs :staffs="item.staff" />
    </li>
  </ul>
</template>

<script>
import OrgChartStaffPgs from './OrgChartStaffPgs.vue'
import OrgChartItem from './OrgChartItemPgs.vue'

export default {
  components: {
    OrgChartStaffPgs,
    OrgChartItem,
  },

  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
.chart__note {
  &--right {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-bottom: 2px solid #7babe6;
      border-right: 2px solid #7babe6;
      border-bottom-right-radius: 10px;
      right: -20px;
      top: 0;
    }
  }
}
</style>

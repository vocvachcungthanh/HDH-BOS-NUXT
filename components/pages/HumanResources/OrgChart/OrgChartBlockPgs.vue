<template>
  <ul
    v-if="blocks.length > 0"
    class="org__chart max-w-[279px] w-full chart__note--ul"
  >
    <li
      v-for="item in blocks"
      :key="item.id"
      :class="`${item.staff.length > 0 ? 'block' : 'block__line'}`"
    >
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
.block {
  a {
    border: 1px solid #c9ddff;

    &::before {
      content: '';
      position: absolute;
      height: 22px;
      width: 22px;
      border-bottom: 2px solid #c9ddff;
      border-right: 2px solid #c9ddff;
      right: -22px;
      border-bottom-right-radius: 10px;
    }
  }

  &:last-child {
    a {
      &::before {
        display: none;
      }
    }
  }

  &__line {
    a {
      border-top: 1px solid #c9ddff;
      border-right: 1px solid #c9ddff;
      border-left: 1px solid #c9ddff;

      &::before {
        content: '';
        position: absolute;
        height: 22px;
        width: 22px;
        border-bottom: 2px solid #c9ddff;
        border-right: 2px solid #c9ddff;
        right: -22px;
        border-bottom-right-radius: 10px;
      }
    }
  }
}
</style>

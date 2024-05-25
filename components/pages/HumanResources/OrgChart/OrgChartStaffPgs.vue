<template>
  <ul
    v-if="staffs.length > 0"
    class="org__chart staff__ul max-w-[239px] w-full relative"
  >
    <li
      v-for="item in staffs"
      :key="item.id"
      :class="staffs.length === 1 ? 'staff-one' : 'staff'"
    >
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

<style scoped lang="scss">
.staff {
  a {
    border-top: 1px solid #c9ddff;
    border-left: 1px solid #c9ddff;
    border-right: 1px solid #c9ddff;

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

  &:first-child {
    a {
      border-top: 0;
    }
  }

  &:last-child {
    a {
      &::before {
        display: none;
      }
    }
  }

  &-one {
    border-left: 1px solid #c9ddff;
    border-right: 1px solid #c9ddff;
    border-top: 0px;
  }

  &__ul {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      height: calc(100% - 20px);
      width: 20px;
      border-right: 2px solid #c9ddff;
      border-bottom: 2px solid #c9ddff;
      right: -21px;
      border-bottom-right-radius: 10px;
    }
  }
}
</style>

<template>
  <div class="grid grid-cols-8 gap-5">
    <MenuBarItemCmd v-for="item in menus" :key="item.id" :data-item="item" />
  </div>
</template>

<script>
import MenuBarItemCmd from './MenuBarItemCmd.vue'

export default {
  components: {
    MenuBarItemCmd,
  },

  props: {
    cloums: {
      type: Number,
      default: 6,
    },

    distance: {
      type: Number,
      default: 5,
    },

    menus: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    getClass() {
      return `grid grid-cols-${this.cloums} gap-${this.distance}`
    },
  },
}
</script>

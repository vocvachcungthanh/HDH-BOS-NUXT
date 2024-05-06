<template>
  <SettingSlicerCmn v-if="Object.keys(slicers).length > 0">
    <SettingSlicerItemCmn
      v-for="(item, index) in slicers"
      :key="index"
      :data-item="{
        ...item,
        indexKey: index,
      }"
      @reload="handleReload"
    />
  </SettingSlicerCmn>
</template>

<script>
import {
  SettingSlicerCmn,
  SettingSlicerItemCmn,
} from '~/components/common/Slicer'

export default {
  name: 'SettingSliceCard',

  components: {
    SettingSlicerCmn,
    SettingSlicerItemCmn,
  },

  props: {
    slicers: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    handleReload() {
      this.$emit('reload')
    },
  },
}
</script>

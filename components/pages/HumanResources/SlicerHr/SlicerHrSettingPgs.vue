<template>
  <SettingSlicerCmn>
    <SettingSlicerItemCmn
      v-for="(item, index) in slicers"
      :key="index"
      :data-item="{
        ...item,
        indexKey: index,
      }"
      @onSlicerSetting="handleChange"
    />
  </SettingSlicerCmn>
</template>

<script>
import {
  SettingSlicerCmn,
  SettingSlicerItemCmn,
} from '~/components/common/Slicer'
import { MwHandle } from '~/libraries/helpers'

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
    async handleChange(value) {
      const path = this.$route.path

      switch (path) {
        case '/human-resources/units':
          await this.$store
            .dispatch('ACT_SETTING_SLICER_UNITS', value)
            .then((e) => {
              MwHandle.handleSuccess({
                context: e,
              })

              this.$emit('reload')
            })
            .catch((error) =>
              MwHandle.handleError({
                context: error,
              })
            )
          break

        default:
          break
      }
    },
  },
}
</script>

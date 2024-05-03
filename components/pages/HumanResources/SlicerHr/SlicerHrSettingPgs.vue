<template>
  <SettingSlicerCmn>
    <SettingSlicerItemCmn
      v-for="(item, index) in slicerSetting"
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
import { mapGetters } from 'vuex'

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

  data() {
    return {
      slicerSetting: {},
    }
  },

  computed: {
    ...mapGetters({
      slicerSettingUnit: 'GET_SLICER_UNITS',
    }),
  },

  created() {
    const path = this.$route.path

    switch (path) {
      case '/human-resources/units':
        this.slicerSetting = this.slicerSettingUnit
        break

      default:
        break
    }
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

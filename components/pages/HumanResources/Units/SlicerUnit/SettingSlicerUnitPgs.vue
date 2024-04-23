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
      slicerCode: {
        title: 'Mã phòng ban',
        countColumn: 2,
        status: 1,
      },
    }
  },

  computed: {
    ...mapGetters({
      slicerSetting: 'GET_SLICER_UNITS',
    }),
  },

  methods: {
    async handleChange(value) {
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
    },
  },
}
</script>

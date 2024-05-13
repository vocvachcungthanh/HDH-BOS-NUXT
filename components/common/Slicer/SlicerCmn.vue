<template>
  <div class="slicer_cmm grid gap-3">
    <SettingSlicerCmn>
      <SettingSlicerItemCmn
        v-for="item in slicers"
        :key="item.id"
        :data-item="item"
      />
    </SettingSlicerCmn>
    <div class="grid md:grid-cols-5 gap-4">
      <SlicerItemCmn
        v-for="item in slicer"
        :key="item.id"
        :data-item="item"
        @on-value="handleValue"
      />
    </div>
  </div>
</template>

<script>
import SlicerItemCmn from './SlicerItemCmn'
import SettingSlicerCmn from './SettingSlicerCmn'
import SettingSlicerItemCmn from './SettingSlicerItemCmn'

export default {
  name: 'SlicerCommon',

  components: {
    SettingSlicerCmn,
    SlicerItemCmn,
    SettingSlicerItemCmn,
  },

  props: {
    slicer: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      slicers: [],
      parmas: {},
    }
  },

  watch: {
    slicer(newValue) {
      this.slicers = newValue
    },
  },

  methods: {
    handleValue(e) {
      if (e) {
        Object.keys(e).forEach((item) => {
          if (item === 'slicerName' || item === 'slicerCode') {
            this.parmas.id = e[item]
          }
          if (item === 'slicerBlock') {
            this.parmas.block_id = e[item]
          }
          if (item === 'slicerParent') {
            this.parmas.parent_id = e[item]
          }
          if (item === 'slicerField') {
            this.parmas.field_id = e[item]
          }
        })
        this.$nextTick(async () => {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('ACT_SEARCH_SLIDER_UNIT', {
            ...this.parmas,
          })
          this.$nuxt.$loading.finish()
        })
      } else {
        this.parmas = {}
        this.$nextTick(async () => {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('ACT_GET_UNIT')
          this.$nuxt.$loading.finish()
        })
      }
    },
  },
}
</script>

<style lang="scss">
.ant-radio-button-wrapper {
  border-left: 1px solid #d9d9d9 !important;
}
</style>

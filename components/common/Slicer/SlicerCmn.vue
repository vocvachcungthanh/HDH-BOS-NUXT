<template>
  <div class="slicer_cmm grid gap-3">
    <SettingSlicerCmn>
      <SettingSlicerItemCmn
        v-for="item in slicer"
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
import { PAGINATE } from '~/contacts'

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

          if (item === 'slicerUnit') {
            this.parmas.department_id = e[item]
          }

          if (
            item === 'slicerCodePostion' ||
            item === 'slicerNamePostion' ||
            item === 'slicerPermissions' ||
            item === 'slicerBenefits'
          ) {
            this.parmas.id = e[item]
          }

          if (item === 'slicerAccountType') {
            this.parmas.account_type_id = e[item]
          }
        })

        this.$nextTick(async () => {
          this.$nuxt.$loading.start()

          const path = this.$route.path
          switch (path) {
            case '/human-resources/units':
              await this.$store.dispatch('ACT_SEARCH_SLICER_UNIT', {
                ...this.parmas,
              })
              break
            case '/human-resources/positions':
              await this.$store.dispatch('ACT_SEARCH_SLICER_POSTION', {
                ...this.parmas,
                ...PAGINATE,
              })
              break
            case '/human-resources/staffs':
              await this.$store.dispatch('ACT_SEARCH_SLICER_STAFF', {
                ...this.parmas,
                ...PAGINATE,
              })
              break
            default:
              break
          }

          this.$nuxt.$loading.finish()
        })
      } else {
        this.parmas = {}
        this.$nextTick(async () => {
          this.$nuxt.$loading.start()

          const path = this.$route.path
          switch (path) {
            case '/human-resources/units':
              await this.$store.dispatch('ACT_GET_UNIT')
              break
            case '/human-resources/positions':
              await this.$store.dispatch('ACT_GET_POSTION', PAGINATE)
              break
            case '/human-resources/staffs':
              await this.$store.dispatch('ACT_GET_STAFF', PAGINATE)
              break
            default:
              break
          }

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

<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div class="slicer__unit mt-3 overflow-x-auto grid gap-2 grid-cols-5">
    <SlicerCmn
      v-for="(item, index) in slicers"
      v-if="item.status === 1"
      :key="index"
      :caption="item.caption"
      :data="item.values"
      :item-key="index"
      :count-item="item.count"
      @on-value="handleValue"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { SlicerCmn } from '~/components/common/Slicer'

export default {
  components: {
    SlicerCmn,
  },

  data() {
    return {
      parmas: {},
      slicers: {},
    }
  },

  computed: {
    ...mapGetters({
      slicerUnit: 'GET_SLICER_UNITS',
    }),
  },

  created() {
    const path = this.$route.path

    switch (path) {
      case '/human-resources/units':
        try {
          this.$nextTick(async () => {
            this.$nuxt.$loading.start()

            await this.$store.dispatch('ACT_TRASH_DEPARTMENT_COUNT')
            await this.$store.dispatch('ACT_SLIDER_UNIT')
            await this.$store.dispatch('ACT_GET_UNIT')

            this.slicers = this.slicerUnit

            this.$nuxt.$loading.finish()
          })
        } catch (error) {
          // Xử lý lỗi ở đây nếu cần
          console.error('Có lỗi xảy ra:', error)
        }

        break

      default:
        break
    }
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

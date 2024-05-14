<template>
  <BosCardCmn
    :caption="slicers.title"
    :icon-caption="slicers.icon"
    class-header="py-1 px-2"
  >
    <div class="slicer__item grid gap-2">
      <a-input
        v-model="slicers.caption"
        size="small"
        addon-before="Caption"
        @change="
          (e) =>
            handleChange({
              caption: e.target.value,
            })
        "
      />

      <div class="flex items-center border rounded px-1 gap-2">
        <span class="flex-shrink-0"> Số lượng cột </span>
        <a-input-number
          v-model="slicers.count"
          :min="1"
          size="small"
          class="text-right w-full rounded-none border-r-0 border-y-0"
          @change="
            (e) =>
              handleChange({
                count: e,
              })
          "
        />
      </div>
      <a-radio-group
        v-model="slicers.status"
        @change="
          (e) =>
            handleChange({
              status: e.target.value,
            })
        "
      >
        <a-radio :value="1"> Hiển thị </a-radio>
        <a-radio :value="0">Ẩn </a-radio>
      </a-radio-group>
    </div>
  </BosCardCmn>
</template>

<script>
import { BosCardCmn } from '~/components/common/BosCard'
import { MwHandle } from '~/libraries/helpers'

export default {
  name: 'SettingSlicerItem',

  components: {
    BosCardCmn,
  },

  props: {
    dataItem: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      slicers: this.dataItem,
    }
  },

  watch: {
    dataItem: {
      handler(newDataItem) {
        this.slicers = newDataItem
      },

      deep: true,
    },
  },

  methods: {
    handleChange(e) {
      this.slicers = {
        indexKey: this.indexKey,
        ...this.slicers,
        ...e,
      }

      this.updateSlider(this.slicers)
    },

    async updateSlider(value) {
      await this.$store
        .dispatch('ACT_SLICER_SETTING_UPDATE', value)
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

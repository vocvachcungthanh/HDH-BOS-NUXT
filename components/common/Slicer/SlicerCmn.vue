<template>
  <BosCardCmn :caption="caption" class-header="py-1 px-2">
    <template #bos-card-right>
      <button
        v-if="!value"
        class="ml-auto w-7 cursor-pointer text-lg h-auto text-right"
      >
        <BosIconCmn icon="file-protect" />
      </button>

      <button
        v-else
        class="ml-auto w-7 cursor-pointer text-lg h-auto text-right text-orange-400 font-bold"
        @click="handleClear"
      >
        <BosIconCmn
          icon="file-sync"
          :tooltip="true"
          title="Click để khôi phục"
        />
      </button>
    </template>
    <div class="slicer__item">
      <a-radio-group
        v-model="value"
        button-style="solid"
        size="small"
        class="grid gap-2 items-start max-h-20 overflow-x-hidden pr-1"
        :style="styleGroup"
        @change="handleChange"
      >
        <a-radio-button
          v-for="item in opttions"
          :key="item.id"
          class="rounded before:hidden overflow-hidden text-nowrap text-ellipsis"
          :value="item.id"
          :title="item.name"
        >
          {{ item.name }}
        </a-radio-button>
      </a-radio-group>
    </div>
  </BosCardCmn>
</template>

<script>
import BosIconCmn from '~/components/common/BosIcon'
import { BosCardCmn } from '~/components/common/BosCard'

export default {
  name: 'SlicerCommon',

  components: {
    BosIconCmn,
    BosCardCmn,
  },

  props: {
    caption: {
      type: String,
      default: '',
    },

    data: {
      type: Array,
      default: () => [],
    },

    countItem: {
      type: Number,
      default: 2,
    },

    itemKey: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      value: null,
      opttions: [],
    }
  },

  computed: {
    styleGroup() {
      return {
        gridTemplateColumns: `repeat(${this.countItem},minmax(0,1fr))`,
      }
    },
  },

  watch: {
    data: {
      handler(newData) {
        this.opttions = newData
      },

      deep: true,
    },
  },

  created() {
    this.opttions = this.data
  },

  methods: {
    handleChange(e) {
      this.value = e.target.value
      this.$emit('on-value', {
        [this.itemKey]: this.value,
      })
    },

    handleClear() {
      if (!this.value) return

      this.value = null
      this.$emit('on-value', null)
    },
  },
}
</script>

<style lang="scss">
.ant-radio-button-wrapper {
  border-left: 1px solid #d9d9d9 !important;
}
</style>

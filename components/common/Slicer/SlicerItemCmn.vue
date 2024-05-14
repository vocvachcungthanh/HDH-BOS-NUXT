<template>
  <BosCardCmn
    v-if="dataItem.status"
    :key="dataItem.id"
    :caption="dataItem.caption"
    class-header="py-1 px-2"
  >
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
    <a-radio-group
      v-model="value"
      button-style="solid"
      size="small"
      class="grid gap-3 grid-rows-[min-content] max-h-24 min-h-24 overflow-x-hidden pr-1"
      :style="styleGroup"
      @change="handleChange"
    >
      <a-radio-button
        v-for="val in dataItem.values"
        :key="val?.id"
        class="a-radio-button rounded before:hidden w-full overflow-hidden"
        :value="val?.id"
        :title="val?.name"
      >
        <a-tooltip>
          <template slot="title">
            {{ val?.name }}
          </template>
          {{ val?.name }}
        </a-tooltip>
      </a-radio-button>
    </a-radio-group>
  </BosCardCmn>
</template>

<script>
import BosIconCmn from '~/components/common/BosIcon'
import { BosCardCmn } from '~/components/common/BosCard'

export default {
  components: {
    BosIconCmn,
    BosCardCmn,
  },

  props: {
    dataItem: {
      type: Object,
      default: () => Object,
    },
  },

  data() {
    return {
      value: '',
    }
  },

  computed: {
    styleGroup() {
      return {
        gridTemplateColumns: `repeat(${this.dataItem.count},minmax(0,1fr))`,
      }
    },
  },

  methods: {
    handleChange(e) {
      this.value = e.target.value
      this.$emit('on-value', {
        [this.dataItem.name]: this.value,
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
.a-radio-button {
  span {
    & + span {
      display: block;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>

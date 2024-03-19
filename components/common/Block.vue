<template>
  <a-form-item :label="label" :colon="false">
    <a-select
      v-decorator="[
        'block',
        {
          initialValue: value,
          rules: [
            {
              required: true,
              message: 'Chọn khối',
            },
          ],
        },
      ]"
      show-search
      placeholder="Lựa chọn khối trực thuộc"
      option-filter-prop="children"
      :filter-option="filterOption"
      size="large"
      :not-found-content="noData"
      @change="handleChange"
    >
      <a-select-option v-for="item in blocks" :key="item.id" :value="item.id">
        {{ item.name }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>

<script>
import { mapGetters } from 'vuex'
import { NO_DATA } from '~/contacts'

export default {
  name: 'BlockCommon',

  props: {
    valueProp: {
      type: Number,
      default: undefined,
    },

    label: {
      type: String,
      default: 'Khối',
    },
  },

  data() {
    return {
      value: this.valueProp,
      noData: NO_DATA,
    }
  },

  computed: {
    ...mapGetters({
      blocks: 'GET_BLOCK',
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_GET_BLOCK')
  },

  watch: {
    valueProp(newValue) {
      this.value = newValue
    },
  },

  methods: {
    handleChange(value) {
      this.value = value
    },

    filterOption(input, option) {
      return option.componentOptions.children[0].text
        .toLowerCase()
        .includes(input.toLowerCase())
    },
  },
}
</script>

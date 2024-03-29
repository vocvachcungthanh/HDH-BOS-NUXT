<template>
  <a-form-item :label="label" :colon="false">
    <a-select
      v-decorator="[
        'field',
        {
          initialValue: value,
          rules: [
            {
              required: true,
              message: 'Chọn lĩnh vực',
            },
          ],
        },
      ]"
      show-search
      placeholder="Lựa chọn lĩnh vực"
      option-filter-prop="children"
      :filter-option="filterOption"
      size="large"
      @change="handleChange"
    >
      <a-select-option v-for="item in fields" :key="item.id" :value="item.id">
        {{ item.name }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FieldsCommon',

  props: {
    valueProp: {
      type: Number,
      default: undefined,
    },

    label: {
      type: String,
      default: 'Lĩnh vực',
    },
  },

  data() {
    return {
      value: null,
    }
  },

  computed: {
    ...mapGetters({
      fields: 'GET_FIELDS',
    }),
  },

  watch: {
    valueProp(newValue) {
      return (this.value = newValue)
    },
  },

  async created() {
    await this.$store.dispatch('ACT_GET_FIELDS')
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

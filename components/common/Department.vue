<template>
  <a-form-item label="Khối">
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
      @change="handleChange"
    >
      <a-select-option
        v-for="item in department"
        :key="item.id"
        :value="item.id"
      >
        {{ item.name }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DepartmentCommon',

  props: {
    valueProp: {
      type: Number,
      default: undefined,
    },
  },

  data() {
    return {
      value: this.valueProp,
    }
  },

  computed: {
    ...mapGetters({
      department: 'GET_DEPARTMENT',
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_GET_DEPARTMENT')
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

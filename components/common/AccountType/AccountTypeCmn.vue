<template>
  <a-form-item :label="label" :colon="false">
    <a-select
      v-decorator="[
        'account_type_id',
        {
          initialValue: value,
          rules: [
            {
              required: true,
              message: placeholder,
            },
          ],
        },
      ]"
      show-search
      :placeholder="placeholder"
      option-filter-prop="children"
      :filter-option="filterOption"
      size="large"
      :not-found-content="noData"
      @change="handleChange"
    >
      <a-select-option
        v-for="item in accountType"
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
import { NO_DATA } from '~/contacts'

export default {
  name: 'AccountTypeCommon',

  props: {
    valueProp: {
      type: Number,
      default: undefined,
    },

    label: {
      type: String,
      default: 'Loại tài khoản',
    },

    placeholder: {
      type: String,
      default: 'Chọn loại tài khoản',
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
      accountType: 'GET_ACCOUNT_TYPE',
    }),
  },

  watch: {
    valueProp(newValue) {
      this.value = newValue
    },
  },

  async created() {
    await this.$store.dispatch('ACT_GET_ACCOUNT_TYPE')
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

<template>
  <a-form-item :label="label" :colon="false">
    <a-tree-select
      v-decorator="[
        'department',
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
      class="w-full"
      :dropdown-style="dropdownStyle"
      size="large"
      :placeholder="placeholder"
      allow-clear
      tree-default-expand-all
      :not-found-content="noData"
      :tree-data="dataTree"
    >
    </a-tree-select>
  </a-form-item>
</template>

<script>
import { mapGetters } from 'vuex'

import { NO_DATA } from '~/contacts'

export default {
  name: 'DepartmentCommon',

  props: {
    valueProp: {
      type: Number,
      default: undefined,
    },

    label: {
      type: String,
      default: 'Trực thuộc',
    },

    placeholder: {
      type: String,
      default: 'Chọn phong bạn trực thuộc!',
    },
  },

  data() {
    return {
      value: null,
      noData: NO_DATA,
      dataTree: this.departments,
    }
  },

  computed: {
    dropdownStyle() {
      return { maxHeight: '400px', overflow: 'auto' }
    },

    ...mapGetters({
      departments: 'GET_DEPARTMENT',
    }),
  },

  watch: {
    departments(newValue) {
      // eslint-disable-next-line no-return-assign
      return (this.dataTree = newValue)
    },
  },

  created() {
    this.value = this.valueProp
    this.$store.dispatch('ACT_GET_DEPARTMENT')
  },
}
</script>

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
              message: 'Chọn phong bạn trực thuộc!',
            },
          ],
        },
      ]"
      show-search
      class="w-full"
      :dropdown-style="dropdownStyle"
      size="large"
      placeholder="Tìm kiếm phòng ban"
      allow-clear
      tree-default-expand-all
      :not-found-content="noData"
      :tree-data="departments"
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
  },

  data() {
    return {
      value: this.valueProp,
      noData: NO_DATA,
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

  created() {
    this.$store.dispatch('ACT_GET_DEPARTMENT')
  },
}
</script>

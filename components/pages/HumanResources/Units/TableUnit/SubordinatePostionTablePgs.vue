<template>
  <a-table
    :columns="columns"
    :data-source="postions"
    class="custom-table bg-white"
    row-key="id"
    :locale="locale"
    bordered
    :pagination="pagination"
    @change="handlePaginationChange"
  >
  </a-table>
</template>

<script>
import { TableThPostion } from '~/components/pages/HumanResources/Units/Constant'
import { PAGINATE } from '~/contacts'

export default {
  props: {
    postions: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      columns: [...TableThPostion],
      pagination: PAGINATE,
    }
  },

  computed: {
    locale() {
      return {
        emptyText: 'Không có vị trí trực thuộc',
      }
    },
  },

  created() {
    if (this.postions.length <= this.pagination.pageSize) {
      this.pagination = false
    }
  },

  methods: {
    handlePaginationChange(pagination) {
      this.pagination.current = pagination.current
    },
  },
}
</script>

<style lang="scss">
.ant-table-pagination {
  padding-right: 8px !important;
}
</style>

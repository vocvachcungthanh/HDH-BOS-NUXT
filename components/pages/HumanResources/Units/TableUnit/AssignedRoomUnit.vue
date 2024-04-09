<template>
  <a-table
    :columns="columns"
    :data-source="assigendRoomUnit"
    class="custom-table bg-white"
    row-key="id"
    :locale="locale"
    bordered
  >
  </a-table>
</template>

<script>
import { TableTh } from './constant'

export default {
  props: {
    assigendRoomUnit: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      columns: [
        {
          title: '',
          width: 90,
          align: 'center',
        },
        ...TableTh,
      ],
      expandedRowKeys: [],
    }
  },

  computed: {
    locale() {
      return {
        emptyText: 'Không có phòng ban trực thuộc',
      }
    },
  },
}
</script>

<style lang="scss">
.ant-table-pagination {
  padding-right: 8px !important;
}
</style>

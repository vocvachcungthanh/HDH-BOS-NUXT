<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :scroll="{ y: 750 }"
    class="custom-table"
  >
    <template #expandedRowRender="record">
      <TableDetail :total-td="7">
        <DetailUnit :data-item="record" />
      </TableDetail>
    </template>
  </a-table>
</template>
<script>
import DetailUnit from './DetailUnit.vue'
import TableDetail from '~/components/common/TableDetail.vue'

const columns = [
  {
    title: 'STT',
    dataIndex: 'STT',
  },
  {
    title: 'Mã phòng ban',
    dataIndex: 'code',
  },
  {
    title: 'Tên phòng ban',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },

  {
    title: 'Khối',
    dataIndex: 'division',
  },
  {
    title: 'Trực thuộc',
    dataIndex: 'reports_to',
  },
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    STT: i + 1,
    name: `Phòng ban ${i}`,
    code: `BGD ${i}`,
    email: `hncs_${i}@gmail.com`,
    division: `Khối. ${i}`,
    reports_to: `Trực thuộc ${i}`,
  })
}

export default {
  components: { TableDetail, DetailUnit },

  data() {
    return {
      data,
      columns,
      selectedRowKeys: [],
    }
  },

  computed: {
    rowSelection() {
      const { selectedRowKeys } = this
      return {
        selectedRowKeys,
        onChange: this.onSelectChange,
        hideDefaultSelections: true,
        selections: [
          {
            key: 'all-data',
            text: 'Select All Data',
            onSelect: () => {
              this.selectedRowKeys = [...Array(46).keys()] // 0...45
            },
          },
          {
            key: 'odd',
            text: 'Select Odd Row',
            onSelect: (changableRowKeys) => {
              let newSelectedRowKeys = []
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return false
                }
                return true
              })
              this.selectedRowKeys = newSelectedRowKeys
            },
          },
          {
            key: 'even',
            text: 'Select Even Row',
            onSelect: (changableRowKeys) => {
              let newSelectedRowKeys = []
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return true
                }
                return false
              })
              this.selectedRowKeys = newSelectedRowKeys
            },
          },
        ],
        onSelection: this.onSelection,
      }
    },
  },

  methods: {},
}
</script>

<style lang="scss">
.custom-table {
  .ant-table-content {
    border: 1px solid #e8e8e8;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
  }
  .ant-table-thead {
    background-color: var(--color-primary) !important;
    & > tr > th {
      background-color: transparent !important;
      color: white !important;
    }
  }
}
</style>

<template>
  <div>
    <Portal v-if="trashTotal > 0" to="portal-header-right">
      <TrashCmn title="Thùng rác - phòng ban" link="/trash/department"
    /></Portal>
    <Portal to="portal-breadcumb-unit">
      <SearchTableUnitPgs />
    </Portal>
    <a-table
      :columns="columns"
      :data-source="units"
      class="custom-table"
      :locale="locale"
      :pagination="false"
      :scroll="{ y: 690 }"
      row-key="id"
      bordered
    >
      <template #expandedRowRender="record">
        <TableDetailCmn :total-td="8">
          <DetailUnitPgs :data-item="record" />
        </TableDetailCmn>
      </template>
    </a-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import DetailUnitPgs from './DetailUnitPgs.vue'
import { TableTh } from './constant'
import SearchTableUnitPgs from './SearchTableUnitPgs'
import { TableDetailCmn } from '~/components/common/TableDetail'
import { TrashCmn } from '~/components/common/Trash'

export default {
  components: { TableDetailCmn, DetailUnitPgs, TrashCmn, SearchTableUnitPgs },

  data() {
    return {
      columns: TableTh,
    }
  },

  computed: {
    locale() {
      return {
        emptyText:
          this.emptySearch === '' ? 'Chưa tạo phòng ban' : this.emptySearch,
      }
    },

    ...mapGetters({
      units: 'GET_UNIT',
      trashTotal: 'GET_TRASH_DEPARTMENT_COUNTT',
      emptySearch: 'GET_EMPTY_SEARCH',
    }),
  },
}
</script>

<style lang="scss">
.custom-table {
  .ant-table-content {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
  }

  .ant-table-thead {
    background-color: var(--color-primary) !important;

    & > tr > th {
      background-color: transparent !important;
      color: white !important;
      text-align: center;
    }
  }
}
</style>

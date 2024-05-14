<template>
  <div>
    <FormStaffPgs />
    <Portal v-if="trashTotal > 0" to="portal-header-right">
      <TrashCmn title="Thùng rác - vị trí" link="/trash/staff"
    /></Portal>
    <Portal to="portal-breadcumb-hr">
      <SearchTableStaffPgs />
    </Portal>
    <a-table
      :columns="columns"
      :data-source="staffs"
      class="custom-table"
      :locale="locale"
      :pagination="false"
      :scroll="{ y: 690 }"
      row-key="id"
      bordered
    >
      <template #expandedRowRender="record">
        <TableDetailCmn :total-td="8">
          <DetailStaffPgs :data-item="record" />
        </TableDetailCmn>
      </template>
    </a-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import SearchTableStaffPgs from './SearchTableStaffPgs'
import DetailStaffPgs from './DetailStaffPgs'
import { TrashCmn } from '~/components/common/Trash'
import { TableTh } from '~/components/pages/HumanResources/Staffs/Constant'

import { TableDetailCmn } from '~/components/common/TableDetail'
import FormStaffPgs from '~/components/pages/HumanResources/Staffs/FormStaff'

export default {
  components: {
    TableDetailCmn,
    DetailStaffPgs,
    TrashCmn,
    SearchTableStaffPgs,
    FormStaffPgs,
  },

  data() {
    return {
      columns: TableTh,
    }
  },

  computed: {
    locale() {
      return {
        emptyText:
          this.emptySearch === '' ? 'Chưa tạo nhân sự' : this.emptySearch,
      }
    },

    ...mapGetters({
      staff: 'GET_STAFF',
      trashTotal: 'GET_TRASH_STAFF_COUNTT',
      emptySearch: 'GET_EMPTY_SEARCH',
    }),
  },
}
</script>

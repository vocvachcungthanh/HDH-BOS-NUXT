<template>
  <div>
    <FormUnitPgs />
    <Portal v-if="trashTotal > 0" to="portal-header-right">
      <TrashCmn title="Thùng rác - phòng ban" link="/trash/department"
    /></Portal>
    <Portal to="portal-breadcumb-hr">
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
import SearchTableUnitPgs from './SearchTableUnitPgs'
import { TableDetailCmn } from '~/components/common/TableDetail'
import { TrashCmn } from '~/components/common/Trash'
import FormUnitPgs from '~/components/pages/HumanResources/Units/FormUnit'
import { TableTh } from '~/components/pages/HumanResources/Units/Constant'

export default {
  components: {
    TableDetailCmn,
    DetailUnitPgs,
    TrashCmn,
    SearchTableUnitPgs,
    FormUnitPgs,
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
          this.emptySearch === '' ? 'Chưa tạo phòng ban' : this.emptySearch,
      }
    },

    ...mapGetters({
      units: 'GET_UNIT',
      trashTotal: 'GET_TRASH_DEPARTMENT_COUNTT',
      emptySearch: 'GET_EMPTY_SEARCH',
    }),
  },

  beforeCreate() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('ACT_TRASH_DEPARTMENT_COUNT')

      this.$nuxt.$loading.finish()
    })
  },
}
</script>

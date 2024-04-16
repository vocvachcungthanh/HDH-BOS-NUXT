<template>
  <div>
    <Portal v-if="trashTotal > 0" to="portal-header-right">
      <Trash title="Thùng rác - phòng ban" link="/trash/department"
    /></Portal>
    <Portal to="portal-breadcumb-unit">
      <SearchTableUnit />
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
        <TableDetail :total-td="8">
          <DetailUnit :data-item="record" />
        </TableDetail>
      </template>
    </a-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import DetailUnit from './DetailUnit.vue'
import { TableTh } from './constant'
import SearchTableUnit from './SearchTableUnit'
import TableDetail from '~/components/common/TableDetail.vue'
import Trash from '~/components/common/Trash.vue'

export default {
  components: { TableDetail, DetailUnit, Trash, SearchTableUnit },

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

  // eslint-disable-next-line require-await
  async created() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('ACT_TRASH_DEPARTMENT_COUNT')
      await this.$store.dispatch('ACT_GET_UNIT')

      this.$nuxt.$loading.finish()
    })
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

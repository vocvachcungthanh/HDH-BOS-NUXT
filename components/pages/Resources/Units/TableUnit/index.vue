<template>
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
</template>
<script>
import { mapGetters } from 'vuex'

import DetailUnit from './DetailUnit.vue'
import { TableTh } from './constant'
import TableDetail from '~/components/common/TableDetail.vue'

export default {
  components: { TableDetail, DetailUnit },

  data() {
    return {
      columns: TableTh,
    }
  },

  computed: {
    locale() {
      return {
        emptyText: 'Chưa tạo phòng ban',
      }
    },

    ...mapGetters({
      units: 'GET_UNIT',
    }),
  },

  // eslint-disable-next-line require-await
  async created() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
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

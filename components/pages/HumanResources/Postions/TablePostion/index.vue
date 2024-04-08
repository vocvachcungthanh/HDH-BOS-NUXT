<template>
  <div>
    <DeletePostion v-if="selectedRowKeys.length > 0" :ids="selectedRowKeys" />
    <a-table
      :columns="columns"
      :data-source="data"
      class="custom-table"
      :locale="locale"
      :pagination="pagination"
      row-key="id"
      bordered
      :row-selection="{
        selectedRowKeys,
        onChange: handleSelectRowKey,
      }"
      @change="handlePaginationChange"
    >
    </a-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import DeletePostion from './DeletePostion.vue'
import { TableTh } from './constant'
import { PAGINATE } from '~/contacts'

export default {
  components: {
    DeletePostion,
  },

  data() {
    return {
      columns: TableTh,
      data: [],
      pagination: PAGINATE,
      selectedRowKeys: [],
    }
  },

  computed: {
    locale() {
      return {
        emptyText: 'Chưa có vị trí nào',
      }
    },

    ...mapGetters({
      postions: 'GET_POSTIONS',
    }),
  },

  watch: {
    postions(pNew) {
      if (pNew.total <= pNew.per_page) {
        this.pagination = false
      } else {
        this.pagination = {
          pageSize: pNew.per_page,
          total: pNew.total,
          current: pNew.current_page,
        }
      }

      return (this.data = pNew.data || [])
    },
  },

  // eslint-disable-next-line require-await
  async created() {
    this.getPostion(this.pagination)
  },

  methods: {
    handlePaginationChange(pagination) {
      pagination.page = pagination.current_page

      this.getPostion(pagination)
    },

    // eslint-disable-next-line require-await
    async getPostion(pagination) {
      this.$nextTick(async () => {
        this.$nuxt.$loading.start()
        await this.$store.dispatch('ACT_GET_POSTION', pagination)

        this.$nuxt.$loading.finish()
      })
    },

    handleSelectRowKey(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
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

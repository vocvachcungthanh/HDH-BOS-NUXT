<template>
  <div>
    <FormPostionPgs />
    <DeletePostionPgs
      v-if="selectedRowKeys.length > 0"
      :ids="selectedRowKeys"
    />
    <Portal to="portal-breadcumb-hr">
      <SearchTablePostionPgs />
    </Portal>
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

import FormPostionPgs from '../FormPostion'
import DeletePostionPgs from './DeletePostionPgs.vue'
import SearchTablePostionPgs from './SearchTablePostionPgs.vue'
import { TableTh } from '~/components/pages/HumanResources/Postions/Constant'
import { PAGINATE } from '~/contacts'

export default {
  components: {
    DeletePostionPgs,
    FormPostionPgs,
    SearchTablePostionPgs,
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
    postions: {
      handler(newValue, oldValue) {
        if (newValue.total <= newValue.per_page) {
          this.pagination = false
        } else {
          this.pagination = {
            pageSize: newValue.per_page,
            total: newValue.total,
            current: newValue.current_page,
          }
        }

        return (this.data = newValue.data || [])
      },

      deep: true,
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

<template>
  <div class="">
    <portal v-if="selectedRowKeys.length > 0" to="portal-breadcumb-page">
      <ActionsTrashPgs
        :id-array="selectedRowKeys"
        :key-action="keyAction"
        @selected-row-keys="handleRowKeys"
      />
    </portal>
    <a-table
      :columns="columns"
      :data-source="departments"
      class="custom-table"
      :pagination="false"
      :scroll="{ y: 690 }"
      row-key="id"
      :locale="locale"
      bordered
      :row-selection="{
        selectedRowKeys,
        onChange: handleSelectRowKey,
      }"
    >
      <template slot="actions" slot-scope="text, record">
        <ActionsTrashPgs
          :id-array="[record.id]"
          size="small"
          :key-action="keyAction"
          :is-text="false"
          @selected-row-keys="handleRowKeys"
        />
      </template>
    </a-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import { TableThDepartment } from './constant'
import ActionsTrashPgs from './ActionsTrashPgs.vue'

export default {
  components: {
    ActionsTrashPgs,
  },
  data() {
    return {
      columns: TableThDepartment,
      selectedRowKeys: [],
      keyAction: {
        empty: 'ACT_EMPETY_DEPARTMENT',
        restore: 'ACT_RESTORE_DEPARTMENT',
      },
    }
  },

  computed: {
    locale() {
      return {
        emptyText: 'Không có dữ liệu phòng bàn bị xóa',
      }
    },

    ...mapGetters({
      departments: 'GET_TRASH_DEPARTMENT_LIST',
    }),
  },

  // eslint-disable-next-line require-await
  async created() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('ACT_TRASH_DEPARTMENT_LIST')

      this.$nuxt.$loading.finish()
    })
  },

  methods: {
    handleSelectRowKey(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },

    handleRowKeys(idArray) {
      if (idArray && idArray.length > 0) {
        const RowKeysNew = this.selectedRowKeys.filter(
          (item) => !idArray.includes(item)
        )
        return (this.selectedRowKeys = RowKeysNew)
      }
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

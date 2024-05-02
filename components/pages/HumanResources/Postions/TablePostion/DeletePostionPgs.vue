<template>
  <div>
    <Portal to="portal-breadcumb-page">
      <button
        class="flex items-center justify-center w-8 h-8 font-semibold text-2xl cursor-pointer hover:text-red-500"
        @click="handleDelete"
      >
        <BosIconCmn
          icon="delete"
          :tooltip="true"
          title="Xóa những vị trí bạn vừa chọn"
        />
      </button>
    </Portal>
  </div>
</template>

<script>
import BosIconCmn from '~/components/common/BosIcon'
import { MwHandle } from '~/libraries/helpers'

export default {
  components: {
    BosIconCmn,
  },

  props: {
    ids: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    handleDelete() {
      this.$confirm({
        title: 'Bos thông báo',
        content: 'Bạn có chắc muốn xóa những vị trí đã chọn',
        okText: 'Có',
        cancelText: 'Không',
        confirmLoading: true,
        onOk: () => {
          this.handleDeletePostion()
        },
        onCancel() {},
      })
    },

    async handleDeletePostion() {
      await this.$store
        .dispatch('ACT_DELETE_POSTION', {
          ids: this.ids,
        })
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
            placement: 'center',
          })
        })
        .catch((errors) => {
          MwHandle.handleError({
            context: errors.message,
          })
        })
    },
  },
}
</script>

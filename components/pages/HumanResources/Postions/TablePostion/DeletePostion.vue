<template>
  <div>
    <Portal to="portal-breadcumb-page">
      <button
        class="flex items-center justify-center w-8 h-8 font-semibold text-2xl cursor-pointer hover:text-red-500"
        @click="handleDelete"
      >
        <BosIcon
          icon="delete"
          :tooltip="true"
          title="Xóa những vị trí bạn vừa chọn"
        />
      </button>
    </Portal>
  </div>
</template>

<script>
import BosIcon from '~/components/common/BosIcon.vue'
import { MwHandle } from '~/libraries/helpers'

export default {
  components: {
    BosIcon,
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
        content: 'Bạn có trắc muốn xóa những vị trí đã chọn',
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

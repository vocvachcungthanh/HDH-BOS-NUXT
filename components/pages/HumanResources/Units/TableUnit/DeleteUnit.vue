<template>
  <BosIcon
    icon="delete"
    title="Xóa Phòng ban"
    :tooltip="true"
    placement="top"
    class="w-8 h-8 text-2xl cursor-pointer hover:text-red-600"
    @click.native="handleDelete"
  />
</template>

<script>
import BosIcon from '~/components/common/BosIcon.vue'
import { MwHandle } from '~/libraries/helpers'
export default {
  components: {
    BosIcon,
  },

  props: {
    id: {
      type: Number,
      default: () => null,
    },
  },

  methods: {
    handleDelete() {
      this.$confirm({
        title: 'Bos thông báo',
        content: 'Bạn có chắc muốn xóa phòng ban này',
        okText: 'Có',
        cancelText: 'Không',
        confirmLoading: true,
        onOk: () => {
          this.handleDeleteDepartment()
        },
        onCancel() {},
      })
    },

    async handleDeleteDepartment() {
      await this.$store
        .dispatch('ACT_DELETE_DEPARTMENT', { id: this.id })
        .then((res) => MwHandle.handleSuccess({ context: res }))
        .catch((error) => {
          MwHandle.handleError({ context: error })
        })
    },
  },
}
</script>

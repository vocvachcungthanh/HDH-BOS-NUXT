<template>
  <div class="flex items-center justify-center gap-3">
    <a-button
      :size="size"
      class="flex items-center text-blue-600 border-blue-600 hover:bg-blue-500 hover:text-white"
      @click="handleRestore"
      ><a-icon type="sync" />Khôi phục</a-button
    >
    <a-button
      :size="size"
      class="flex items-center text-red-600 border-red-600 hover:bg-red-500 hover:text-white"
      @click="handleDelete"
      ><a-icon type="delete" /> Xóa</a-button
    >
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'default',
    },
  },

  methods: {
    handleDelete() {
      this.$confirm({
        title: 'Bos thông báo',
        content: 'Dữ liệu sẽ không thể khổi phục, bạn có chắc muốn xóa ? ',
        okText: 'Có',
        cancelText: 'Không',
        confirmLoading: true,
        onOk: () => {
          this.$emit('handle-delete')
        },
        onCancel() {},
      })
    },

    handleRestore() {
      this.$emit('handle-restore')
    },
  },
}
</script>

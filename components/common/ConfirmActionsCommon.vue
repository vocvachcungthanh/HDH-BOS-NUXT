<template>
  <div class="flex items-center justify-center gap-3">
    <a-tooltip v-if="!isText">
      <template slot="title">
        <span> Khôi phục </span>
      </template>
      <a-button
        :size="size"
        class="flex items-center text-blue-600 border-blue-600 hover:bg-blue-500 hover:text-white gap-1"
        @click="handleRestore"
      >
        <a-icon type="sync" />
        {{ getTextRestore }}
      </a-button>
    </a-tooltip>
    <a-button
      v-else
      :size="size"
      class="flex items-center text-blue-600 border-blue-600 hover:bg-blue-500 hover:text-white gap-1"
      @click="handleRestore"
    >
      <a-icon type="sync" />
      {{ getTextRestore }}
    </a-button>

    <a-tooltip v-if="!isText">
      <template slot="title">
        <span> Xóa </span>
      </template>
      <a-button
        :size="size"
        class="flex items-center text-red-600 border-red-600 hover:bg-red-500 hover:text-white gap-1"
        @click="handleDelete"
      >
        <a-icon type="sync" />
        {{ getTextDelete }}
      </a-button>
    </a-tooltip>
    <a-button
      v-else
      :size="size"
      class="flex items-center text-red-600 border-red-600 hover:bg-red-500 hover:text-white gap-1"
      @click="handleDelete"
    >
      <a-icon type="sync" />
      {{ getTextDelete }}
    </a-button>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'default',
    },

    isText: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    getTextDelete() {
      return this.isText ? 'Xóa' : ''
    },

    getTextRestore() {
      return this.isText ? 'Khôi phục' : ''
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

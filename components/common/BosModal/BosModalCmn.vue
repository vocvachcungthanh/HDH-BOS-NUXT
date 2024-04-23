<template>
  <a-modal
    class="bos__modal"
    :visible="isModal"
    :title="title"
    :ok-text="okText"
    :cancel-text="cancelText"
    :footer="footer"
    :width="width"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <slot></slot>
  </a-modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    cancelText: {
      type: String,
      default: 'Hủy',
    },
    okText: {
      type: String,
      default: 'Lưu',
    },
    // eslint-disable-next-line vue/require-default-prop
    footer: {
      type: [String, Object, Function],
    },
    width: {
      type: String,
      default: '520px',
    },
  },

  computed: {
    ...mapState({
      isModal: (state) => state.modal.isModal,
    }),
  },

  methods: {
    handleCancel() {
      this.$emit('close')
    },
    handleOk(e) {
      this.$emit('submit', e)
    },
  },
}
</script>

<style lang="scss">
.bos__modal {
  .ant-modal-content {
    overflow: hidden;
    border-radius: 12px;
  }
}
</style>

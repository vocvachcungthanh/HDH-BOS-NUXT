<template>
  <a-modal
    class="bos__modal"
    :visible="isModal"
    :title="title"
    @cancel="handleCancel"
    @ok="handleOk"
    :ok-text="okText"
    :cancel-text="cancelText"
  >
    <slot></slot>
  </a-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: String,
    },

    cancelText: {
      type: String,
      default: 'Hủy',
    },

    okText: {
      type: String,
      default: 'Lưu',
    },

    footer: {
      type: String,
      default: null,
    },
  },

  computed: {
    ...mapState({
      isModal: (state) => state.isModal,
    }),
  },

  methods: {
    handleCancel() {
      this.setIsModal(false)
    },

    handleOk(e) {
      this.$emit('submit', e)
    },

    ...mapMutations({
      setIsModal: 'SET_IS_MODAL',
    }),
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

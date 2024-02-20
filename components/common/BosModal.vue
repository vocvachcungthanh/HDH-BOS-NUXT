<template>
  <a-modal
    v-model="isModal"
    :title="title"
    cancel-text="Hủy"
    ok-text="Lưu"
    @ok="handleOk"
    @cancel="handleCancel"
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
      this.$emit('ok', e)
    },

    ...mapMutations({
      setIsModal: 'SET_IS_MODAL',
    }),
  },
}
</script>

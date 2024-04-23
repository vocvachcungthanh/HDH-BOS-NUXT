<template>
  <ConfirmActionsCmn
    :size="size"
    :is-text="isText"
    @handle-delete="handleDelete"
    @handle-restore="handleRestore"
  />
</template>

<script>
import { ConfirmActionsCmn } from '~/components/common/ConfirmActions'
import { MwHandle } from '~/libraries/helpers'

export default {
  components: {
    ConfirmActionsCmn,
  },
  props: {
    idArray: {
      type: Array,
      default: () => [],
    },

    size: {
      type: String,
      default: 'default',
    },

    keyAction: {
      type: Object,
      default: () => {},
    },

    isText: {
      type: Boolean,
      default: () => true,
    },
  },

  methods: {
    async handleDelete() {
      await this.$store
        .dispatch(this.keyAction.empty, { ids: this.idArray })
        .then((res) => {
          this.$emit('selected-row-keys', this.idArray)
          MwHandle.handleSuccess({ context: res })
        })
        .catch((error) => MwHandle.handleError({ context: error }))
    },

    async handleRestore() {
      await this.$store
        .dispatch(this.keyAction.restore, { ids: this.idArray })
        .then((res) => {
          this.$emit('selected-row-keys', this.idArray)
          MwHandle.handleSuccess({ context: res })
        })
        .catch((error) => MwHandle.handleError({ context: error }))
    },
  },
}
</script>

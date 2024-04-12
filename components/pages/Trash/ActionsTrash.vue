<template>
  <ConfirmActionsCommon
    :size="size"
    @handle-delete="handleDelete"
    @handle-restore="handleRestore"
  />
</template>

<script>
import ConfirmActionsCommon from '~/components/common/ConfirmActionsCommon.vue'
import { MwHandle } from '~/libraries/helpers'

export default {
  components: {
    ConfirmActionsCommon,
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
  },

  methods: {
    async handleDelete() {
      await this.$store
        .dispatch(this.keyAction.empty, { ids: this.idArray })
        .then((res) => MwHandle.handleSuccess({ context: res }))
        .catch((error) => MwHandle.handleError({ context: error }))
    },

    async handleRestore() {
      await this.$store
        .dispatch(this.keyAction.restore, { ids: this.idArray })
        .then((res) => MwHandle.handleSuccess({ context: res }))
        .catch((error) => MwHandle.handleError({ context: error }))
    },
  },
}
</script>

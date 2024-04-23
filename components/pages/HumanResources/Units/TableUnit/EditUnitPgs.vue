<template>
  <div>
    <BosIconCmn
      icon="edit"
      title="Sửa phòng ban"
      :tooltip="true"
      placement="top"
      class="w-8 h-8 text-2xl cursor-pointer hover:text-orange-500"
      @click.native="showModal"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import { BosIconCmn } from '~/components/common/BosIcon'

export default {
  components: {
    BosIconCmn,
  },

  props: {
    dataItem: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    showModal() {
      this.setModal({
        isModal: true,
        name: 'modal_unit',
        data: this.dataItem,
      })
    },

    ...mapMutations({
      setModal: 'SET_MODAL',
    }),
  },
}
</script>

<template>
  <div>
    <BosIcon
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

import BosIcon from '~/components/common/BosIcon.vue'

export default {
  components: {
    BosIcon,
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

<template>
  <div class="">
    <CreatePage @click.native="showModal" />
    <BosModal
      title="Thêm danh sách phòng ban"
      @submit="handleOk"
      :footer="true"
    >
    </BosModal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import BosModal from '~/components/common/BosModal.vue'
import CreatePage from '~/components/pages/CreatePage'

export default {
  components: {
    CreatePage,
    BosModal,
  },

  methods: {
    handleOk(e) {
      console.log(e)
    },

    showModal() {
      this.setIsModal(true)
    },

    ...mapMutations({
      setIsModal: 'SET_IS_MODAL',
    }),
  },
}
</script>

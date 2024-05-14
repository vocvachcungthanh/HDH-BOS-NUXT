<template>
  <div class="create__hr">
    <CreatePage @click.native="showModal" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import CreatePage from '~/components/pages/CreatePage'

export default {
  components: {
    CreatePage,
  },

  data() {
    return {
      value: undefined,
    }
  },

  computed: {
    dropdownStyle() {
      return { maxHeight: '400px', overflow: 'auto' }
    },
  },

  methods: {
    showModal() {
      const path = this.$route.path
      let modalName = null

      switch (path) {
        case '/human-resources/units':
          modalName = 'modal_unit'
          break
        case '/human-resources/positions':
          modalName = 'modal_postion'
          break
        case '/human-resources/staffs':
          modalName = 'modal_staff'
          break
        default:
          break
      }
      this.setModal({
        isModal: true,
        name: modalName,
        data: null,
      })
    },

    ...mapMutations({
      setModal: 'SET_MODAL',
    }),
  },
}
</script>

<style lang="scss">
.ant-modal-body {
  padding: 0;
}

.ant-modal-close {
  top: -4px;
}
</style>

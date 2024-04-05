<template>
  <div class="create__unit">
    <CreatePage @click.native="showModal" />
    <FormUnit />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import FormUnit from '~/components/pages/HumanResources/Units/FormUnit'
import CreatePage from '~/components/pages/CreatePage'

export default {
  components: {
    CreatePage,
    FormUnit,
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

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_unit' })
  },

  methods: {
    showModal() {
      this.setModal({
        isModal: true,
        name: 'modal_unit',
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

<template>
  <div class="create__unit">
    <CreatePage @click.native="showModal" />
    <FormUnitPgs />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import FormUnitPgs from '~/components/pages/HumanResources/Units/FormUnit'
import CreatePage from '~/components/pages/CreatePage'

export default {
  components: {
    CreatePage,
    FormUnitPgs,
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

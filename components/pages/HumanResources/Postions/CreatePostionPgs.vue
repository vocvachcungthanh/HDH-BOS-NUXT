<template>
  <div class="create__unit">
    <CreatePage @click.native="showModal" />

    <FormPostion v-if="nameModal === 'modal_postion'" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import CreatePage from '~/components/pages/CreatePage'
import FormPostion from '~/components/pages/HumanResources/Postions/FormPostion'

export default {
  components: {
    CreatePage,
    FormPostion,
  },

  data() {
    return {
      value: undefined,
      nameModal: null,
    }
  },

  computed: {
    dropdownStyle() {
      return { maxHeight: '400px', overflow: 'auto' }
    },

    ...mapGetters({
      modal: 'getModal',
    }),
  },

  watch: {
    modal(newMoal) {
      this.nameModal = newMoal.name
    },
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_postion' })
  },

  methods: {
    showModal() {
      this.setModal({
        isModal: true,
        name: 'modal_postion',
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

<template>
  <div class="">
    <CreatePage @click.native="showModal" />
    <a-modal
      v-model="visible"
      title="Thêm thông tin phòng ban"
      cancel-text="Hủy"
      ok-text="Lưu"
      @ok="handleOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script>
import CreatePage from '~/components/pages/CreatePage'

export default {
  components: {
    CreatePage,
  },

  data() {
    return {
      visible: false,
    }
  },

  methods: {
    showModal() {
      this.visible = true
    },

    handleOk(e) {
      console.log(e)
      this.visible = false
    },
  },
}
</script>

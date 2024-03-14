<template>
  <div class="create__unit">
    <CreatePage @click.native="showModal" />
    <BosModal
      title="Thêm thông tin phòng ban"
      @close="handleCancel"
      :footer="null"
      width="1030px"
    >
      <a-form
        id="components-form-demo-normal-login"
        ref="formRef"
        :form="form"
        class="login-form px-6 pt-6"
        @submit="handleSubmit"
      >
        <a-row class="a-row" :gutter="24">
          <a-col :span="12">
            <a-form-item label="Mã phòng ban" :colon="false">
              <a-input
                v-decorator="[
                  'code',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Nhập mã phòng ban!',
                      },
                    ],
                  },
                ]"
                placeholder="Nhập mã phòng ban"
                size="large"
              >
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <Fields />
          </a-col>
        </a-row>
        <a-row class="a-row" :gutter="24">
          <a-col :span="12">
            <a-form-item label="Tên phòng ban" :colon="false">
              <a-input
                v-decorator="[
                  'name',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Nhập tên phòng ban',
                      },
                    ],
                  },
                ]"
                placeholder="Nhập tên phòng ban"
                size="large"
              >
              </a-input>
            </a-form-item>
            <Department label="Trực thuộc" :colon="false" />

            <Block label="Thuộc khối" />
          </a-col>
          <a-col :span="12">
            <a-form-item label="Mô tả">
              <a-textarea
                v-decorator="['desc']"
                class="min-h-[250px]"
                placeholder="Nhập mô tả chức năng nhiệm vụ của phòng ban"
              >
              </a-textarea>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item
          class="ant-modal-footer mb-0 border-t-0 relative before:w-[calc(100%_+_32px)] before:absolute before:top-0 before:border-t-[1px] border-t-[#e8e8e8] before:h-[1px] before:left-1/2 before:-translate-x-1/2"
        >
          <a-button type="button" @click="handleCancel"> Hủy </a-button>
          <a-button type="primary" html-type="submit" class="login-form-button">
            <span> Lưu </span>
          </a-button>
        </a-form-item>
      </a-form>
    </BosModal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import BosModal from '~/components/common/BosModal.vue'
import Block from '~/components/common/Block.vue'
import Fields from '~/components/common/Fields.vue'
import CreatePage from '~/components/pages/CreatePage'
import Department from '~/components/common/Department.vue'

export default {
  components: {
    CreatePage,
    BosModal,
    Block,
    Fields,
    Department,
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
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },

    handleCancel() {
      this.setIsModal(false)
      this.form.resetFields()
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

<style lang="scss">
.ant-modal-body {
  padding: 0;
}

.ant-modal-close {
  top: -4px;
}
</style>

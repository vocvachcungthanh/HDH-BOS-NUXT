<template>
  <BosModal
    v-if="modal.name === 'modal_postion'"
    :title="titleModal"
    :footer="null"
    width="1030px"
    @close="handleCancel"
  >
    <a-form
      id="components-form-demo-normal-postion"
      ref="formRef"
      :form="form"
      class="postion-form px-6 pt-6"
      @submit="handleSubmit"
    >
      <a-row class="a-row" :gutter="24">
        <a-col :span="12">
          <CodeAuto :code-prop="defaultValue.code" />

          <AccountType
            label="Loại tài khoản"
            :value-prop="defaultValue.accountTypeId"
          />

          <a-form-item label="Quyền lợi" :colon="false">
            <a-textarea
              v-decorator="[
                'benefits',
                {
                  initialValue: defaultValue.benefits,
                },
              ]"
              class="min-h-14 mb-0"
              placeholder="Nhập quyền lợi"
            >
            </a-textarea>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Tên vị trí" :colon="false">
            <a-input
              v-decorator="[
                'name',
                {
                  initialValue: defaultValue.name,
                  rules: [
                    {
                      required: true,
                      message: 'Nhập tên vị trí',
                    },
                  ],
                },
              ]"
              placeholder="Nhập tên vị trí"
              size="large"
            >
            </a-input>
          </a-form-item>
          <Department
            label="Thuộc đơn vị"
            :colon="false"
            :value-prop="defaultValue.departmentId"
            placeholder="Chọn đơn vị"
          />
          <a-form-item label="Quyền hạn">
            <a-textarea
              v-decorator="[
                'permissions',
                {
                  initialValue: defaultValue.permissions,
                },
              ]"
              class="min-h-14 mb-0"
              placeholder="Nhập quyền hạn"
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
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import CodeAuto from '~/components/common/CodeAuto.vue'
import { MwHandle } from '~/libraries/helpers/index'

import BosModal from '~/components/common/BosModal.vue'
import AccountType from '~/components/common/AccountType.vue'

import Department from '~/components/common/Department'

export default {
  name: 'FormPostion',

  components: {
    BosModal,
    AccountType,
    Department,
    CodeAuto,
  },

  data() {
    return {
      value: undefined,
      defaultValue: {
        code: null,
        name: null,
        accountTypeId: null,
        postionId: null,
        departmentId: null,
        benefits: '',
        permissions: '',
      },
    }
  },

  computed: {
    dropdownStyle() {
      return { maxHeight: '400px', overflow: 'auto' }
    },

    titleModal() {
      return this.modal.data ? 'Sửa vị trí' : 'Thêm vị trí'
    },

    ...mapGetters({
      modal: 'getModal',
    }),
  },

  watch: {
    modal() {
      const code = this.moda?.data?.code
      const name = this.moda?.data?.name
      const accountTypeId = this.moda?.data?.account_type_id
      const postionId = this.moda?.data?.postion_id
      const departmentId = this.moda?.data?.department_id
      const benefits = this.moda?.data?.benefits
      const permissions = this.moda?.data?.permissions

      this.defaultValue = {
        code,
        name,
        accountTypeId,
        postionId,
        departmentId,
        benefits,
        permissions,
      }
    },
  },

  async beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_postion' })
    await this.$store.dispatch('ACT_CREATE_CODE_POSTION')
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFields((err, values) => {
        if (!err) {
          const idUpdate = this.modal?.data?.id
          if (idUpdate) {
            this.updatePostion({
              id: idUpdate,
              ...values,
            })
          } else {
            this.createPostion(values)
          }
        }
      })
    },

    async createPostion(values) {
      await this.$store
        .dispatch('ACT_CREATE_POSTION', values)
        .then((res) => {
          this.form.resetFields()
          MwHandle.handleSuccess({
            context: res,
          })
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error.message,
          })
        })
    },

    async updatePostion(values) {
      await this.$store
        .dispatch('ACT_UPDATE_POSTION', values)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          })
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          })
        })
    },

    handleCancel() {
      this.setModal({
        isModal: false,
        name: 'modal_postion',
        data: {},
      })

      this.defaultValue = {
        code: null,
        name: '',
        accountType: null,
        postionId: null,
        mission: null,
        parent: null,
        interest: null,
      }

      this.form.resetFields()
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

<template>
  <BosModalCmn
    v-if="modal.name === 'modal_staff'"
    :title="titleModal"
    :footer="null"
    width="1030px"
    @close="handleCancel"
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
          <CodeAutoCmn
            lable="Mã phòng ban"
            :code-prop="defaultValue.code"
            name-modal="code_department"
          />
        </a-col>
        <a-col :span="12">
          <FieldsCmn
            :value-prop="defaultValue.field_id"
            :key-clear="keyClear"
          />
        </a-col>
      </a-row>
      <a-row class="a-row" :gutter="24">
        <a-col :span="12">
          <a-form-item label="Tên phòng ban" :colon="false">
            <a-input
              v-decorator="[
                'name',
                {
                  initialValue: defaultValue.name,
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
          <Department
            label="Trực thuộc"
            :colon="false"
            :value-prop="defaultValue.department_id"
          />

          <BlockCmn
            label="Thuộc khối"
            :value-prop="defaultValue.block_id"
            :key-clear="keyClear"
          />

          <a-form-item label="Chức năng" :colon="false">
            <div
              v-decorator="[
                'taks',
                {
                  initialValue: defaultValue.taks,
                },
              ]"
              class="min-h-14 cursor-not-allowed bg-[#f5f5f5] rounded border border-collapse"
            ></div>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Mô tả">
            <a-textarea
              v-decorator="[
                'desc',
                {
                  initialValue: defaultValue.note,
                },
              ]"
              class="min-h-[252px] mb-0"
              placeholder="Nhập mô tả chức năng nhiệm vụ của phòng ban"
            >
            </a-textarea>
          </a-form-item>
          <a-form-item label="Nhiệm vụ" :colon="false">
            <div
              class="min-h-14 cursor-not-allowed bg-[#f5f5f5] rounded border border-collapse"
            ></div>
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
  </BosModalCmn>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { CodeAutoCmn } from '~/components/common/CodeAuto'
import { MwHandle } from '~/libraries/helpers/index'

import { BosModalCmn } from '~/components/common/BosModal'
import { FieldsCmn } from '~/components/common/Fields'
import Department from '~/components/common/Department'
import { BlockCmn } from '~/components/common/Block'

export default {
  name: 'FormUnits',

  components: {
    BosModalCmn,
    BlockCmn,
    FieldsCmn,
    Department,
    CodeAutoCmn,
  },

  data() {
    return {
      value: undefined,
      defaultValue: {
        code: null,
        name: '',
        block_id: null,
        taks: '',
        note: '',
        mission: '',
        field_id: null,
        department_id: null,
      },
      keyClear: 0,
    }
  },

  computed: {
    dropdownStyle() {
      return { maxHeight: '400px', overflow: 'auto' }
    },

    titleModal() {
      return this.modal.data
        ? 'Sửa thông nhân viên'
        : 'Thêm thông tin nhân viên'
    },

    ...mapGetters({
      modal: 'getModal',
    }),
  },

  watch: {
    modal() {
      const code = this.modal?.data?.code
      const name = this.modal?.data?.name
      const note = this.modal?.data?.note

      const blockId = this.modal?.data?.block_id

      const fieldId = this.modal?.data?.field_id

      const parentId = this.modal?.data?.parent_id

      this.defaultValue = {
        code,
        name,
        note,
        block_id: blockId,
        field_id: fieldId,
        department_id: parentId,
      }
    },
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_staff' })
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFields((err, values) => {
        if (!err) {
          const idUpdate = this.modal?.data?.id
          if (idUpdate) {
            this.updateDepartment({
              id: idUpdate,
              ...values,
            })
          } else {
            this.createDepartment(values)
          }
        }
      })
    },

    async createDepartment(values) {
      await this.$store
        .dispatch('ACT_CREATE_DEPARTMENT', values)
        .then((res) => {
          this.form.resetFields()
          this.clearDefault()
          MwHandle.handleSuccess({
            context: res,
          })
        })
        .catch((error) => {
          Object.keys(error).forEach((fieldName) => {
            MwHandle.handleError({
              context: error[fieldName],
            })
          })
        })
    },

    async updateDepartment(values) {
      await this.$store
        .dispatch('ACT_UPDATE_DEPARTMENT', values)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          })
        })
        .catch((error) => {
          Object.keys(error).forEach((fieldName) => {
            MwHandle.handleError({
              context: error[fieldName],
            })
          })
        })
    },

    handleCancel() {
      this.setModal({
        isModal: false,
        name: 'modal_unit',
        data: {},
      })

      this.clearDefault()
      this.form.resetFields()
    },

    clearDefault() {
      this.defaultValue = {
        code: null,
        name: null,
        note: null,
        block_id: null,
        field_id: null,
        department_id: null,
      }

      this.keyClear = Date.now()
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

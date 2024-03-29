<template>
  <BosModal
    v-if="modal.name === 'modal_unit'"
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
          <CodeAuto :code-prop="defaultValue.code" />
        </a-col>
        <a-col :span="12">
          <Fields :value-prop="defaultValue.field" />
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
            :value-prop="defaultValue.parent"
          />

          <Block label="Thuộc khối" :value-prop="defaultValue.block" />

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
  </BosModal>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import CodeAuto from './CodeAuto'
import { MwHandle } from '~/libraries/helpers/index'

import BosModal from '~/components/common/BosModal.vue'
import Block from '~/components/common/Block.vue'
import Fields from '~/components/common/Fields.vue'
import Department from '~/components/common/Department'

export default {
  name: 'FormUnits',

  components: {
    BosModal,
    Block,
    Fields,
    Department,
    CodeAuto,
  },

  data() {
    return {
      value: undefined,
      defaultValue: {
        code: null,
        name: '',
        block: null,
        taks: '',
        note: '',
        mission: '',
        field: null,
        parent: null,
      },
    }
  },

  computed: {
    dropdownStyle() {
      return { maxHeight: '400px', overflow: 'auto' }
    },

    titleModal() {
      return this.modal.data
        ? 'Sửa thông tin phòng ban'
        : 'Thêm thông tin phòng ban'
    },

    ...mapGetters({
      modal: 'getModal',
    }),
  },

  watch: {
    modal() {
      const { code, name, note, id } = this.modal.data
      this.id = id
      this.defaultValue = {
        code,
        name,
        note,
        block: this.modal.data.block_id,
        field: this.modal.data.field_id,
        parent: this.modal.data.parent_id,
      }
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

    async updateDepartment(values) {
      await this.$store
        .dispatch('ACT_UPDATE_DEPARTMENT', values)
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
        name: 'modal_unit',
        data: {},
      })

      this.defaultValue = {
        code: null,
        name: null,
        note: null,
        block: null,
        field: null,
        parent: null,
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

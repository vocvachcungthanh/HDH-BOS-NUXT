<template>
  <div class="create__unit">
    <CreatePage @click.native="showModal" />
    <BosModal title="Thêm thông tin phòng ban" :footer="null" width="1030px">
      <a-form
        id="components-form-demo-normal-login"
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
            <a-form-item label="Email" :colon="false">
              <a-input
                v-decorator="[
                  'email',
                  {
                    rules: [
                      {
                        type: 'email',
                        message: 'Email không đúng định dạng',
                      },
                      {
                        required: true,
                        message: 'Nhập email',
                      },
                    ],
                  },
                ]"
                placeholder="Nhập email phòng ban"
                size="large"
              >
              </a-input>
            </a-form-item>
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
            <a-form-item label="Trực thuộc phòng ban" :colon="false">
              <a-tree-select
                v-decorator="[
                  'zoom',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Chọn phong bạn trực thuộc!',
                      },
                    ],
                  },
                ]"
                show-search
                class="w-full"
                :value="value"
                :dropdown-style="dropdownStyle"
                size="large"
                placeholder="Tìm kiếm phòng ban"
                allow-clear
                multiple
                tree-default-expand-all
                @change="onChange"
                @search="onSearch"
                @select="onSelect"
              >
                <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
                  <a-tree-select-node
                    key="0-1-1"
                    value="parent 1-0"
                    title="parent 1-0"
                  >
                    <a-tree-select-node
                      key="random"
                      value="leaf1"
                      title="my leaf"
                    />
                    <a-tree-select-node
                      key="random1"
                      value="leaf2"
                      title="your leaf"
                    />
                  </a-tree-select-node>
                  <a-tree-select-node
                    key="random2"
                    value="parent 1-1"
                    title="parent 1-1"
                  >
                    <a-tree-select-node key="random3" value="sss">
                      <b slot="title" class="text-[#08c]">sss</b>
                    </a-tree-select-node>
                  </a-tree-select-node>
                </a-tree-select-node>
              </a-tree-select>
            </a-form-item>
            <a-form-item label="Khối">
              <a-select
                v-decorator="[
                  'block',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Chọn khối',
                      },
                    ],
                  },
                ]"
                show-search
                placeholder="Lựa chọn khối trực thuộc"
                option-filter-prop="children"
                :filter-option="filterOption"
                size="large"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
              >
                <a-select-option value="jack"> Jack </a-select-option>
                <a-select-option value="lucy"> Lucy </a-select-option>
                <a-select-option value="tom"> Tom </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Mô tả">
              <a-textarea
                v-decorator="['desc']"
                class="min-h-[250px]"
                placeholder="Nhập email phòng ban"
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
import CreatePage from '~/components/pages/CreatePage'

export default {
  components: {
    CreatePage,
    BosModal,
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
    },

    showModal() {
      this.setIsModal(true)
    },

    onChange(value) {
      console.log(value)
      this.value = value
    },
    onSearch() {
      console.log(...arguments)
    },
    onSelect() {
      console.log(...arguments)
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

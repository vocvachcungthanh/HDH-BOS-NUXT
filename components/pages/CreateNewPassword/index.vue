<template>
  <a-form
    id="components-form-demo-normal-password"
    :form="form"
    class="login-form max-w-[489px] w-full text-sm border-t-[1px] border-t-[#ECECEC] pt-14"
    @submit="handleSubmit"
  >
    <a-alert message="Error" type="error" show-icon closable />

    <a-form-item label="Tạo mật khẩu mới" has-feedback>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              { required: true, message: 'Nhập mật khẩu mới của bạn' },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
        size="large"
        placeholder="Nhập mật khẩu mới của bạn"
      >
        <a-icon slot="prefix" type="lock" class="text-[#00000040] text-sm" />
      </a-input>
    </a-form-item>
    <a-form-item label="Nhập lại mật khẩu mới" has-feedback>
      <a-input
        v-decorator="[
          'confirm',
          {
            rules: [
              { required: true, message: 'Vui lòng xác nhận lại mật khẩu' },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        size="large"
        placeholder="Vui lòng xác nhận lại mật khẩu"
      >
        <a-icon slot="prefix" type="lock" class="text-[#00000040] text-sm" />
      </a-input>
    </a-form-item>
    <a-form-item class="flex flex-col">
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button w-full h-10 bg-[#2C6CD5] hover:bg-blue-500"
      >
        Tạo mật khẩu mới
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_password' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$router.push('/login')
        }
      })
    },

    validateToNextPassword(rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },

    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        const message = 'Hai mật khẩu bạn nhập không đồng nhất!'

        callback(message)
      } else {
        callback()
      }
    },
  },
}
</script>

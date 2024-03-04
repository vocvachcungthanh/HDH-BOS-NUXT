<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form max-w-[489px] w-full text-sm border-t-[1px] border-t-[#ECECEC] pt-14"
    @submit="handleSubmit"
  >
    <a-alert
      v-if="message"
      :message="message"
      type="error"
      show-icon
      closable
    />
    <a-form-item label="Tài khoản" :colon="false" label-align="left">
      <a-input
        v-decorator="[
          'user_name',
          {
            rules: [
              { required: true, message: 'Vui lòng nhập tài khoản của bạn!' },
            ],
          },
        ]"
        size="large"
        placeholder="Nhập tài khoản của bạn"
      >
        <a-icon slot="prefix" class="text-[#00000040] text-sm" type="user" />
      </a-input>
    </a-form-item>
    <a-form-item label="Mật khẩu" label-align="left">
      <a-input-password
        v-decorator="[
          'password',
          {
            rules: [
              { required: true, message: 'Vui lòng nhập Mật khẩu của bạn!' },
            ],
          },
        ]"
        type="password"
        size="large"
        placeholder="Nhập mật khẩu của bạn"
      >
        <a-icon slot="prefix" type="lock" class="text-[#00000040] text-sm" />
      </a-input-password>
    </a-form-item>
    <a-form-item class="flex flex-col">
      <NuxtLink
        class="flex justify-end text-[#2C6CD5] font-medium"
        to="/login/recovery-email"
      >
        Quên mật khẩu
      </NuxtLink>
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button w-full h-10 bg-[#2C6CD5] hover:bg-blue-500"
      >
        Đăng nhập
      </a-button>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
        class="flex justify-center items-center text-center text-[#43484E]"
      >
        Lưu mật khẩu và giữ luôn đăng nhập
      </a-checkbox>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.login(values)
        }
      })
    },

    async login(values) {
      await this.$store
        .dispatch('ACT_AUTH_LOGIN', values)
        .then((res) => {
          if (res) {
            this.message = null

            window.location.href = '/'
          }
        })
        .catch((error) => {
          this.message = error
        })
    },
  },
}
</script>

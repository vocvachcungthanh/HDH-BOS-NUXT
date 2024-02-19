<template>
  <a-form
    id="components-form-demo-normal-email"
    :form="form"
    class="login-form max-w-[489px] w-full text-sm border-t-[1px] border-t-[#ECECEC] pt-14"
    @submit="handleSubmit"
  >
    <a-alert
      v-if="message.length > 0"
      :message="message"
      type="error"
      show-icon
      closable
    />
    <a-form-item label="Email">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: 'Email sai định dạng!',
              },
              {
                required: true,
                message: 'Vui lòng nhập E-mail của bạn!',
              },
            ],
          },
        ]"
        size="large"
        placeholder="Nhập email của bạn"
        @change="handleChange"
        @compositionstart="handleChange"
        @compositionend="handleChange"
      >
        <a-icon slot="prefix" class="text-[#00000040] text-sm" type="mail" />
      </a-input>
    </a-form-item>
    <a-form-item class="flex flex-col">
      <a-button
        v-if="isEmpty"
        type="primary"
        html-type="submit"
        class="login-form-button w-full h-10 bg-[#2C6CD5] hover:bg-blue-500"
      >
        Tiếp theo
      </a-button>
      <span
        v-else
        type="button"
        class="login-form-button w-full h-10 bg-[#2C6CD5] hover:bg-blue-500 text-white opacity-50 text-center rounded cursor-not-allowed"
      >
        Tiếp theo
      </span>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      isEmpty: false,
      message: '',
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_email' })
  },

  methods: {
    // Kiểm tra nếu không có lỗi thì sét lại giá trị của isEmpty để bật nút submit gửi email xác nhận
    handleChange(e) {
      this.form.validateFields((err, values) => {
        console.log(values)
        if (!err) {
          // Nếu không có lỗi, đặt lại giá trị của isEmpty
          this.isEmpty = true
        } else {
          this.isEmpty = false
        }
      })
    },

    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store
            .dispatch('ACT_SEN_EMAIL', values)
            .then((res) => {
              if (res) {
                this.$router.push('/login/otp')
              }
            })
            .catch((error) => {
              this.message = error.message
            })
        }
      })
    },
  },
}
</script>

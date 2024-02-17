<template>
  <a-form
    id="components-form-demo-normal-otp"
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
    <a-form-item label="Nhập mã OTP">
      <a-input
        v-decorator="[
          'otp',
          {
            rules: [
              {
                required: true,
                message:
                  'Vui lòng nhập mã OTP đã được gửi qua email bạn vừa nhập!',
              },
            ],
          },
        ]"
        size="large"
        placeholder="Nhập mã OTP tại đây"
        @change="handleChange"
      >
        <a-icon slot="prefix" class="text-[#00000040] text-sm" type="key" />
      </a-input>
      <a-form-item>
        <div class="flex justify-end items-center gap-2 mt-1 font-medium">
          <template v-if="countdown > 0">
            <a-icon
              type="clock-circle"
              class="flex items-center text-base text-[#43484E]"
            />
            <span class="flex text-sm items-center text-[#43484E]">
              {{ countdown }}s</span
            >
          </template>

          <span
            v-else
            class="text-[#2C6CD5] hover:text-blue-400 transition-all cursor-pointer"
            @click="handleSenOtp"
          >
            Gửi lại mã
          </span>
        </div>
      </a-form-item>
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
      countdown: 60,
      intervalId: null,
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_email' })
  },

  mounted() {
    this.setExpirationOpt()
  },

  methods: {
    // Kiểm tra nếu không có lỗi thì sét lại giá trị của isEmpty để bật nút submit gửi email xác nhận
    handleChange(e) {
      this.form.validateFields((err, values) => {
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

      this.$router.push('/login/create-new-password')
    },

    setExpirationOpt() {
      this.intervalId = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--
        } else {
          clearInterval(this.intervalId)
        }
      }, 1000)
    },

    handleSenOtp() {
      this.countdown = 60
      this.intervalId = null
      this.setExpirationOpt()
    },
  },
}
</script>

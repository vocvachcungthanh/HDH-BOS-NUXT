<template>
  <div class="mt-4 flex flex-col items-center">
    <LoginTitle title="Nhập địa chỉ email để khôi phục tài khoản của bạn" />
    <LoginRecoveryEmail />
  </div>
</template>

<script>
import { LoginTitle, LoginRecoveryEmail } from '~/components/pages/Logins'

export default {
  components: { LoginTitle, LoginRecoveryEmail },
}
</script>

<template>
  <div class="mt-4 flex flex-col items-center">
    <LoginTitle
      title="Chào mừng quay trở lại! Hãy đăng nhập để bắt đầu làm việc."
    />
    <LoginForm />
  </div>
</template>

<script>
import { LoginTitle, LoginForm } from '~/components/pages/Logins'

export default {
  components: { LoginTitle, LoginForm },
}
</script>

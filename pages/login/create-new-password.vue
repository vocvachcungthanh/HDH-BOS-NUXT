<template>
  <div class="mt-4 flex flex-col items-center">
    <LoginTitle title="Tạo mật khẩu mới." />
    <CreateNewPassword />
  </div>
</template>

<script>
import { LoginTitle } from '~/components/pages/Logins'
import CreateNewPassword from '~/components/pages/CreateNewPassword'

export default {
  components: { LoginTitle, CreateNewPassword },
}
</script>

<template>
  <div class="mt-4 flex flex-col items-center">
    <LoginTitle :title="title" />
    <LoginOtp />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { LoginTitle, LoginOtp } from '~/components/pages/Logins'

export default {
  components: { LoginTitle, LoginOtp },

  validate({ store, redirect }) {
    const email = store.state.storeRecoveryEMail.email

    if (email) return true

    redirect('/login/recovery-email')
    return false
  },

  computed: {
    title() {
      return `Hãy kiểm tra email <a href="mailto: ${this.getEmail}"> ${this.getEmail} </a> để nhận mã và điền vào ô bên dưới`
    },
    ...mapGetters({
      getEmail: 'GET_EMAIL',
    }),
  },
}
</script>

<template>
  <section class="layout__login flex flex-col justify-between h-screen">
    <div
      class="max-w-[1064px] px-3 py-20 w-full mx-auto flex justify-center items-center flex-1"
    >
      <div class="login__left flex-1 flex justify-center items-center flex-col">
        <LoginThumbail />
        <LoginContacts />
      </div>
      <div class="login__right flex-1 flex justify-center flex-col">
        <LoginHeader />
        <Nuxt />
      </div>
    </div>

    <footer class="h-10">footer</footer>
  </section>
</template>

<script>
import {
  LoginThumbail,
  LoginContacts,
  LoginHeader,
} from '~/components/layouts/Login'
export default {
  components: { LoginThumbail, LoginContacts, LoginHeader },
}
</script>

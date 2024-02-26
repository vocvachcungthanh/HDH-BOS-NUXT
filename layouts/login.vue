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

    <footer
      class="flex items-center justify-between px-5 h-10 bg-[--color-footer-login]"
    >
      <div class="flex items-center gap-6">
        <a href="#" class="text-[--color-primary] hover:text-blue-400">
          Về bos
        </a>
        <a href="#" class="text-[--color-primary] hover:text-blue-400">
          Hướng dẫn sử dụng
        </a>
      </div>
      <div class="flex items-center gap-6 text-[--color-gray-primary]">
        <span> Copyright © BOS </span>
        <a href="#">
          Hotline
          <span class="text-[--color-primary] hover:text-blue-400"
            >19001688
          </span></a
        >

        <a-dropdown :trigger="['click']">
          <a
            class="ant-dropdown-link text-[--color-grary-primary]"
            @click="(e) => e.preventDefault()"
          >
            Tiếng Việt / Vietnamese <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="#">Tiếng Việt / Vietnamese </a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="#">Tiếng Anh / English </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </footer>
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
  middleware: 'login',
}
</script>

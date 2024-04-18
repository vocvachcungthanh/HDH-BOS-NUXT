<template>
  <span
    custom-prop="value"
    class="menu__link flex items-center h-[60px] text-gray-800 w-full transition-all hover:text-violet-600 cursor-pointer"
    :style="styleColor"
    @click="handleLogout"
  >
    <MenuBig v-if="!isToggleMenu" icon="logout" name="Đăng xuất" />
    <MenuSmall v-else icon="logout" name="Đăng xuất" />
  </span>
</template>

<script>
import MenuBig from './MenuBig.vue'
import MenuSmall from './MenuSmall.vue'
import { MwHandle } from '~/libraries/helpers'

export default {
  name: 'LogoutSidebar',

  components: { MenuBig, MenuSmall },

  props: {
    styleColor: {
      type: String,
      default: String,
    },

    isToggleMenu: {
      type: Boolean,
      default: Boolean,
    },
  },

  methods: {
    async handleLogout() {
      await this.$store
        .dispatch('ACT_AUTH_LOGOUT')
        .then((_res) => {
          this.$router.push('/login')
          MwHandle.handleSuccess({
            context: _res,
            placement: 'topLeft',
          })
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          })
        })
    },
  },
}
</script>

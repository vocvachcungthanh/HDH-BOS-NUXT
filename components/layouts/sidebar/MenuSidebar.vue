<template>
  <ul
    theme="light"
    mode="inline"
    :default-selected-keys="[keyMenu]"
    class="menu overflow-x-hidden overflow-y-auto py-7 h-[calc(100vh_-_180.45px)]"
    @click="handleSelected"
  >
    <li v-for="menu in menus" :key="menu.id" class="menu__item w-full">
      <NuxtLink
        :to="menu.link"
        custom-prop="value"
        class="menu__link flex items-center h-[60px] text-gray-800 w-full transition-all rounded-tl-full rounded-bl-full relative before:absolute before:w-5 before:h-5 before:top-[-20px] before:-right-0 before:rounded-br-full before:bg-transparent after:absolute after:w-5 after:h-5 after:bottom-[-20px] after:right-0 after:rounded-tr-full after:bg-transparent pl-1"
        :style="styleColor"
      >
        <MenuBig v-if="!isToggleMenu" :icon="menu.icon" :name="menu.name" />
        <MenuSmall v-else :icon="menu.icon" :name="menu.name" />
      </NuxtLink>
    </li>
    <li
      class="menu__item absolute bottom-0 bg-white flex-col w-[calc(100%_-_0.5rem)]"
    >
      <MenuUser
        :active="isToggleMenu"
        name="Nguyễn Hữu Thành"
        :style-color="styleColor"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
      <span
        custom-prop="value"
        class="menu__link flex items-center h-[60px] text-gray-800 w-full transition-all hover:text-violet-600 cursor-pointer"
        :style="styleColor"
        @click="handleLogout"
      >
        <MenuBig v-if="!isToggleMenu" icon="logout" name="Đăng xuất" />
        <MenuSmall v-else icon="logout" name="Đăng xuất" />
      </span>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import MenuBig from './MenuBig.vue'
import MenuSmall from './MenuSmall.vue'
import MenuUser from './MenuUser.vue'

export default {
  components: { MenuBig, MenuSmall, MenuUser },

  computed: {
    styleColor() {
      return `--bg:rgb(${this.keyMenu + 1}0 ${this.keyMenu + 5}9 ${
        this.keyMenu
      }3${this.keyMenu + 6});`
    },
    ...mapGetters({
      menus: 'GET_MENU',
      keyMenu: 'KEY_MENU',
    }),
    ...mapState({
      isToggleMenu: (state) => state.IS_TOGGLE_MENU,
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
  },

  methods: {
    async handleSelected() {
      await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
    },

    handleLogout() {
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss">
:root {
  --bgMenu: #bfdbfe;
}
.menu {
  margin-bottom: 0;

  &__item {
    display: flex;
    align-items: center;
  }

  &__link {
    &.nuxt-link-exact-active {
      color: var(--bg) !important;
      background-color: var(--bgMenu);

      &::before {
        box-shadow: 5px 5px 0 5px var(--bgMenu);
      }

      &::after {
        box-shadow: 5px -5px 0 5px var(--bgMenu);
      }

      .menu__icon {
        color: white;
        background: var(--bg);
      }
    }
  }

  &__icon {
    width: 40px;
    height: 40px;
  }
}
</style>

<template>
  <a-layout id="components-layout-demo-custom-trigger" theme="light">
    <Sidebar />
    <a-layout :class="getClass">
      <HeaderLayout></HeaderLayout>
      <a-layout-content
        class="layout__content h-svh m-5 p-6 bg-white rounded-2xl"
      >
        <Nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex'
import { Sidebar } from '~/components/layouts/sidebar'
import { HeaderLayout } from '~/components/layouts/Header'

export default {
  components: { Sidebar, HeaderLayout },

  middleware: 'user',

  computed: {
    getClass() {
      return `bg-blue-200 ${this.isToggleMenu ? 'pl-20' : 'pl-[200px]'}`
    },

    ...mapState({
      isToggleMenu: (state) => state.IS_TOGGLE_MENU,
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_GET_MENU')
  },
}
</script>

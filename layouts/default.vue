<template>
  <a-layout id="components-layout-demo-custom-trigger" theme="light">
    <Sidebar />
    <a-layout class="bg-blue-200">
      <HeaderLayout></HeaderLayout>
      <a-layout-content class="layout__content m-5 p-6 bg-white rounded-2xl">
        <Nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { Sidebar } from '~/components/layouts/sidebar'
import { HeaderLayout } from '~/components/layouts/Header'

export default {
  components: { Sidebar, HeaderLayout },

  middleware: 'user',

  async created() {
    await this.$store.dispatch('ACT_GET_MENU')
  },
}
</script>

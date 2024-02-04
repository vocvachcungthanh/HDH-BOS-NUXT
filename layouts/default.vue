<template>
  <a-layout id="components-layout-demo-custom-trigger" theme="light">
    <Sidebar />
    <a-layout>
      <HeaderLayout></HeaderLayout>
      <a-layout-content
        class="layout__content my-6 mx-3 p-6 bg-white leading-[280px]"
      >
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

  async created() {
    await this.$store.dispatch('ACT_GET_MENU')
  },
}
</script>

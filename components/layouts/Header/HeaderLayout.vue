<template>
  <a-layout-header
    class="layout__header bg-white p-0 leading-[4rem] flex items-center"
  >
    <HeaderToggleMenu />
  </a-layout-header>
</template>

<script>
import HeaderToggleMenu from './HeaderToggleMenu.vue'

export default {
  components: {
    HeaderToggleMenu,
  },
}
</script>

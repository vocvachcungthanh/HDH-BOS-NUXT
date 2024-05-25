<template>
  <a-layout-sider
    v-model="isToggleMenu"
    :trigger="null"
    collapsible
    class="h-screen pl-2 fixed left-0 top-0 bottom-0 z-50"
    theme="light"
  >
    <LogoSidebar />
    <MenuSidebar />
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'

import MenuSidebar from './MenuSidebar.vue'
import LogoSidebar from './LogoSidebar.vue'

export default {
  components: { MenuSidebar, LogoSidebar },

  computed: {
    ...mapState({
      isToggleMenu: (state) => state.IS_TOGGLE_MENU,
    }),
  },
}
</script>

<template>
  <a-layout-sider
    v-model="isToggleMenu"
    :trigger="null"
    collapsible
    class="h-screen pl-2 relative"
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

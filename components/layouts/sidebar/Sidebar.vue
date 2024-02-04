<template>
  <a-layout-sider
    v-model="isToggleMenu"
    :trigger="null"
    collapsible
    class="h-screen"
    theme="light"
  >
    <div class="logo h-8 bg-[rgba(255,255,255,0.2)] m-4"></div>
    <MenuSidebar />
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'

import MenuSidebar from './MenuSidebar.vue'

export default {
  components: { MenuSidebar },

  computed: {
    ...mapState({
      isToggleMenu: (state) => state.IS_TOGGLE_MENU,
    }),
  },
}
</script>

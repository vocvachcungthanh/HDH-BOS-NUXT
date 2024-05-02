<template>
  <div class="dashboard__cmn w-full rounded mx-auto">
    <template v-if="menus.length > 0">
      <MenuBarCmd :menus="menus" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import MenuBarCmd from '~/components/common/MenuBar'

export default {
  components: {
    MenuBarCmd,
  },

  computed: {
    ...mapGetters({
      menus: 'GET_MENU',
    }),
  },
}
</script>

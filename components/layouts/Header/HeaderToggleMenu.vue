<template>
  <a-icon
    class="flex text-2xl py-0 px-6 cursor-pointer transition duration-300 hover:text-blue-600"
    :type="isToggleMenu ? 'menu-unfold' : 'menu-fold'"
    @click="handleToggleMenu"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      isToggleMenu: (state) => state.IS_TOGGLE_MENU,
    }),
  },

  methods: {
    handleToggleMenu() {
      this.actIsToggleMenu(!this.isToggleMenu)
    },

    ...mapActions({
      actIsToggleMenu: 'ACT_TOGGLE_MENU',
    }),
  },
}
</script>

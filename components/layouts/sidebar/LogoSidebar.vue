<template>
  <span
    :class="`flex items-center justify-center mb-5 py-3 m-auto h cursor-pointer  ${classLogo}`"
    title="BOS, Đồng hành, đồng bộ, đồng phát"
    @click="handleLogo"
  >
    <img :src="iconLogo" :class="`sidebar__logo flex ${classImgLogo}`" alt="" />
  </span>
</template>

<script>
import { mapState } from 'vuex'

import { ICON_LOGO_BIG, ICON_LOGO_SMALL } from '~/assets/images'

export default {
  data() {
    return {
      iconLogo: ICON_LOGO_BIG,
      classLogo: 'w-[120px]',
      classImgLogo: '',
    }
  },

  computed: {
    ...mapState({
      isToogleMenu: (state) => state.IS_TOGGLE_MENU,
    }),
  },

  watch: {
    isToogleMenu(newTogle) {
      this.iconLogo = newTogle ? ICON_LOGO_SMALL : ICON_LOGO_BIG
      this.classLogo = ` ${
        this.isToogleMenu
          ? 'bg-blue-600  w-10 h-10 mx-auto my-2 rounded-lg'
          : 'w-[120px]'
      }`
      this.classImgLogo = `${newTogle ? 'h-[32px] w-[32px]' : ''}`
    },
  },

  methods: {
    handleLogo() {
      this.$router.push('/')
    },
  },
}
</script>

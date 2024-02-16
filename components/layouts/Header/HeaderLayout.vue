<template>
  <a-layout-header
    class="layout__header bg-white p-0 leading-[4rem] flex items-center justify-between gap-6 px-5 relative"
  >
    <HeaderToggleMenu />
    <HeaderTitle />
    <div class="flex items-cente gap-6">
      <HeaderInstructions />
      <HeaderNotification />
      <HeaderProfile />
    </div>
  </a-layout-header>
</template>

<script>
import HeaderInstructions from './HeaderInstructions'
import HeaderNotification from './HeaderNotification'
import HeaderTitle from './HeaderTitle'
import HeaderToggleMenu from './HeaderToggleMenu'
import HeaderProfile from './HeaderProfile'

export default {
  components: {
    HeaderToggleMenu,
    HeaderTitle,
    HeaderInstructions,
    HeaderNotification,
    HeaderProfile,
  },
}
</script>

<style lang="scss">
.layout__header {
  overflow: unset;
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: rgb(191, 219, 254);
    bottom: -20px;
    left: 0px;
    z-index: 999;
    border-top-left-radius: 999px;
    box-shadow: -10px -10px 0px 10px #fff;
  }
}
</style>

<template>
  <a-layout-header
    class="layout__header bg-white p-0 leading-[4rem] flex items-center justify-between gap-6 px-5"
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

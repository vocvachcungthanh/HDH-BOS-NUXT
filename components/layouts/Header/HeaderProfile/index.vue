<template>
  <a-dropdown :trigger="['click']">
    <span
      class="ant-dropdown-link cursor-pointer inline-flex items-center"
      @click="handleProfile"
    >
      <HeaderProfileAvatar />
    </span>
    <a-menu slot="overlay">
      <a-menu-item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </a-menu-item>
      <a-menu-item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="3"> 3rd menu item </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import HeaderProfileAvatar from './HeaderProfileAvatar.vue'

export default {
  components: { HeaderProfileAvatar },

  methods: {
    handleProfile(e) {
      e.preventDefault()
    },
  },
}
</script>

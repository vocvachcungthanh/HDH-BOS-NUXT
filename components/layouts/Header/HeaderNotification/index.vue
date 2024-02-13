<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click="handleNotitication">
      <a-badge
        :count="10"
        :overflow-count="5"
        :number-style="{
          top: '4px',
        }"
      >
        <BosIcon
          icon="bell"
          class="w-9 h-9 text-xl rounded-full bg-slate-100 hover:bg-blue-100 transition-all"
          placement="top"
          tooltip
          title="Thông báo"
        />
      </a-badge>
    </a>
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
import BosIcon from '~/components/common/BosIcon.vue'

export default {
  components: {
    BosIcon,
  },

  methods: {
    handleNotitication(e) {
      e.preventDefault()
    },
  },
}
</script>

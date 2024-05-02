<template>
  <div
    class="grid gap-10 overflow-x-hidden overflow-y-auto max-h-[calc(100vh_-_130px)]"
  >
    <a-card
      v-for="item in childrenMenu"
      :key="item.id"
      :title="item.name"
      class="rounded-xl border-blue-600 bottom-0 overflow-hidden a-crad__custome"
      :head-style="headStyle"
      :body-style="{ padding: '1rem' }"
    >
      <MenuBarCmd :menus="item.children" :cloums="6" />
    </a-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuBarCmd from '~/components/common/MenuBar'

import { colors } from '~/contacts/colors'

export default {
  components: { MenuBarCmd },

  computed: {
    headStyle() {
      return {
        backgroundColor: colors().bgHeaderPrimary,
      }
    },

    ...mapGetters({
      childrenMenu: 'GET_MENU_CHILDREN',
    }),
  },
}
</script>

<style lang="scss">
.a-crad__custome {
  .ant-card-head-title {
    padding: 14px 0 !important;
    font-size: 16px;
    color: white;
  }
}
</style>

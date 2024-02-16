<template>
  <a-card
    title="Sơ đồ tổ chức"
    class="rounded-2xl bottom-0 overflow-hidden"
    :head-style="headStyle"
    :body-style="{ padding: '1rem' }"
  >
    <MenuBarItemPage />
  </a-card>
</template>

<script>
import MenuBarItemPage from './MenuBarItemPage.vue'

import { colors } from '~/contacts/colors'

export default {
  components: { MenuBarItemPage },

  computed: {
    headStyle() {
      return {
        backgroundColor: colors().bgHeaderPrimary,
      }
    },
  },
}
</script>

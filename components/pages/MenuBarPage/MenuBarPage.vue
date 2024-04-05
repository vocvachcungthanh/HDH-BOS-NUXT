<template>
  <div>
    <a-card
      v-for="item in childrenMenu"
      :key="item.id"
      :title="item.name"
      class="rounded-2xl bottom-0 overflow-hidden"
      :head-style="headStyle"
      :body-style="{ padding: '1rem' }"
    >
      <MenuBarItemPage
        v-for="chi in item.children"
        :key="chi.id"
        :data-item="chi"
      />
    </a-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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

    ...mapGetters({
      childrenMenu: 'GET_MENU_CHILDREN',
    }),
  },
}
</script>

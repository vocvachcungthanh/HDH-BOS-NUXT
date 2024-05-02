<template>
  <div class="page__trash">
    <BreadcrumbPage :nuxt-links="nuxtLinks">
      <PortalTarget name="portal-breadcumb-page" />
    </BreadcrumbPage>

    <div class="page__main mt-6">
      <TableTrashDepartmentPgs />
    </div>
  </div>
</template>

<script>
import BreadcrumbPage from '~/components/pages/BreadcrumbPage'

import TableTrashDepartmentPgs from '~/components/pages/Trash'
export default {
  components: {
    BreadcrumbPage,
    TableTrashDepartmentPgs,
  },

  data() {
    return {
      title: 'Thùng rác',
      nuxtLinks: [
        {
          name: 'Thùng rác',
          link: '/trash',
        },

        {
          name: 'Rác phòng ban',
          link: '/trash/department',
        },

        {
          name: 'Rác vị trí',
          link: '/transh/postion',
        },
      ],
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  created() {
    this.$store.dispatch('ACT_TITLE_HEADER', this.title)
  },

  async beforeCreate() {
    this.$store.commit('SET_TOGGLE_MENU', false)
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
  },
}
</script>

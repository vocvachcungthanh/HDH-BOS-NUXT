<template>
  <div class="page__units">
    <BreadcrumbPage :nuxt-links="nuxtLinks">
      <PortalTarget name="portal-breadcumb-page" />
      <UploadPage />
      <DownloadPage />
      <CreatePostionPgs />
    </BreadcrumbPage>

    <div class="page__main mt-6">
      <TablePostionPgs />
    </div>
  </div>
</template>

<script>
import BreadcrumbPage from '~/components/pages/BreadcrumbPage'
import DownloadPage from '~/components/pages/DownloadPage'
import UploadPage from '~/components/pages/UploadPage'

import {
  CreatePostionPgs,
  TablePostionPgs,
} from '~/components/pages/HumanResources/Postions'

export default {
  components: {
    BreadcrumbPage,
    DownloadPage,
    UploadPage,
    CreatePostionPgs,
    TablePostionPgs,
  },

  data() {
    return {
      title: 'Nhân sự - Danh sách vị trí',
      nuxtLinks: [
        {
          name: 'Xem danh sách',
          link: '/human-resources/positions',
        },

        {
          name: 'Sơ đồ tổ chức',
          link: '/human-resources/organization-chart',
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

  beforeCreate() {
    this.$store.commit('SET_TOGGLE_MENU', false)
  },
}
</script>

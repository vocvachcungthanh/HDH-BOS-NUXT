<template>
  <div class="page__units">
    <BreadcrumbPage :nuxt-links="nuxtLinks">
      <UploadPage />
      <DownloadPage />
      <CreatePostion />
    </BreadcrumbPage>

    <div class="page__main mt-6">
      <TablePostion />
    </div>
  </div>
</template>

<script>
import BreadcrumbPage from '~/components/pages/BreadcrumbPage'
import DownloadPage from '~/components/pages/DownloadPage'
import UploadPage from '~/components/pages/UploadPage'

import {
  CreatePostion,
  TablePostion,
} from '~/components/pages/HumanResources/Postions'

export default {
  components: {
    BreadcrumbPage,
    DownloadPage,
    UploadPage,
    CreatePostion,
    TablePostion,
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
}
</script>

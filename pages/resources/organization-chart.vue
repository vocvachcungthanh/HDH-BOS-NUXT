<template>
  <div class="page__organization-chart">
    <BreadcrumbPage :nuxt-links="nuxtLinks">
      <UploadPage />
      <DownloadPage />
      <CreateUnint />
    </BreadcrumbPage>
  </div>
</template>

<script>
import BreadcrumbPage from '~/components/pages/BreadcrumbPage'
import DownloadPage from '~/components/pages/DownloadPage'
import UploadPage from '~/components/pages/UploadPage'
import { CreateUnint } from '~/components/pages/Resources/Units'

export default {
  components: {
    BreadcrumbPage,
    DownloadPage,
    UploadPage,
    CreateUnint,
  },

  data() {
    return {
      title: 'Danh sách đơn vị',
      nuxtLinks: [
        {
          name: 'Xem danh sách',
          link: '/resources/units',
        },

        {
          name: 'Sơ đồ tổ chức',
          link: '/resources/organization-chart',
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

<template>
  <div class="page__units">
    <BreadcrumbPage :nuxt-links="nuxtLinks">
      <PortalTarget name="portal-breadcumb-unit" />
      <UploadPage />
      <DownloadPage />
      <CreateUnit />
    </BreadcrumbPage>
    <div class="page__main mt-6">
      <TableUnit />
    </div>
  </div>
</template>

<script>
import BreadcrumbPage from '~/components/pages/BreadcrumbPage'
import DownloadPage from '~/components/pages/DownloadPage'
import UploadPage from '~/components/pages/UploadPage'
import { TableUnit, CreateUnit } from '~/components/pages/HumanResources/Units'

export default {
  components: {
    BreadcrumbPage,
    DownloadPage,
    UploadPage,
    CreateUnit,
    TableUnit,
  },

  data() {
    return {
      title: 'Nhân sự - Danh sách đơn vị',
      nuxtLinks: [
        {
          name: 'Xem danh sách',
          link: '/human-resources/units',
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

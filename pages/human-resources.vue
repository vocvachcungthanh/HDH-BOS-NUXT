<template>
  <div class="page__human-resources">
    <BreadcrumbPage :nuxt-links="nuxtLinks">
      <PortalTarget name="portal-breadcumb-unit" />
      <PortalTarget name="portal-slicer-unit" />
      <UploadPage />
      <DownloadPage />
      <CreateHrPgs />
    </BreadcrumbPage>
    <SlicerHrPgs />

    <nuxt-child />
  </div>
</template>

<script>
import BreadcrumbPage from '~/components/pages/BreadcrumbPage'
import DownloadPage from '~/components/pages/DownloadPage'
import UploadPage from '~/components/pages/UploadPage'

import CreateHrPgs from '~/components/pages/HumanResources/CreateHr'

import SlicerHrPgs from '~/components/pages/HumanResources/SlicerHr'

export default {
  components: {
    BreadcrumbPage,
    DownloadPage,
    UploadPage,
    CreateHrPgs,
    SlicerHrPgs,
  },

  data() {
    return {
      title: 'Nhân sự - Danh sách đơn vị',
      nuxtLinks: [
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

  // eslint-disable-next-line require-await
  async beforeCreate() {
    this.$store.commit('SET_TOGGLE_MENU', false)
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
  },

  created() {
    this.$store.dispatch('ACT_TITLE_HEADER', this.title)

    const path = this.$route.path

    this.nuxtLinks.unshift({
      name: 'Xem danh sách',
      link: path,
    })
  },
}
</script>

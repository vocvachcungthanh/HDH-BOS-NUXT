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

export default {
  components: {
    BreadcrumbPage,
    DownloadPage,
    UploadPage,
  },

  data() {
    return {
      title: 'Nhân sự - Sơ đồ tổ chức',
      nuxtLinks: [
        {
          name: 'Xem danh sách',
          link: null,
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

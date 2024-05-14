<template>
  <div class="page__human-resources">
    <BreadcrumbPage :nuxt-links="nuxtLinks">
      <PortalTarget name="portal-breadcumb-hr" />
      <PortalTarget name="portal-slicer-unit" />
      <UploadPage />
      <DownloadPage />
      <CreateHrPgs />
    </BreadcrumbPage>
    <SlicerCmn v-if="getSlicer.length > 0" :slicer="getSlicer" />
    <nuxt-child />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import BreadcrumbPage from '~/components/pages/BreadcrumbPage'
import DownloadPage from '~/components/pages/DownloadPage'
import UploadPage from '~/components/pages/UploadPage'

import CreateHrPgs from '~/components/pages/HumanResources/CreateHr'
import SlicerCmn from '~/components/common/Slicer'

export default {
  components: {
    BreadcrumbPage,
    DownloadPage,
    UploadPage,
    CreateHrPgs,
    SlicerCmn,
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

  computed: {
    getSlicer() {
      const path = this.$route.path

      switch (path) {
        case '/human-resources/units':
          return this.slicerUnit
        case '/human-resources/positions':
          return this.slicerPostion
        default:
          break
      }

      return this.slicerUnit
    },

    ...mapGetters({
      slicerUnit: 'GET_SLICER_UNITS',
      slicerPostion: 'GET_SLICER_POSTION',
    }),
  },

  async beforeCreate() {
    this.$store.commit('SET_TOGGLE_MENU', false)
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
    await this.$store.dispatch('ACT_SLIDER_LIST')
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

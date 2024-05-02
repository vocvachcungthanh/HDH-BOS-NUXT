<template>
  <div class="page__staff">
    <BreadcrumbPage :nuxt-links="nuxtLinks">
      <PortalTarget name="portal-breadcumb-unit" />
      <PortalTarget name="portal-slicer-unit" />
      <UploadPage />
      <DownloadPage />
      <CreateUnitPgs />
    </BreadcrumbPage>
    <SettingSlicerUnitPgs />
    <SlicerUnitPgs />
    <div class="page__main mt-3">
      <TableUnitPgs />
    </div>
  </div>
</template>

<script>
import BreadcrumbPage from '~/components/pages/BreadcrumbPage'
import DownloadPage from '~/components/pages/DownloadPage'
import UploadPage from '~/components/pages/UploadPage'
import {
  TableUnitPgs,
  CreateUnitPgs,
} from '~/components/pages/HumanResources/Units'

import {
  SlicerUnitPgs,
  SettingSlicerUnitPgs,
} from '~/components/pages/HumanResources/Units/SlicerUnit'

export default {
  components: {
    BreadcrumbPage,
    DownloadPage,
    UploadPage,
    CreateUnitPgs,
    TableUnitPgs,
    SlicerUnitPgs,
    SettingSlicerUnitPgs,
  },

  data() {
    return {
      title: 'Nhân sự ',
      nuxtLinks: [
        {
          name: 'Xem danh sách',
          link: '/human-resources/staff',
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

  // eslint-disable-next-line require-await
  async beforeCreate() {
    this.$store.commit('SET_TOGGLE_MENU', false)
    await this.$store.dispatch('ACT_SET_KEY_MENU', this.$route.path)
    try {
      this.$nextTick(async () => {
        this.$nuxt.$loading.start()
        await Promise.all([
          this.$store.dispatch('ACT_TRASH_DEPARTMENT_COUNT'),
          this.$store.dispatch('ACT_SLIDER_UNIT'),
          this.$store.dispatch('ACT_GET_UNIT'),
        ])
        this.$nuxt.$loading.finish()
      })
    } catch (error) {
      // Xử lý lỗi ở đây nếu cần
      console.error('Có lỗi xảy ra:', error)
    }
  },

  created() {
    this.$store.dispatch('ACT_TITLE_HEADER', this.title)
  },
}
</script>

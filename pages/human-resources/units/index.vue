<template>
  <div class="page__units">
    <BreadcrumbPage :nuxt-links="nuxtLinks">
      <PortalTarget name="portal-breadcumb-unit" />
      <PortalTarget name="portal-slicer-unit" />
      <UploadPage />
      <DownloadPage />
      <CreateUnit />
    </BreadcrumbPage>
    <SettingSlicerUnitPgs />
    <SlicerUnitPgs />
    <div class="page__main mt-3">
      <TableUnit />
    </div>
  </div>
</template>

<script>
import BreadcrumbPage from '~/components/pages/BreadcrumbPage'
import DownloadPage from '~/components/pages/DownloadPage'
import UploadPage from '~/components/pages/UploadPage'
import { TableUnit, CreateUnit } from '~/components/pages/HumanResources/Units'

import {
  SlicerUnitPgs,
  SettingSlicerUnitPgs,
} from '~/components/pages/HumanResources/Units/SlicerUnit'

export default {
  components: {
    BreadcrumbPage,
    DownloadPage,
    UploadPage,
    CreateUnit,
    TableUnit,
    SlicerUnitPgs,
    SettingSlicerUnitPgs,
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

  // eslint-disable-next-line require-await
  async beforeCreate() {
    try {
      this.$nextTick(async () => {
        this.$nuxt.$loading.start()
        await Promise.all([
          this.$store.dispatch('ACT_TRASH_DEPARTMENT_COUNT'),
          this.$store.dispatch('ACT_GET_UNIT'),
          this.$store.dispatch('ACT_SLIDER_UNIT'),
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

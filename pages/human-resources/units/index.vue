<template>
  <div class="page__units mt-3">
    <TableUnitPgs />
  </div>
</template>

<script>
import { TableUnitPgs } from '~/components/pages/HumanResources/Units'

export default {
  components: {
    TableUnitPgs,
  },
  // eslint-disable-next-line require-await
  async beforeCreate() {
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
}
</script>

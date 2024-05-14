<template>
  <div class="flex items-center">
    <SearchCmn @on-key-search="handleSearch" @no-key="handleNoKey" />
  </div>
</template>

<script>
import { SearchCmn } from '~/components/common/Search'
import { PAGINATE } from '~/contacts'
export default {
  components: {
    SearchCmn,
  },

  data() {
    return {
      pagination: PAGINATE,
    }
  },

  methods: {
    handlePaginationChange(pagination) {
      pagination.page = pagination.current_page

      this.getPostion(pagination)
    },

    handleSearch(keySearch) {
      this.$nextTick(async () => {
        this.$nuxt.$loading.start()
        await this.$store.dispatch('ACT_SEARCH_POSTION', {
          keySearch,
          ...this.pagination,
        })
        this.$nuxt.$loading.finish()
      })
    },

    handleNoKey() {
      this.$nextTick(async () => {
        this.$nuxt.$loading.start()
        await this.$store.dispatch('ACT_GET_POSTION', this.pagination)
        this.$nuxt.$loading.finish()
      })
    },
  },
}
</script>

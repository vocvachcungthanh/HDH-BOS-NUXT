<template>
  <div class="flex items-center">
    <SearchCmn @on-key-search="handleSearch" @no-key="handleNoKey" />
  </div>
</template>

<script>
import { SearchCmn } from '~/components/common/Search'

export default {
  components: {
    SearchCmn,
  },

  methods: {
    handleSearch(keySearch) {
      this.$nextTick(async () => {
        this.$nuxt.$loading.start()
        await this.$store.dispatch('ACT_SEARCH_STAFF', keySearch)
        this.$nuxt.$loading.finish()
      })
    },

    handleNoKey() {
      this.$nextTick(async () => {
        this.$nuxt.$loading.start()
        await this.$store.dispatch('ACT_GET_STAFF')
        this.$nuxt.$loading.finish()
      })
    },
  },
}
</script>

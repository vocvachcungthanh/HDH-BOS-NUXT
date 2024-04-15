<template>
  <SearchCommon @on-key-search="handleSearch" />
</template>

<script>
import SearchCommon from '~/components/common/SearchCommon.vue'

export default {
  components: {
    SearchCommon,
  },

  methods: {
    handleSearch(value) {
      console.log(value)
    },
  },
}
</script>

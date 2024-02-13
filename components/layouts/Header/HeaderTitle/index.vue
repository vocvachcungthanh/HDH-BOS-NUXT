<template>
  <h1 class="mb-0 font-bold text-blue-600 text-xl uppercase">
    {{ title }}
  </h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      title: (state) => state.TITLE,
    }),
  },
}
</script>

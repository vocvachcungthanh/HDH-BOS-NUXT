<template>
  <a :href="link" class="ml-auto">
    <BosIcon
      icon="link"
      title="click để xem tài liệu hướng dẫn"
      :tooltip="true"
      class="w-9 h-9 text-xl rounded-full bg-slate-100 hover:bg-blue-100 transition-all"
    />
  </a>
</template>

<script>
import { mapState } from 'vuex'

import BosIcon from '~/components/common/BosIcon.vue'

export default {
  components: {
    BosIcon,
  },

  computed: {
    ...mapState({
      link: (state) => state.LINK_INSTRUCTIONS,
    }),
  },
}
</script>

<template>
  <a :href="link" class="ml-auto">
    <BosIconCmn
      icon="link"
      title="click để xem tài liệu hướng dẫn"
      :tooltip="true"
      class="w-9 h-9 text-xl rounded-full bg-slate-100 hover:bg-blue-100 transition-all"
    />
  </a>
</template>

<script>
import { mapState } from 'vuex'

import BosIconCmn from '~/components/common/BosIcon'

export default {
  components: {
    BosIconCmn,
  },

  computed: {
    ...mapState({
      link: (state) => state.LINK_INSTRUCTIONS,
    }),
  },
}
</script>

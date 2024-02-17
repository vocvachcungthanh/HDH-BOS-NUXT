<template>
  <div
    class="flex justify-center items-center max-w-[467px] w-full h-[348px] overflow-hidden relative"
  >
    <inline-svg
      :src="THUMBNAIL_LOGIN"
      class="w-full h-full absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"
    />
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

import { THUMBNAIL_LOGIN } from '~/assets/images'

export default {
  components: {
    InlineSvg,
  },

  data() {
    return {
      THUMBNAIL_LOGIN,
    }
  },
}
</script>

<template>
  <div class="w-full flex justify-center">
    <div
      class="flex justify-center items-center max-w-40 w-full h-12 overflow-hidden relative"
    >
      <inline-svg
        :src="logo"
        class="w-full h-full absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"
      />
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

import { ICON_LOGO_BIG } from '~/assets/images'

export default {
  components: {
    InlineSvg,
  },

  data() {
    return {
      logo: ICON_LOGO_BIG,
    }
  },
}
</script>

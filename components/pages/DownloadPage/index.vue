<template>
  <div class="">
    <BosIconCmn
      title="Tải xuống"
      icon="cloud-download"
      :tooltip="true"
      placement="bottom"
      class="flex items-center justify-center w-8 h-8 font-semibold text-2xl cursor-pointer hover:text-blue-500"
    />
  </div>
</template>

<script>
import BosIconCmn from '~/components/common/BosIcon'

export default {
  components: {
    BosIconCmn,
  },
}
</script>

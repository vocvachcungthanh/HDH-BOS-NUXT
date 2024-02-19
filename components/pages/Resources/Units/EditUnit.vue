<template>
  <BosIcon
    icon="edit"
    title="Sửa phòng ban"
    :tooltip="true"
    placement="top"
    class="w-8 h-8 text-2xl cursor-pointer hover:text-orange-500"
  />
</template>

<script>
import BosIcon from '~/components/common/BosIcon.vue'
export default {
  components: {
    BosIcon,
  },
}
</script>

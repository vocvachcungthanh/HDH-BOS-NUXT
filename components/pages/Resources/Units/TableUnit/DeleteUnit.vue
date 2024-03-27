<template>
  <BosIcon
    icon="delete"
    title="Xóa Phòng ban"
    :tooltip="true"
    placement="top"
    class="w-8 h-8 text-2xl cursor-pointer hover:text-red-600"
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

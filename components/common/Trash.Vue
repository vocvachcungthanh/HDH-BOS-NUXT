<template>
  <NuxtLink :to="link">
    <BosIcon
      icon="delete"
      :title="title"
      :tooltip="true"
      class="w-9 h-9 text-xl rounded-full bg-slate-100 hover:bg-blue-100 transition-all"
    />
  </NuxtLink>
</template>

<script>
import BosIcon from '~/components/common/BosIcon.vue'

export default {
  name: 'TrashCommon',

  props: {
    link: {
      type: String,
      default: '/trash',
    },

    title: {
      type: String,
      default: 'Thùng rác',
    },
  },

  components: {
    BosIcon,
  },
}
</script>

<template>
  <NuxtLink :to="link">
    <BosIcon
      class="w-9 h-9 text-xl rounded-full bg-slate-100 hover:bg-blue-100 transition-all"
      icon="delete"
      :title="title"
      :tooltip="true"
    />
  </NuxtLink>
</template>

<script>
import BosIcon from '~/components/common/BosIcon.vue'

export default {
  name: 'TrashCmn',

  components: {
    BosIcon,
  },

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
}
</script>

<template>
  <NuxtLink :to="link">
    <BosIconCmn
      class="w-9 h-9 text-xl rounded-full bg-slate-100 hover:bg-blue-100 transition-all"
      icon="delete"
      :title="title"
      :tooltip="true"
    />
  </NuxtLink>
</template>

<script>
import BosIconCmn from '~/components/common/BosIcon'

export default {
  name: 'TrashCmn',

  components: {
    BosIconCmn,
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

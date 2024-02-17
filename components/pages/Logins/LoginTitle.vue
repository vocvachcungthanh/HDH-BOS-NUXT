<template>
  <h3 v-html="title" class="text-[#43484E] font-medium pb-4"></h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: String,
    },
  },
}
</script>

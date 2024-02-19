<template>
  <h3 class="text-[#43484E] font-medium pb-4" :html="title"></h3>
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

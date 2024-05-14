<template>
  <div
    v-if="loading"
    class="flex fixed top-0 bottom-0 right-0 left-0 w-full h-full z-[10000] p-4 text-center text-5xl font-sans justify-center items-center"
  >
    <a-space class="flex text-5xl">
      <a-spin size="small" />
      <a-spin />
      <a-spin size="large" />
    </a-space>
  </div>
</template>
<script>
export default {
  name: 'LoadingCommon',

  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

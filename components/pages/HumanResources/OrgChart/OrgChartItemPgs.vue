<template>
  <a
    :href="dataItem.link"
    class="bg-[#E6F4FF] relative flex items-cente mx-auto text-gray-900"
  >
    <span class="p-2 flex-auto flex items-center">
      {{ dataItem.name }}
    </span>
    <span
      class="chart__note--right w-10 h-10 border-l border-[#c9ddff] p-1 flex items-center justify-center flex-shrink-0"
    >
      <template v-if="dataItem.total">
        {{ dataItem.total }}
      </template>
      <img v-if="dataItem.img" :src="dataItem.img" alt="" />
    </span>
  </a>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

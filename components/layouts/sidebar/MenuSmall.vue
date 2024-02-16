<template>
  <a-tooltip placement="right">
    <template slot="title">
      {{ name }}
    </template>
    <a-icon
      class="menu__icon flex justify-center items-center text-2xl w-[52px] h-[52px] rounded-full"
      :type="icon"
    />
  </a-tooltip>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: String,
    },

    icon: {
      type: String,
      default: String,
    },
  },
}
</script>

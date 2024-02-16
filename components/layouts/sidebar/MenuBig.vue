<template>
  <span class="flex items-center gap-x-2">
    <a-icon
      class="menu__icon flex justify-center items-center text-2xl w-[52px] h-[52px] rounded-full"
      :type="icon"
    />
    <span class="menu__text">{{ name }}</span>
  </span>
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

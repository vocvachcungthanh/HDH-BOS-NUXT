<template>
  <span
    custom-prop="value"
    class="menu__link flex items-center h-[60px] text-gray-800 w-full transition-all hover:text-violet-600 cursor-pointer"
    :style="styleColor"
  >
    <a-tooltip v-if="active" placement="right">
      <template slot="title">
        {{ name }}
      </template>
      <span
        class="flex w-[52px] h-[52px] rounded-full overflow-hidden border border-cyan-50 p-2"
      >
        <img :src="src" alt="" />
      </span>
    </a-tooltip>
    <template v-else>
      <span
        class="flex w-[52px] h-[52px] rounded-full overflow-hidden border border-cyan-50 p-2"
      >
        <img :src="src" alt="" />
      </span>
      <span class="menu__text">
        {{ name }}
      </span>
    </template>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: String,
    },

    src: {
      type: String,
      default: String,
    },

    active: {
      type: Boolean,
      default: Boolean,
    },

    styleColor: {
      type: String,
      default: String,
    },
  },
}
</script>

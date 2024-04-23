<template>
  <span class="inline-flex items-center justify-center">
    <a-tooltip v-if="tooltip" :placement="placement" :class="className">
      <template slot="title">
        {{ title }}
      </template>
      <a-icon :type="icon"> </a-icon>
    </a-tooltip>

    <a-icon v-else :type="icon"> </a-icon>
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    icon: {
      type: String,
      default: '',
    },

    tooltip: {
      type: Boolean,
      default: false,
    },

    className: {
      type: String,
      default: String,
    },

    placement: {
      type: String,
      default: 'topRight',
    },
  },
}
</script>

<style lang="scss">
.ant-tooltip-inner {
  font-size: 12px;
}
</style>

<template>
  <div class="bos_card">
    <div :class="renderClassHeader">
      <span class="text-left flex gap-2 items-center">
        <a-icon v-if="iconCaption" :type="iconCaption" />
        {{ caption }}
      </span>
      <slot name="bos-card-right"></slot>
    </div>
    <div :class="renderClassBody">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BosCardComn',

  props: {
    caption: {
      type: String,
      default: '',
    },

    iconCaption: {
      type: String,
      default: '',
    },

    classHeader: {
      type: String,
      default: 'p-2',
    },

    classBody: {
      type: String,
      default: '',
    },
  },

  computed: {
    renderClassHeader() {
      return `bg-blue-500 rounded-t text-white flex items-center ${this.classHeader}`
    },

    renderClassBody() {
      return `slicer__body p-2 border border-blue-500 rounded-b min-h-[100px] grid gap-2 ${this.classBody}`
    },
  },
}
</script>

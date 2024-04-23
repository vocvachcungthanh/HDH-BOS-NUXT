<template>
  <div>
    <Portal to="portal-slicer-unit">
      <BosIcon
        :title="getTitle"
        :icon="getIcon"
        :tooltip="true"
        placement="top"
        :class="classIconSetting"
        @click.native="setToggle"
      />
    </Portal>
    <Transition
      enter-active-class="animate__animated animate__backInLeft"
      leave-active-class="animate__animated animate__backOutLeft"
      appear
    >
      <div v-show="toggle" class="setting__slider my-3">
        <BosCardCmn
          caption="Thiết lập bộ lọc"
          icon-caption="filter"
          class-body="grid-cols-5"
        >
          <slot />
        </BosCardCmn>
      </div>
    </Transition>
  </div>
</template>

<script>
import BosIcon from '~/components/common/BosIcon'
import 'animate.css'
import { BosCardCmn } from '~/components/common/BosCard'
export default {
  name: 'SlicerSettingCommon',

  components: {
    BosCardCmn,
    BosIcon,
  },

  data() {
    return {
      toggle: false,
    }
  },

  computed: {
    classIconSetting() {
      return `flex items-center justify-center w-8 h-8 font-semibold text-2xl cursor-pointer hover:text-blue-500 ${
        this.toggle ? 'text-red-500 hover:text-red-400' : ''
      }`
    },

    getTitle() {
      return this.toggle
        ? 'Click để đóng cài đặt bộ lọc'
        : 'click để mở cài đặt bổ lọc'
    },

    getIcon() {
      return this.toggle ? 'close' : 'setting'
    },
  },

  methods: {
    setToggle() {
      this.toggle = !this.toggle
    },
  },
}
</script>

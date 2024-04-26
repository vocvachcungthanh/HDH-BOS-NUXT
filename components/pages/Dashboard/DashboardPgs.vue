<template>
  <div
    class="dashboard__cmn p-6 max-w-[1366px] w-full rounded shadow-blue-100 shadow-sm border border-blue-50 mx-auto"
  >
    <div class="grid grid-cols-4 gap-2 justify-center">
      <div
        class="item p-[1.5px] rounded-lg overflow-hidden w-full linear-gradient"
      >
        <div
          class="py-6 px-7 bg-white w-full rounded-lg flex items-center flex-col"
        >
          <h3 class="text-[#43484E] font-medium text-base mb-3">Nhân sự</h3>
          <span
            class="flex items-center justify-center p-1 w-14 h-14 overflow-hidden bg-gradient-to-t gradient rounded-full linear-gradient"
          >
            <inline-svg
              :src="Icon"
              class="w-full h-full absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"
            />
          </span>

          <ul class="mt-6 tex-[#212529]">
            <li class="py-2">
              <NuxtLink to="/"> Sơ đồ tổ chức </NuxtLink>
            </li>
            <li class="py-2">
              <NuxtLink to="/"> Cơ chế lương thưởng </NuxtLink>
            </li>
            <li class="py-2">
              <NuxtLink to="/"> Bảng lương </NuxtLink>
            </li>
            <li class="py-2">
              <NuxtLink to="/">Định biên nhân sự</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  components: {
    InlineSvg,
  },

  data() {
    return {
      Icon: '',
    }
  },
}
</script>

<style lang="scss">
.linear-gradient {
  background: linear-gradient(
    180deg,
    #2c6cd5 41.77%,
    rgba(44, 108, 213, 0.3) 162.29%
  ) !important;
}
</style>

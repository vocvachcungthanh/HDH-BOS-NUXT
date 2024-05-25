<template>
  <NuxtLink
    :to="dataItem.link"
    tag="div"
    class="rounded-xl overflow-hidden w-full cursor-pointer border border-with-[2px] border-blue-600 item-link keyframe_box hover:bottom-with-[0px]"
  >
    <div
      class="pt-9 w-full h-full rounded-xl overflow-hidden flex items-center flex-col gap-5"
    >
      <span
        class="icon__ flex bg-white items-center justify-center p-1 w-20 h-20 overflow-hidden bg-gradient-to-t gradient rounded-full text-4xl text-blue-600"
      >
        <BosIconCmn :icon="dataItem.icon" />
      </span>
      <h3
        class="flex-auto px-2 text-center bg-white w-full py-3 text-blue-600 font-medium text-lg border-t-2 border-t-blue-600 capitalize mb-0 mt-auto"
      >
        {{ dataItem.name }}
      </h3>
    </div>
  </NuxtLink>
</template>

<script>
import BosIconCmn from '~/components/common/BosIcon'

export default {
  components: {
    BosIconCmn,
  },

  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  computed: {
    getClass() {
      return `grid grid-cols-${this.cloums} ${this.distance}`
    },
  },
}
</script>

<style lang="scss">
.item-link {
  transition: 0.3s all;

  background: linear-gradient(
    180deg,
    #2c6cd5 41.77%,
    rgba(44, 108, 213, 0.3) 162.29%
  );

  &:hover {
    background: white;
    transition: 0.3s all;
    transform: translateY(-10px);

    .icon__ {
      transition: 0.3s all;
      background: linear-gradient(
        180deg,
        #2c6cd5 41.77%,
        rgba(44, 108, 213, 0.3) 162.29%
      ) !important;
      color: white !important;
    }

    h3 {
      transition: 0.3s all;
      background: linear-gradient(
        180deg,
        #2c6cd5 41.77%,
        rgba(44, 108, 213, 0.3) 162.29%
      );

      color: white !important;
    }
  }
  .icon__,
  h3 {
    width: 100%;
    transition: 0.3s all;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
    -webkit-line-clamp: 2;
    max-height: 80px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
}
</style>

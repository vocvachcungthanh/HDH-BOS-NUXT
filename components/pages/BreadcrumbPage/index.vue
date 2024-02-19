<template>
  <div class="breadcurmb__page flex items-center justify-between">
    <div class="font-medium flex items-center gap-4">
      <template v-if="nuxtLinks.length > 0">
        <NuxtLink
          v-for="(item, index) in nuxtLinks"
          :key="index"
          class="text-[--color-primary-default] hover:text-blue-500"
          :to="item.link"
        >
          {{ item.name }}
        </NuxtLink>
      </template>
    </div>
    <div class="flex items-center gap-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nuxtLinks: {
      type: Array,
      default: Array,
    },
  },
}
</script>

<style lang="scss">
.breadcurmb__page {
  .nuxt-link {
    &-exact-active {
      color: var(--color-primary) !important;
      position: relative;
      transition: 0.5s all;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -4px;
        width: 100%;
        height: 2px;
        background-color: var(--color-primary);
      }
    }
  }
}
</style>

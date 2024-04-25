<template>
  <a-card-grid
    class="text-center flex justify-center rounded-2xl float-none w-full p-0"
  >
    <NuxtLink
      :to="dataItem.link"
      class="flex items-center justify-center flex-col gap-1 w-full p-3"
    >
      <a-icon :type="dataItem.icon" class="flex text-5xl" />
      <span>{{ dataItem.name }}</span>
    </NuxtLink>
  </a-card-grid>
</template>

<script>
export default {
  name: 'MenuItemPage',

  props: {
    dataItem: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
.ant-card {
  &-head {
    color: #fff;
    border-radius: 16px 16px 0px 0px;
    font-size: 19px;
  }

  &-body {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    gap: 20px;

    @media (max-width: 1536px) {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }

    @media (max-width: 1366px) {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }

    &::after,
    &::before {
      display: none;
    }
  }
}
</style>

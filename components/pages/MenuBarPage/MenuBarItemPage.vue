<template>
  <a-card-grid
    class="text-center flex justify-center rounded-xl float-none w-full p-0"
  >
    <NuxtLink
      to="/"
      class="flex items-center justify-center flex-col gap-1 w-full py-3"
    >
      <a-icon type="read" class="flex text-5xl" />
      <span> Danh sách đơn vị </span>
    </NuxtLink>
  </a-card-grid>
</template>

<style lang="scss">
.ant-card {
  &-head {
    color: #fff;
    border-radius: 2px 2px 0px 0px;
    font-size: 19px;
  }

  &-body {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    gap: 20px;

    &::after,
    &::before {
      display: none;
    }
  }
}
</style>

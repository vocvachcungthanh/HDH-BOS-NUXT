<template>
  <div class="table__detail">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    totalTd: {
      type: Number,
      default: Number,
    },
  },

  mounted() {
    const tdColspan = document.querySelector(
      `td[colspan="${this.totalTd - 1}"]`
    )
    if (tdColspan) {
      tdColspan.setAttribute('colspan', this.totalTd)
    }
  },
}
</script>

<style lang="scss">
.ant-table-expanded-row {
  background-color: var(--bg-table-header) !important;
  & > td:first-child {
    display: none;
  }
}
</style>

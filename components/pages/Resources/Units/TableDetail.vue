<template>
  <div class="table__detail">
    <a-tabs default-active-key="2">
      <a-tab-pane key="1">
        <span slot="tab">
          <a-icon type="apple" />
          Tab 1
        </span>
        Tab 1
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <a-icon type="android" />
          Tab 2
        </span>
        Tab 2
      </a-tab-pane>
      <a-button slot="tabBarExtraContent"> Extra Action </a-button>
    </a-tabs>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },
}
</script>

<template>
  <div ref="orgchart" class="orgchart-container"></div>
</template>

<script>
import OrgChart from '@balkangraph/orgchart.js'

export default {
  name: 'OrgChartComponent',
  props: {
    nodes: {
      type: Array,
      required: true,
    },
  },
  watch: {
    nodes(newNodes) {
      this.chart.load(newNodes)
    },
  },
  mounted() {
    this.chart = new OrgChart(this.$refs.orgchart, {
      nodes: this.nodes,
      enableSearch: false,
      nodeBinding: {
        field_0: 'name',
        field_1: 'title',
        field_2: 'count',
      },
      nodeTemplate: function (node) {
        return `
            <div class="node-template">
              <div class="node-name">${node}</div>
              <div class="node-title">${node}</div>
              <div class="node-count">${node}</div>
            </div>
          `
      },
    })
  },
}
</script>

<style scoped lang="scss">
.orgchart-container {
  width: 100%;
  height: 100%;
}

.node-template {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.node-name {
  font-weight: bold;
}

.node-title {
  margin-top: 5px;
  font-size: 14px;
}

.node-count {
  margin-top: 5px;
  font-size: 12px;
  color: #888;
}
</style>

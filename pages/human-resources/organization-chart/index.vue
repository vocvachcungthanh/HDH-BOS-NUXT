<template>
  <div id="tree" ref="tree"></div>
</template>

<script>
import OrgChart from '@balkangraph/orgchart.js'

export default {
  name: 'Tree',
  data() {
    return {
      nodes: [
        {
          id: 1,
          name: 'Ban Giám Đóc',
          title: 'CEO',
          img: 'https://cdn.balkan.app/shared/2.jpg',
        },
        {
          id: 2,
          pid: 1,
          name: 'Phòng Kinh doanh',
          title: 'Sales Manager',
          img: 'https://cdn.balkan.app/shared/3.jpg',
        },
        {
          id: 3,
          pid: 1,
          name: 'Phòng Marketing',
          title: 'Dev Manager',
          img: 'https://cdn.balkan.app/shared/4.jpg',
        },
        {
          id: 4,
          pid: 2,
          name: 'Elliot Patel',
          title: 'Sales',
          img: 'https://cdn.balkan.app/shared/5.jpg',
        },
        {
          id: 5,
          pid: 2,
          name: 'Lynn Hussain',
          title: 'Sales',
          img: 'https://cdn.balkan.app/shared/6.jpg',
        },
        {
          id: 6,
          pid: 3,
          name: 'Tanner May',
          title: 'Developer',
          img: 'https://cdn.balkan.app/shared/7.jpg',
        },
        {
          id: 7,
          pid: 3,
          name: 'Fran Parsons',
          title: 'Developer',
          img: 'https://cdn.balkan.app/shared/8.jpg',
        },
      ],
    }
  },

  mounted() {
    this.mytree(this.$refs.tree, this.nodes)
  },

  methods: {
    mytree: function (domEl, x) {
      this.chart = new OrgChart(domEl, {
        nodes: x,
        align: OrgChart.align.orientation,
        nodeBinding: {
          field_0: 'name',
          img_0: 'img',
        },
      })
    },
  },
}
</script>

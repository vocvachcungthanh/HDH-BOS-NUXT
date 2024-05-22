<template>
  <div class="max-w-screen-2xl pt-20 mx-auto capitalize">
    <div v-for="item in chartTree" :key="item.id">
      <ul class="org__chart max-w-80 mx-auto mb-0">
        <li>
          <a
            :href="item.link"
            class="bg-[#E6F4FF] flex items-cente text-gray-950 font-semibold"
          >
            <span
              class="px-1 py-2 bg-[#C9DDFF] flex-auto flex items-center justify-center"
            >
              {{ item.name }}
            </span>
            <span
              class="chart__note--right w-10 p-1 flex items-center justify-center flex-shrink-0 text-gray-900"
            >
              {{ item.total }}
            </span>
          </a>

          <OrgCharBlockPgs :blocks="item.block" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import OrgCharBlockPgs from './OrgChartBlockPgs.vue'

export default {
  components: {
    OrgCharBlockPgs,
  },

  data() {
    return {
      chartTree: [
        {
          id: new Date(),
          name: 'Ban giám đốc',
          link: '#',
          total: 3,
          block: [
            {
              id: new Date(),
              name: 'Tổng giám đốc',
              link: '#',
              total: 1,
              staff: [
                {
                  id: new Date(),
                  name: 'Vũ đức tuấn',
                  link: '#',
                  img: 'https://bos.edu.vn/wp-content/uploads/2023/06/gv-3.png',
                },
              ],
            },
            {
              id: new Date(),
              name: 'Phó TGD phụ trách R&D',
              link: '#',
              total: 1,
              staff: [
                {
                  id: new Date(),
                  name: 'Hà thúy quỳnh',
                  link: '#',
                  img: 'https://bos.edu.vn/wp-content/uploads/2023/06/gv-1.png',
                },
              ],
            },
            {
              id: new Date(),
              name: 'Chủ tịch HĐQT',
              link: '#',
              total: 1,
              staff: [
                {
                  id: new Date(),
                  name: 'Nguyễn xuân tuấn',
                  link: '#',
                  img: 'https://bos.edu.vn/wp-content/uploads/2023/06/gv-2.png',
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.org__chart {
  li {
    border-top: 1px solid #c9ddff;
  }

  &--children {
  }
}
</style>

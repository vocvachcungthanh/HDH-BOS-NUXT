<template>
  <div class="card overflow-x-auto">
    <client-only>
      <organization-chart :value="chartTree" :collapsible="true">
        <template #default="slotProps">
          <ul
            class="org__chart org__one relative z-10 w-80 mx-auto mb-0 capitalize"
          >
            <li>
              <a
                :href="slotProps.node.link"
                class="bg-[#E6F4FF] flex items-cente text-gray-950 font-semibold"
              >
                <span
                  class="px-1 py-2 bg-[#C9DDFF] flex-auto flex items-center justify-center"
                >
                  {{ slotProps.node.name }}
                </span>
                <span
                  class="chart__note--right w-10 p-1 flex items-center justify-center flex-shrink-0 text-gray-900"
                >
                  {{ slotProps.node.total }}
                </span>
              </a>

              <OrgCharBlockPgs :blocks="slotProps.node.block" />
            </li>
          </ul>
        </template>
      </organization-chart>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrganizationChart from 'primevue/organizationchart'
import OrgCharBlockPgs from './OrgChartBlockPgs.vue'
export default {
  components: {
    OrgCharBlockPgs,
    OrganizationChart,
  },

  computed: {
    ...mapGetters({
      chartTree: 'GET_ORG_CHART',
    }),
  },

  beforeCreate() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('ACT_ORG_CHART')
      this.$nuxt.$loading.finish()
    })
  },

  methods: {
    log(e) {
      console.log(e)
    },
  },
}
</script>

<style lang="scss">
.p-organizationchart .p-organizationchart-node-content {
  border: unset;
  padding: 0;
}

.p-organizationchart-node-content .p-node-toggler {
  bottom: -30px;
}

.org__one {
  &::before {
    content: '';
    position: absolute;
    top: 37px;
    width: 22px;
    height: calc(100% - 94px);
    border-bottom-right-radius: 10px;
    background-color: transparent;
    border-right: 2px solid #c9ddff;
    border-bottom: 2px solid #c9ddff;
    right: 20px;
    z-index: 1;
  }
}
</style>

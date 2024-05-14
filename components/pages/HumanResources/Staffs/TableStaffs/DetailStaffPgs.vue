<template>
  <a-tabs default-active-key="1">
    <a-tab-pane key="1">
      <span slot="tab" class="flex items-center">
        <a-icon type="info-circle" />
        <span class="">Thông tin cá nhân</span>
      </span>
      <PersonalInformationStaffPgs />
    </a-tab-pane>
    <a-tab-pane key="2">
      <span slot="tab" class="flex items-center">
        <a-icon type="home" />
        <span> Thông tin công việc </span>
      </span>

      <JobInformationStaffPgs />
    </a-tab-pane>
    <a-tab-pane key="3">
      <span slot="tab" class="flex items-center">
        <a-icon type="environment" />
        <span> Cơ chế lương thương </span>
      </span>
      <CmsStaffPgs />
    </a-tab-pane>
    <div slot="tabBarExtraContent">
      <div class="action flex items-center gap-2 justify-center">
        <!-- <EditUnitPgs :data-item="dataItem" />
        <DeleteUnitPgs :id="dataItem.id" /> -->
      </div>
    </div>
  </a-tabs>
</template>

<script>
import PersonalInformationStaffPgs from './PersonalInformationStaffPgs.vue'
import JobInformationStaffPgs from './JobInformationStaffPgs.vue'
import CmsStaffPgs from './CmsStaffPgs.vue'

export default {
  components: {
    PersonalInformationStaffPgs,
    JobInformationStaffPgs,
    CmsStaffPgs,
  },

  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },
}
</script>

<style lang="scss">
.ant-tabs-tabpane {
  border-radius: 8px;
  overflow: hidden;
}
</style>

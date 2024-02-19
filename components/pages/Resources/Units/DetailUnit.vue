<template>
  <a-tabs default-active-key="1">
    <a-tab-pane key="1">
      <span slot="tab" class="flex items-center">
        <a-icon type="info-circle" />
        <span class="">Thông tin </span>
      </span>

      <DescripttionUnit />
    </a-tab-pane>
    <a-tab-pane key="2">
      <span slot="tab" class="flex items-center">
        <a-icon type="home" />
        <span> Phòng ban trực thuộc </span>
      </span>
      <AssignedRoomUnit />
    </a-tab-pane>
    <a-tab-pane key="3">
      <span slot="tab" class="flex items-center">
        <a-icon type="environment" />
        <span> Vị trí trực thuộc </span>
      </span>
      Vị trí trực thuộc
    </a-tab-pane>
    <a-tab-pane key="4">
      <span slot="tab" class="flex items-center">
        <a-icon type="usergroup-add" />
        <span> Nhân viên trực thuộc </span>
      </span>
      Nhân viên trực thuộc
    </a-tab-pane>
    <div slot="tabBarExtraContent">
      <div class="action flex items-center gap-2 justify-center">
        <EditUnit />
        <DeleteUnit />
      </div>
    </div>
  </a-tabs>
</template>

<script>
import AssignedRoomUnit from './AssignedRoomUnit.vue'
import DeleteUnit from './DeleteUnit.vue'
import DescripttionUnit from './DescripttionUnit.vue'
import EditUnit from './EditUnit.vue'

export default {
  components: {
    DeleteUnit,
    EditUnit,
    DescripttionUnit,
    AssignedRoomUnit,
  },

  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },
}
</script>

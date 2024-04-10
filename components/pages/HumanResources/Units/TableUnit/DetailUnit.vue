<template>
  <a-tabs default-active-key="1">
    <a-tab-pane key="1">
      <span slot="tab" class="flex items-center">
        <a-icon type="info-circle" />
        <span class="">Thông tin </span>
      </span>

      <DescripttionUnit
        :code="dataItem.code"
        :name="dataItem.name"
        :block="dataItem.block_name"
        :parent="dataItem.parent_name"
        :field="dataItem.field_name"
        :note="dataItem.note"
      />
    </a-tab-pane>
    <a-tab-pane key="2">
      <span slot="tab" class="flex items-center">
        <a-icon type="home" />
        <span> Phòng ban trực thuộc </span>
      </span>

      <AssignedRoomUnit :assigend-room-unit="dataItem?.children" />
    </a-tab-pane>
    <a-tab-pane key="3">
      <span slot="tab" class="flex items-center">
        <a-icon type="environment" />
        <span> Vị trí trực thuộc </span>
      </span>
      <SubordinatePostionTable :postions="dataItem?.postions" />
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
        <EditUnit :data-item="dataItem" />
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
import SubordinatePostionTable from './SubordinatePostionTable.vue'

export default {
  components: {
    DeleteUnit,
    EditUnit,
    DescripttionUnit,
    AssignedRoomUnit,
    SubordinatePostionTable,
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

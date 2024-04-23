<template>
  <a-tabs default-active-key="1">
    <a-tab-pane key="1">
      <span slot="tab" class="flex items-center">
        <a-icon type="info-circle" />
        <span class="">Thông tin </span>
      </span>

      <DescripttionUnitPgs
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

      <AssignedRoomUnitPgs :assigend-room-unit="dataItem?.subordinate" />
    </a-tab-pane>
    <a-tab-pane key="3">
      <span slot="tab" class="flex items-center">
        <a-icon type="environment" />
        <span> Vị trí trực thuộc </span>
      </span>
      <SubordinatePostionTablePgs :postions="dataItem?.postions" />
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
        <EditUnitPgs :data-item="dataItem" />
        <DeleteUnitPgs :id="dataItem.id" />
      </div>
    </div>
  </a-tabs>
</template>

<script>
import AssignedRoomUnitPgs from './AssignedRoomUnitPgs.vue'
import DeleteUnitPgs from './DeleteUnitPgs.vue'
import DescripttionUnitPgs from './DescripttionUnitPgs.vue'
import EditUnitPgs from './EditUnitPgs.vue'
import SubordinatePostionTablePgs from './SubordinatePostionTablePgs.vue'

export default {
  components: {
    DeleteUnitPgs,
    EditUnitPgs,
    DescripttionUnitPgs,
    AssignedRoomUnitPgs,
    SubordinatePostionTablePgs,
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

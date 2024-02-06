<template>
  <section class="page__resources flex flex-col gap-7">
    <a-card
      title="Sơ đồ tổ chức"
      class="rounded-lg bottom-0"
      :head-style="handleStyle"
    >
      <a-card-grid class="text-center w-1/4"> Danh sách đơn vị </a-card-grid>
      <a-card-grid class="text-center w-1/4"> Danh sách vị trí</a-card-grid>
      <a-card-grid class="text-center w-1/4"> Danh sách nhân viên </a-card-grid>
      <a-card-grid class="text-center w-1/4"> Sơ đồ tổ chức </a-card-grid>
      <a-card-grid class="text-center w-1/4"> Phụ cấp </a-card-grid>
    </a-card>

    <a-card title="Kế hoạch nhân sự" class="rounded-lg">
      <a-card-grid class="text-center w-1/4"> Ngạch lương </a-card-grid>
      <a-card-grid class="text-center w-1/4"> Bậc lương</a-card-grid>
      <a-card-grid class="text-center w-1/4">
        Kế hoạch chi phí nhân sự (Năm)
      </a-card-grid>
      <a-card-grid class="text-center w-1/4">
        Kế hoạch chi phí nhân sự (Tháng)
      </a-card-grid>
      <a-card-grid class="text-center w-1/4">
        Kế hoạch chị phí nhân sự 12 tháng
      </a-card-grid>
      <a-card-grid class="text-center w-1/4">
        Thưởng doanh thu đơn vị
      </a-card-grid>
    </a-card>

    <a-card title="Báo cáo nhân sự" class="rounded-lg">
      <a-card-grid class="text-center w-1/4"> Bảng lương tháng </a-card-grid>
      <a-card-grid class="text-center w-1/4">
        Thông kê nhân sự theo đơn vị</a-card-grid
      >
    </a-card>
    <a-card title="Công việc" class="rounded-lg">
      <a-card-grid class="text-center w-1/4"> Chuỗi giá trị </a-card-grid>
      <a-card-grid class="text-center w-1/4"> Chức năng </a-card-grid>
      <a-card-grid class="text-center w-1/4"> Danh sách công việc </a-card-grid>
    </a-card>
  </section>
</template>

<script>
export default {
  computed: {
    handleStyle() {
      return {
        backgroundColor: '#0ea5e9',
        color: '#fff',
      }
    },
  },
}
</script>

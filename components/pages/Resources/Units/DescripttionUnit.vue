<template>
  <a-descriptions class="a_desc">
    <a-descriptions-item label="Mã phòng ban" class="borde border-t-orange-50">
      HCNS
    </a-descriptions-item>
    <a-descriptions-item label="Tên phòng ban">
      Phòng Hành chính - Nhân sự
    </a-descriptions-item>
    <a-descriptions-item label="Email">
      truyenthongmarketing@gmail.com
    </a-descriptions-item>
    <a-descriptions-item label="Khối">Back </a-descriptions-item>
    <a-descriptions-item label="Trực thuộc"> Ban Giám đốc </a-descriptions-item>
    <a-descriptions-item label="Mô tả"
      >Lên kế hoạch và thực hiện chiến lược Marketing
    </a-descriptions-item>
  </a-descriptions>
</template>

<style lang="scss">
.a_desc {
  .ant-descriptions-item {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: calc(100% - 60px);
      border-bottom: 1px solid var(--color-primary-border);
    }
  }

  .ant-descriptions-row {
    & > th,
    & > td {
      padding: 8px 0;
    }

    &:last-child {
      .ant-descriptions-item {
        padding-bottom: 0;

        &::before {
          display: none;
        }
      }
    }
  }
}
</style>

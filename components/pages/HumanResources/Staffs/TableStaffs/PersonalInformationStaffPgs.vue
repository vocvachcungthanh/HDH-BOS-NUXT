<!-- eslint-disable vue/no-v-html -->
<template>
  <a-descriptions class="a_desc">
    <a-descriptions-item label="Đơn vị" class="borde border-t-orange-50">
      {{ nameDepartent }}
    </a-descriptions-item>
    <a-descriptions-item label="Vị trí">
      {{ namePostion }}
    </a-descriptions-item>
    <a-descriptions-item label="Ngạch lương">
      {{ salaryGrade }}
    </a-descriptions-item>
    <a-descriptions-item label="Bậc lương">
      {{ salaryLeve }}
    </a-descriptions-item>
    <a-descriptions-item label="Mức đóng bảo hiểm">
      {{ premiumLevel }}
    </a-descriptions-item>
  </a-descriptions>
</template>

<script>
export default {
  props: {
    nameDepartent: {
      type: String,
      default: 'Chưa cập nhật',
    },

    namePostion: {
      type: String,
      default: 'Chưa cập nhật',
    },

    salaryGrade: {
      type: String,
      default: 'Chưa cập nhật',
    },

    salaryLeve: {
      type: String,
      default: 'Chưa cập nhật',
    },

    premiumLevel: {
      type: String,
      default: 'Chưa cập nhật',
    },
  },
}
</script>

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

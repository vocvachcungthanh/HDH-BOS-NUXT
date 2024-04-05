<!-- eslint-disable vue/no-v-html -->
<template>
  <a-descriptions class="a_desc">
    <a-descriptions-item label="Mã phòng ban" class="borde border-t-orange-50">
      {{ code }}
    </a-descriptions-item>
    <a-descriptions-item label="Tên phòng ban">
      {{ name }}
    </a-descriptions-item>
    <a-descriptions-item label="Lĩnh vực">
      {{ field }}
    </a-descriptions-item>
    <a-descriptions-item label="Khối">
      {{ block }}
    </a-descriptions-item>
    <a-descriptions-item label="Trực thuộc"> {{ parent }} </a-descriptions-item>

    <a-descriptions-item label="Mô tả">
      <div v-html="note"></div>
    </a-descriptions-item>
  </a-descriptions>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Chưa cập nhật',
    },

    code: {
      type: String,
      default: 'Chưa cập nhật',
    },

    block: {
      type: String,
      default: 'Chưa cập nhật',
    },

    parent: {
      type: String,
      default: 'Chưa cập nhật',
    },

    field: {
      type: String,
      default: 'Chưa cập nhật',
    },

    note: {
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

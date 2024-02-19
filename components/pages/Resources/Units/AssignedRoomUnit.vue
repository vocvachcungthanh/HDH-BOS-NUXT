<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :scroll="{ y: 594 }"
    :expanded-row-keys.sync="expandedRowKeys"
    class="custom-table"
  >
  </a-table>
</template>

<script>
const columns = [
  {
    title: 'STT',
    dataIndex: 'STT',
  },
  {
    title: 'Mã phòng ban',
    dataIndex: 'code',
  },
  {
    title: 'Tên phòng ban',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    STT: i + 1,
    name: `Phòng ban ${i}`,
    code: `BGD ${i}`,
    email: `hncs_${i}@gmail.com`,

    children: [
      {
        key: i + 1,
        STT: i + 1,
        name: `Phòng ban ${i}`,
        code: `BGD ${i}`,
        email: `hncs_${i}@gmail.com`,

        children: [
          {
            key: i + 3,
            STT: i + 1,
            name: `Phòng ban ${i}`,
            code: `BGD ${i}`,
            email: `hncs_${i}@gmail.com`,
          },
        ],
      },
    ],
  })
}

export default {
  data() {
    return {
      columns,
      data,
      expandedRowKeys: [],
    }
  },
}
</script>

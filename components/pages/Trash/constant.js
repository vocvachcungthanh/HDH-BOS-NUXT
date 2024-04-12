export const TableThDepartment = [
  {
    title: 'STT',
    dataIndex: 'stt',
    width: 60,
    align: 'center',
  },
  {
    title: 'Mã phòng ban',
    dataIndex: 'code',
    width: 130,
  },
  {
    title: 'Tên phòng ban',
    dataIndex: 'name',
    width: 230,
  },
  {
    title: 'Thuộc khối',
    dataIndex: 'block',
  },

  {
    title: 'Trực thuộc',
    dataIndex: 'parent',
  },
  {
    title: 'Mô tả',
    dataIndex: 'note',
    minWidth: 300,
  },

  {
    title: 'Thuộc lĩnh vực',
    dataIndex: 'field',
    width: 160,
  },

  {
    title: 'Hành động',
    dataIndex: 'actions',
    scopedSlots: { customRender: 'actions' },
  },
]

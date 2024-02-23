export default {
  ACT_GET_DEPARTMENT(context) {
    // flex dữ liệu

    const department = [
      {
        id: 1,
        name: 'Khối lãnh đạo',
        not: 'Là lãnh đạo',
      },
      {
        id: 2,
        name: 'Khối kinh doanh',
        not: 'Kinh doanh',
      },

      {
        id: 3,
        name: 'Khối backoffice',
        not: 'Nhân sự',
      },

      {
        id: 4,
        name: 'Khối sản xuất cung ứng',
        not: 'phát triển ngoài',
      },
    ]

    const response = {
      status: 200,
      data: department,
    }

    try {
      if (response.status === 200) {
        context.commit('SET_DEPARTMENT', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(response)
    }
  },
}

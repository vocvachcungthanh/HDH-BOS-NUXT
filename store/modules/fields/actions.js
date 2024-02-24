export default {
  ACT_GET_FIELDS(context) {
    // flex dữ liệu

    const fields = [
      {
        id: 1,
        name: 'Lĩnh vực bán hàng',
      },
      {
        id: 2,
        name: 'Lĩnh vực Marketing',
      },

      {
        id: 3,
        name: 'Lĩnh vực hỗ trợ',
      },

      {
        id: 4,
        name: 'Lĩnh vực cung ứng',
      },
    ]

    const response = {
      status: 200,
      data: fields,
    }

    try {
      if (response.status === 200) {
        context.commit('SET_FIELDS', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(response)
    }
  },
}

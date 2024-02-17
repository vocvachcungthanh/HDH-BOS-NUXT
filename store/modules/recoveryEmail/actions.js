export default {
  ACT_SEN_EMAIL(context, parmas) {
    // Đang giả sử dư liệu để làm ứng dung khi nào viết api thì sửa lại sau

    try {
      const email = 'vocvachcungthanh@gmail.com'

      if (parmas.email !== email) return

      const response = {
        status: 200,
        data: 'vocvachcungthanh@gmail.com',
      }

      if (response.status === 200) {
        context.commit('SET_EMAIL_EXIST', 'vocvachcungthanh@gmail.com')

        return Promise.resolve(response.data)
      }
    } catch (error) {
      context.commit('SET_EMAIL_EXIST', null)

      return Promise.reject(error.message)
    }
  },
}

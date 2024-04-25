export default {
  async ACT_GET_BLOCK(context) {
    // flex dữ liệu

    try {
      const response = await this.$api.get('block')
      if (response.status === 200) {
        context.commit('SET_BLOCK', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      return Promise.reject(error.errors.message)
    }
  },
}

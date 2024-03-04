export default {
  async ACT_GET_DEPARTMENT(context) {
    // flex dữ liệu

    try {
      const response = await this.$api.get('block')
      if (response.status === 200) {
        context.commit('SET_DEPARTMENT', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}

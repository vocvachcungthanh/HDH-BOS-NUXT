export default {
  async ACT_GET_FIELDS(context) {
    const response = await this.$api.get('field')

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

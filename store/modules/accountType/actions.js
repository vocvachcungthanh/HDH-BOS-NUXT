export default {
  async ACT_GET_ACCOUNT_TYPE(_context) {
    try {
      const response = await this.$api.get('account-type')

      if (response.status === 200) {
        _context.commit('SET_ACCOUNT_TYPE', response.data)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },
}

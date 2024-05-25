export default {
  async ACT_ORG_CHART(_context) {
    try {
      const response = await this.$api.get('org-chart')

      if (response.status === 200) {
        _context.commit('SET_ORG_CHART', response.data)
      }
    } catch (_error) {
      // eslint-disable-next-line no-console
      console.log(_error)
    }
  },
}

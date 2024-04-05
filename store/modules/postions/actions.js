export default {
  async ACT_CREATE_CODE_POSTION(_context) {
    try {
      const response = await this.$api.get('create-code-postion')

      if (response.status === 200) {
        _context.commit('SET_CODE_POSTION', response.data)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },

  async ACT_CREATE_POSTION(_context, parmas) {
    try {
      const response = await this.$api.post('create-postion', parmas)
      if (response.status === 200) {
        _context.commit('SET_CODE_POSTION', response.data.code_next)
        // _context.dispatch('ACT_GET_POSTION')

        return Promise.resolve(response.message)
      }
    } catch (errors) {
      return Promise.reject(errors)
    }
  },
}

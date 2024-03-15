export default {
  async ACT_GET_DEPARTMENT(context) {
    // flex dữ liệu

    try {
      const response = await this.$api.get('department')
      if (response.status === 200) {
        context.commit('SET_DEPARTMENT', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },

  async ACT_CREATE_DEPARTMENT(_context, parmas) {
    try {
      const response = await this.$api.post('department-create', parmas)
      if (response.status === 200) {
        _context.commit('SET_CREATE_CODE_DEPARTMENT', response.data.code_next)
        _context.dispatch('ACT_GET_DEPARTMENT')
        return Promise.resolve(response.message)
      }
    } catch (errors) {
      console.log(errors)
      return Promise.reject(errors)
    }
  },

  async ACT_CREATE_CODE_DEPARTMENT(_context) {
    try {
      const response = await this.$api.get('create-code-department')

      if (response.status === 200) {
        _context.commit('SET_CREATE_CODE_DEPARTMENT', response.data)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },
}

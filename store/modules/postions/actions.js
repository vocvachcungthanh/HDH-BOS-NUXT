import { PAGINATE } from '~/contacts'

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
        _context.dispatch('ACT_GET_POSTION', PAGINATE)

        return Promise.resolve(response.message)
      }
    } catch (errors) {
      return Promise.reject(errors)
    }
  },

  async ACT_GET_POSTION(_context, parmas) {
    try {
      const response = await this.$api.post(
        `/postions/${parmas.current}`,
        parmas
      )

      if (response.status === 200) {
        _context.commit('SET_GET_POSTION', response.data)
      }
    } catch (error) {}
  },

  async ACT_DELETE_POSTION(_context, parmas) {
    try {
      const response = await this.$api.post('delete-postion', parmas)

      if (response.status === 200) {
        _context.commit('SET_DELETE_POSTION', response.data)
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors)
    }
  },
}

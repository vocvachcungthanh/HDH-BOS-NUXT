import { PAGINATE } from '~/contacts'

export default {
  async ACT_GET_STAFF(_context, parmas) {
    try {
      const response = await this.$api.post(`/staffs/${parmas.current}`, parmas)

      if (response.status === 200) {
        _context.commit('SET_GET_STAFF', response.data)
      }
    } catch (error) {}
  },

  async ACT_CREATE_STAFF(_context, parmas) {
    try {
      const response = await this.$api.post('create-staff', parmas)
      if (response.status === 200) {
        _context.commit('SET_CODE_STAFF', response.data.code_next)
        _context.dispatch('ACT_GET_STAFF', PAGINATE)

        return Promise.resolve(response.message)
      }
    } catch (errors) {
      return Promise.reject(errors)
    }
  },

  async ACT_UPDATE_STAFF(_context, parmas) {
    try {
      const response = await this.$api.post('staff-update', parmas)

      if (response.status === 200) {
        _context.dispatch('ACT_GET_STAFF')
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors)
    }
  },

  async ACT_CREATE_CODE_STAFF(_context) {
    try {
      const response = await this.$api.get('create-code-staff')

      if (response.status === 200) {
        _context.commit('SET_CREATE_CODE_STAFF', response.data)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },

  async ACT_SEARCH_SLICER_STAFF(_context, parmas) {
    try {
      const response = await this.$api.post('search-slicer-staff', parmas)

      if (response.status === 200) {
        _context.commit('SET_GET_STAFF', response.data)
      }
    } catch (_error) {
      return Promise.reject(_error.errors.message)
    }
  },
}

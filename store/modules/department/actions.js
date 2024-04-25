import { SEARCH_EMPTY } from '~/contacts'

export default {
  async ACT_GET_DEPARTMENT(context) {
    // flex dữ liệu

    try {
      const response = await this.$api.get('department')
      if (response.status === 200) {
        context.commit('SET_DEPARTMENT', response.data)
      }
    } catch (_error) {
      // eslint-disable-next-line no-console
      // console.log(error)
    }
  },

  async ACT_CREATE_DEPARTMENT(_context, parmas) {
    try {
      const response = await this.$api.post('department-create', parmas)
      if (response.status === 200) {
        _context.commit('SET_CREATE_CODE_DEPARTMENT', response.data.code_next)
        _context.dispatch('ACT_GET_DEPARTMENT')
        _context.dispatch('ACT_GET_UNIT')
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors)
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

  async ACT_GET_UNIT(_context) {
    try {
      const response = await this.$api.get('department-list')

      if (response.status === 200) {
        _context.commit('SET_UNIT', response.data)
      }
    } catch (_error) {
      // console.log(error)
    }
  },

  async ACT_UPDATE_DEPARTMENT(_context, parmas) {
    try {
      const response = await this.$api.post('department-update', parmas)

      if (response.status === 200) {
        _context.dispatch('ACT_GET_UNIT')
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors)
    }
  },

  async ACT_DELETE_DEPARTMENT(_context, parmas) {
    try {
      const response = await this.$api.post('delete-department', parmas)

      if (response.status === 200) {
        _context.commit('SET_DELETE_DEPARTMENT', parmas.id)

        await _context.dispatch('ACT_TRASH_DEPARTMENT_COUNT')

        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_SEARCH_DEPARTMENT(_context, keySearch) {
    try {
      const response = await this.$api.get(`search-department/${keySearch}`)

      if (response.status === 200) {
        _context.commit('SET_UNIT', response.data)

        if (response.data.length <= 0) {
          _context.commit('SET_EMPTY_SEARCH_DEPARTMENT', SEARCH_EMPTY)
        }
      }
    } catch (_error) {}
  },

  async ACT_SETTING_SLICER_UNITS(_context, parmas) {
    try {
      const response = await this.$api.post('slicer-setting-update', parmas)

      if (response.status === 200) {
        _context.commit('SET_SETTING_SLICER_UNITS', parmas)

        return Promise.resolve(response.message)
      }
    } catch (_error) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(_error.errors.message)
    }
  },

  async ACT_SLIDER_UNIT(_context) {
    try {
      const response = await this.$api.get('slider-unit')

      if (response.status === 200) {
        _context.commit('SET_SLIDER_UNIT', response.data)
      }
    } catch (_error) {
      return Promise.reject(_error.errors.message)
    }
  },

  async ACT_SEARCH_SLIDER_UNIT(_context, parmas) {
    try {
      const response = await this.$api.post('search-slider-unit', parmas)

      if (response.status === 200) {
        _context.commit('SET_UNIT', response.data)
      }
    } catch (_error) {
      return Promise.reject(_error.errors.message)
    }
  },
}

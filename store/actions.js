import { PAGINATE } from '~/contacts'

export default {
  ACT_TOGGLE_MENU(context, toggle) {
    context.commit('SET_TOGGLE_MENU', toggle)
  },

  ACT_TITLE_HEADER(context, title) {
    context.commit('SET_TITLE_HEADER', title)
  },

  async ACT_SLIDER_LIST(_context, path) {
    try {
      const response = await this.$api.get('slider-list')

      if (response.status === 200) {
        _context.commit('SET_SLICER', response.data)

        switch (path) {
          case '/human-resources/units':
            await _context.dispatch('ACT_GET_UNIT')
            break
          case '/human-resources/positions':
            await _context.dispatch('ACT_GET_POSTION', PAGINATE)
            break
          case '/human-resources/staffs':
            await _context.dispatch('ACT_GET_STAFF', PAGINATE)
            break
          default:
            break
        }
      }
    } catch (_error) {
      return Promise.reject(_error.errors?.message)
    }
  },

  async ACT_SLICER_SETTING_UPDATE(_context, parmas) {
    try {
      const response = await this.$api.post('slicer-setting-update', parmas)

      if (response.status === 200) {
        _context.commit('SET_SETTING_SLICER', parmas)

        return Promise.resolve(response.message)
      }
    } catch (_error) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(_error.errors.message)
    }
  },
}

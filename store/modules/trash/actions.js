export default {
  async ACT_TRASH_DEPARTMENT_COUNT(context) {
    try {
      const response = await this.$api.get('trash-department-count')
      if (response.status === 200) {
        context.commit('SET_TRASH_DEPARTMENT_COUNT', response.data)
      }
    } catch (_error) {
      // eslint-disable-next-line no-console
      // console.log(error)
    }
  },

  async ACT_TRASH_DEPARTMENT_LIST(context) {
    try {
      const response = await this.$api.get('trash-department-list')

      if (response.status === 200) {
        context.commit('SET_TRASH_DEPARTMENT_LIST', response.data)
      }
    } catch (_error) {
      console.log(_error)
    }
  },

  async ACT_EMPETY_DEPARTMENT(_context, parmas) {
    try {
      const response = await this.$api.post('empty-department', parmas)

      if (response.status === 200) {
        _context.commit('SET_EMPTY_DEPARTMENT', parmas.ids)

        return Promise.resolve(response.message)
      }
    } catch (_error) {
      return Promise.reject(_error.errors.message)
    }
  },

  async ACT_RESTORE_DEPARTMENT(_context, parmas) {
    try {
      const response = await this.$api.post('restore-department', parmas)

      if (response.status === 200) {
        await _context.dispatch('ACT_TRASH_DEPARTMENT_LIST')
        await _context.dispatch('ACT_TRASH_DEPARTMENT_COUNT')

        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },
}

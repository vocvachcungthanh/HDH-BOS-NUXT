export default {
  SET_DEPARTMENT(state, data) {
    state.departments = data
  },

  SET_CREATE_CODE_DEPARTMENT(state, code) {
    state.codeDepartment = code
  },

  SET_UNIT(state, data) {
    state.units = data
  },

  SET_DELETE_c(state, id) {
    const data = state.units.filter((item) => {
      return item.id !== id
    })

    return (state.units = data)
  },

  SET_EMPTY_SEARCH_DEPARTMENT(state, text) {
    state.emptySearch = text
  },
}

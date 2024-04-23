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

  SET_DELETE_DEPARTMENT(state, id) {
    const data = state.units.filter((item) => {
      return item.id !== id
    })

    return (state.units = data)
  },

  SET_EMPTY_SEARCH_DEPARTMENT(state, text) {
    state.emptySearch = text
  },

  SET_SETTING_SLICER_UNITS(state, value) {
    state.slicerUnit[value.indexKey] = {
      ...state.slicerUnit[value.indexKey],
      ...value,
    }

    return state.slicerUnit
  },

  SET_SLIDER_UNIT(state, data) {
    data.forEach((item) => {
      state.slicerUnit[item.name] = {
        id: item.id,
        caption: item.caption,
        title: item.title,
        count: item.count,
        status: item.status,
        icon: item.icon,
      }
    })

    return state.slicerUnit
  },
}

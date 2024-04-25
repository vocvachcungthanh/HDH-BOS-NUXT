export default {
  SET_CODE_POSTION(state, code) {
    state.codePostion = code
  },

  SET_GET_POSTION(state, data) {
    state.postions = data
  },

  SET_DELETE_POSTION(state, ids) {
    const data = state.postions.data

    state.postions.data = data.filter((item) => !ids.includes(item.id))
    state.postions.total = state.postions.total - ids.length
    return state.postions
  },

  SET_CREATE_POSTION(state, items) {
    state.postions.data.unshift(items)
    state.postions.total = state.postions.total + 1

    return state.postions
  },
}

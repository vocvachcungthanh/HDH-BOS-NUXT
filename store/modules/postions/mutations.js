export default {
  SET_CODE_POSTION(state, code) {
    state.codePostion = code
  },

  SET_GET_POSTION(state, data) {
    state.postions = data
  },

  SET_DELETE_POSTION(state, ids) {
    console.log({ ids })

    return state.postions
  },
}

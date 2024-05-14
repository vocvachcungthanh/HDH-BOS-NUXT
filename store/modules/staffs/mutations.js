export default {
  SET_CREATE_CODE_STAFF(state, code) {
    state.codeStaff = code
  },

  SET_GET_STAFF(state, data) {
    return (state.staffs = data)
  },
}

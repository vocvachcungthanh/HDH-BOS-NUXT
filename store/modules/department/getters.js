export default {
  GET_DEPARTMENT(state) {
    return state.departments || []
  },

  GET_CODE_DEPARTMENT(state) {
    return state.codeDepartment
  },
}

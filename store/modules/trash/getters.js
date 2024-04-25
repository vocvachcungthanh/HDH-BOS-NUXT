export default {
  GET_TRASH_DEPARTMENT_COUNTT(state) {
    return state.trashDepartment.count || 0
  },

  GET_TRASH_DEPARTMENT_LIST(state) {
    return state.trashDepartment.departments || []
  },
}

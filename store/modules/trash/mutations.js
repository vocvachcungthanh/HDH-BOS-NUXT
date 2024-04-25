export default {
  SET_TRASH_DEPARTMENT_COUNT(state, count) {
    state.trashDepartment.count = count
  },

  SET_TRASH_DEPARTMENT_LIST(state, data) {
    state.trashDepartment.departments = data
  },

  SET_EMPTY_DEPARTMENT(state, ids) {
    const count = state.trashDepartment.count
    const data = state.trashDepartment.departments

    state.trashDepartment.departments = data.filter(
      (item) => !ids.includes(item.id)
    )

    state.trashDepartment.count =
      count - ids.length <= 0 ? 0 : count - ids.length

    return state.trashDepartment
  },
}

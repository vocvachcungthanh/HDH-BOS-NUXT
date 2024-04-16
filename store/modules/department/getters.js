import { MwArray } from '~/libraries/helpers'

export default {
  GET_DEPARTMENT(state) {
    return state.departments || []
  },

  GET_CODE_DEPARTMENT(state) {
    return state.codeDepartment
  },

  GET_UNIT(state) {
    return MwArray.removeEmptyChildren(state.units || [], 'subordinate') || []
  },

  GET_EMPTY_SEARCH(state) {
    return state.emptySearch || ''
  },
}

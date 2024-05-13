export default {
  SET_TOGGLE_MENU(state, toggle) {
    state.IS_TOGGLE_MENU = toggle
  },

  SET_TITLE_HEADER(state, title) {
    state.TITLE = title
  },

  SET_MODAL(state, modal) {
    state.modal = modal
  },

  SET_RELOAD_TOEKN(state, reloadToken) {
    state.reloadToken = reloadToken
  },

  SET_SETTING_SLICER(state, value) {
    state.slicer[value.indexKey] = {
      ...state.slicer[value.indexKey],
      ...value,
    }

    return state.slicer
  },

  SET_SLICER(state, data) {
    state.slicer = data

    return state.slicer
  },
}

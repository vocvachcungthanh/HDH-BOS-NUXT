export default {
  GET_MENU(state) {
    return state.menus
  },

  KEY_MENU(state) {
    return String(state.keyMenu !== null ? state.keyMenu : 1)
  },
}

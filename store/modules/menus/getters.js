export default {
  GET_MENU(state) {
    return state.menus
  },

  KEY_MENU(state) {
    return state.keyMenu !== null ? state.keyMenu : 1
  },

  GET_MENU_CHILDREN(state) {
    return state.menuItem?.children || []
  },
}

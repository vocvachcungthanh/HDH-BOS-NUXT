export default {
  SET_MENU(state, menus) {
    state.menus = menus
  },

  SET_KEY_MENU(state, keyMenu) {
    const foundMenu = state.menus.find((menu) => menu.link === keyMenu)
    state.keyMenu = foundMenu.id
  },
}

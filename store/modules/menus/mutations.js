export default {
  SET_MENU(state, menus) {
    state.menus = menus
  },

  SET_KEY_MENU(state, keyMenu) {
    let keyClone = keyMenu

    switch (keyMenu) {
      case '/resources/units':
      case '/resources/organization-chart':
        keyClone = '/resources'
        break

      default:
        break
    }

    const foundMenu = state.menus.find((menu) => menu.link === keyClone)

    state.keyMenu = foundMenu?.id
  },
}

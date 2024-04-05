export default {
  SET_MENU(state, menus) {
    state.menus = menus
  },

  SET_KEY_MENU(state, keyMenu) {
    let keyClone = keyMenu

    console.log(keyMenu)

    switch (keyMenu) {
      case '/human-resources':
      case '/human-resources/organization-chart':
      case '/human-resources/positions':
      case '/human-resources/units':
        keyClone = '/human-resources'
        break

      default:
        break
    }

    const foundMenu = state.menus.find((menu) => menu.link === keyClone)

    state.menuItem = foundMenu
    state.keyMenu = foundMenu?.id
  },

  SET_CHILDREN_MENU(state, menuItem) {
    state.menuItem = menuItem
  },
}

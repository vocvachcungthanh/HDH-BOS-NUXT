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
    console.log(value.indexKey)
    state.slicer[value.indexKey] = {
      ...state.slicer[value.indexKey],
      ...value,
    }

    return state.slicer
  },

  SET_SLIDER(state, data) {
    data.forEach((item) => {
      state.slicer[item.name] = {
        id: item.id,
        caption: item.caption,
        title: item.title,
        count: item.count,
        status: item.status,
        icon: item.icon,
        type: item.type,
      }
    })

    return state.slicer
  },
}

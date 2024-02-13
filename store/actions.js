export default {
  ACT_TOGGLE_MENU(context, toggle) {
    context.commit('SET_TOGGLE_MENU', toggle)
  },

  ACT_TITLE_HEADER(context, title) {
    context.commit('SET_TITLE_HEADER', title)
  },
}

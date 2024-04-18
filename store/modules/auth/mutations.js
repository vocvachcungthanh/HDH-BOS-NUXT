import { MwAuth } from '~/libraries/auth'
const { saveAuthCookie, logout } = new MwAuth()

export default {
  SET_AUTH_LOGIN(state, data) {
    state.authLogin = data

    saveAuthCookie(data)

    this.$updateAxios.upload()
  },

  SET_AUTH_LOGOUT(state, data) {
    state.authLogin = data
    logout()
  },
}

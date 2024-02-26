import { MwAuth } from '~/libraries/auth'

export default {
  SET_AUTH_LOGIN(state, data) {
    state.login = data
  },

  CLEAR_AUTH_TOKEN(state) {
    state.login = null
    MwAuth.logout()
  },
}

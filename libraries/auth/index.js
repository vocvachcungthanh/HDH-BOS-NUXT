import { MwString, MwCookie } from '~/libraries/helpers'

export class MwAuth {
  constructor(request = null) {
    this.req = request
  }

  isServer() {
    return process.server
  }

  isBrowser() {
    return process.browser
  }

  setAccessToken(accessToken) {
    if (this.isServer()) return
    if (MwString.checkExists(accessToken)) {
      MwCookie.set('access_token', accessToken)
    } else MwCookie.delete('access_token')
  }

  setRefreshToken(refreshToken) {
    if (this.isServer()) return

    if (MwString.checkExists(refreshToken)) {
      MwCookie.set('refresh_token', refreshToken)
    } else {
      MwCookie.delete('refresh_token')
    }
  }

  setRefreshTokenExpired(refreshTokenExpired) {
    if (this.isServer()) return

    if (MwString.checkExists(refreshTokenExpired)) {
      MwCookie.set('refresh_token_expired', refreshTokenExpired)
    } else {
      MwCookie.delete('refresh_token_expired')
    }
  }

  setTokenExpired(tokenExpired) {
    if (this.isServer()) return

    if (MwString.checkExists(tokenExpired)) {
      MwCookie.set('token_expired', tokenExpired)
    } else {
      MwCookie.delete('token_expired')
    }
  }

  setUser(userId) {
    if (this.isServer()) return

    if (MwString.checkExists(userId)) {
      MwCookie.set('user_id', userId)
    } else {
      MwCookie.delete('user_id')
    }
  }

  setUserInfo(userInfo) {
    if (this.isServer()) return
    if (MwString.isObject(userInfo)) {
      MwCookie.set('user_info', JSON.stringify(userInfo))
    } else MwCookie.delete('user_info')
  }

  getAccessToken() {
    MwCookie.get('access_token')
  }

  /**
   * Thông tin user đăng nhập
   * */
  getUserInfo() {
    let strInfoUser = null
    if (
      this.isServer() &&
      MwString.existsObject(this.req, ['headers', 'cookie'])
    ) {
      strInfoUser = MwCookie.convertCookie('user_info', this.req.headers.cookie)
    }

    if (this.isBrowser() && MwString.checkExists(MwCookie.get('user_info'))) {
      strInfoUser = MwCookie.get('user_info')
    }

    if (strInfoUser) return JSON.parse(strInfoUser)
    else return null
  }

  logout() {
    if (this.isServer()) return
    MwCookie.delete('token_expired')
    MwCookie.delete('user_id')
    MwCookie.delete('refresh_token_expired')
    MwCookie.delete('access_token')
    MwCookie.delete('user_info')
    MwCookie.delete('refresh_token')
  }

  /**
   * Kiểm tra đăng nhập
   * */
  logged() {
    const userInfo = this.getUserInfo()

    if (
      MwString.isObject(userInfo) &&
      MwString.checkExists(userInfo.id) &&
      parseInt(userInfo.id) >= 1
    ) {
      return true
    } else return false
  }
}

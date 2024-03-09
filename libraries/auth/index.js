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
      MwCookie.set('id_user', userId)
    } else {
      MwCookie.delete('id_user')
    }
  }

  setCompany(companyId) {
    if (this.isServer()) return

    if (MwString.checkExists(companyId)) {
      MwCookie.set('company_id', companyId)
    } else {
      MwCookie.delete('company_id')
    }
  }

  setUserInfo(userInfo) {
    if (this.isServer()) return
    if (MwString.isObject(userInfo)) {
      MwCookie.set('user_info', JSON.stringify(userInfo))
    } else MwCookie.delete('user_info')
  }

  setCompanyInfo(companayInfo) {
    if (this.isServer()) return
    if (MwString.isObject(companayInfo)) {
      MwCookie.set('company_info', JSON.stringify(companayInfo))
    } else MwCookie.delete('company_info')
  }

  setDatabase(database) {
    if (this.isServer()) return

    if (MwString.checkExists(database)) {
      MwCookie.set('db_h', database)
    } else {
      MwCookie.delete('db_h')
    }
  }

  getDatabase() {
    return MwCookie.get('db_h')
  }

  getRefeshToken() {
    return MwCookie.get('refresh_token')
  }

  getTokenExpired() {
    let tokenExpired = null
    if (
      this.isBrowser() &&
      MwString.checkExists(MwCookie.get('token_expired'))
    ) {
      tokenExpired = MwCookie.get('token_expired')
    }
    return tokenExpired
  }

  getAccessToken() {
    return MwCookie.get('access_token')
  }

  getCompanyId() {
    return MwCookie.get('company_id')
  }

  getCompanyInfo() {
    let strInfoCompany = null
    if (
      this.isServer() &&
      MwString.existsObject(this.req, ['headers', 'cookie'])
    ) {
      strInfoCompany = MwCookie.convertCookie(
        'company_info',
        this.req.headers.cookie
      )
    }

    if (
      this.isBrowser() &&
      MwString.checkExists(MwCookie.get('company_info'))
    ) {
      strInfoCompany = MwCookie.get('company_info')
    }

    if (strInfoCompany) return JSON.parse(strInfoCompany)
    else return null
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
    MwCookie.delete('id_user')
    MwCookie.delete('access_token')
    MwCookie.delete('user_info')
    MwCookie.delete('refresh_token')
    MwCookie.delete('company_id')
    MwCookie.delete('company_info')
    MwCookie.delete('db_h')
  }

  /**
   * Kiểm tra đăng nhập
   * */
  logged() {
    const companyInfo = this.getCompanyInfo()

    if (
      MwString.isObject(companyInfo) &&
      MwString.checkExists(companyInfo.id) &&
      parseInt(companyInfo.id) >= 1
    ) {
      return true
    } else return false
  }
}

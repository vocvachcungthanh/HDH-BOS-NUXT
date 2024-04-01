import { MwString, MwCookie } from '~/libraries/helpers'
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  EXPIRES_TOKEN,
  DATABASE,
  COMPANY_ID,
  COMPANY_INFO,
  USER_ID,
} from '~/libraries/constant'

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

  saveAuthCookie({ token, companyId, userId, expiresIn, refreshToken }) {
    console.log(token)
    console.log(companyId)
    console.log(userId)
    console.log(expiresIn)
    console.log(refreshToken)
    if (process.server) return

    if (MwString.checkExists(token)) {
      MwCookie.set(ACCESS_TOKEN, token)
    } else {
      MwCookie.delete(ACCESS_TOKEN)
    }

    if (MwString.checkExists(refreshToken)) {
      MwCookie.set(REFRESH_TOKEN, refreshToken)
    } else {
      MwCookie.delete(REFRESH_TOKEN)
    }

    if (MwString.checkExists(expiresIn)) {
      MwCookie.set(EXPIRES_TOKEN, expiresIn)
    } else {
      MwCookie.delete(EXPIRES_TOKEN)
    }

    if (MwString.checkExists(companyId)) {
      MwCookie.set(COMPANY_ID, companyId)
    } else {
      MwCookie.delete(COMPANY_ID)
    }

    if (MwString.checkExists(userId)) {
      MwCookie.set(USER_ID, userId)
    } else {
      MwCookie.delete(USER_ID)
    }
  }

  saveCompnayInfoCookie({ companyInfo, database }) {
    if (process.server) return

    if (MwString.isObject(companyInfo)) {
      MwCookie.set(COMPANY_INFO, JSON.stringify(companyInfo))
    } else {
      MwCookie.delete(COMPANY_INFO)
    }

    if (MwString.checkExists(database)) {
      MwCookie.set(DATABASE, database)
    } else {
      MwCookie.delete(DATABASE)
    }
  }

  getDatabase() {
    return MwCookie.get(DATABASE)
  }

  getRefeshToken() {
    return MwCookie.get(REFRESH_TOKEN)
  }

  getTokenExpired() {
    let tokenExpired = null
    if (this.isBrowser() && MwString.checkExists(MwCookie.get(EXPIRES_TOKEN))) {
      tokenExpired = MwCookie.get(EXPIRES_TOKEN)
    }
    return tokenExpired
  }

  getAccessToken() {
    return MwCookie.get(ACCESS_TOKEN)
  }

  getCompanyId() {
    return MwCookie.get(COMPANY_ID)
  }

  getCompanyInfo() {
    let strInfoCompany = null
    if (
      process.server &&
      MwString.existsObject(this.req, ['headers', 'cookie'])
    ) {
      strInfoCompany = MwCookie.convertCookie(
        COMPANY_INFO,
        this.req.headers.cookie
      )
    }

    if (process.browser && MwString.checkExists(MwCookie.get(COMPANY_INFO))) {
      strInfoCompany = MwCookie.get(COMPANY_INFO)
    }

    if (strInfoCompany) return JSON.parse(strInfoCompany)
    else return null
  }

  logout() {
    if (process.server) return
    MwCookie.delete(USER_ID)
    MwCookie.delete(ACCESS_TOKEN)
    MwCookie.delete(REFRESH_TOKEN)
    MwCookie.delete(COMPANY_ID)
    MwCookie.delete(COMPANY_INFO)
    MwCookie.delete(DATABASE)
    MwCookie.delete(EXPIRES_TOKEN)
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

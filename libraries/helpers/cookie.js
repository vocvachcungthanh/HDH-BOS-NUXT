import { MwString } from '~/libraries/helpers/index'

const TinyCookie = require('tiny-cookie')
export const MwCookie = {
  set(name, value, daysOrOptions) {
    let opts = daysOrOptions

    if (typeof daysOrOptions !== 'object') {
      opts = { expires: daysOrOptions }
    }

    return TinyCookie.set(name, value, opts)
  },

  get(name) {
    return TinyCookie.get(name)
  },

  getJSON(name) {
    return TinyCookie.getJSON(name)
  },

  delete: function (name, options) {
    let opts = { expires: -1 }
    if (options !== undefined) {
      opts = Object.assign(options, opts)
    }
    this.set(name, '', opts)
  },

  convertCookie(cookieName, stringCookie) {
    const dataCookie = new RegExp('' + cookieName + '[^;]+').exec(stringCookie)
    const strCookie = MwString.checkExists(dataCookie) ? dataCookie[0] : null
    return unescape(
      strCookie ? strCookie.toString().replace(/^[^=]+./, '') : ''
    )
  },
}

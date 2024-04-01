import { MwString, MwCookie, MwHandle } from '~/libraries/helpers/index'
import { MwAuth } from '~/libraries/auth/index'
import {
  ACCESS_TOKEN,
  COMPANY_ID,
  DATABASE,
  USER_ID,
} from '~/libraries/constant'
const auth = new MwAuth()

export default function ({ $axios, env, redirect, response, store }, inject) {
  const req = response

  const getConfig = function () {
    let strAuthorization = ''
    let userId = null
    let companyId = null
    let dbh = ''

    if (process.client && MwString.existsObject(req, ['headers', 'cookie'])) {
      dbh = MwCookie.convertCookie(DATABASE, req.headers.cookie)
    } else if (
      !process.server &&
      MwString.checkExists(MwCookie.get(DATABASE))
    ) {
      dbh = MwCookie.get(DATABASE)
    }

    if (process.server && MwString.existsObject(req, ['headers', 'cookie'])) {
      strAuthorization = MwCookie.convertCookie(
        ACCESS_TOKEN,
        req.headers.cookie
      )
    } else if (
      !process.server &&
      MwString.checkExists(MwCookie.get(ACCESS_TOKEN))
    ) {
      strAuthorization = MwCookie.get(ACCESS_TOKEN)
    }

    if (process.server && MwString.existsObject(req, ['headers', 'cookie'])) {
      userId = MwCookie.convertCookie(USER_ID, req.headers.cookie)
    } else if (!process.server && MwString.checkExists(MwCookie.get(USER_ID))) {
      userId = MwCookie.get(USER_ID)
    }

    if (process.server && MwString.existsObject(req, ['headers', 'cookie'])) {
      companyId = MwCookie.convertCookie(COMPANY_ID, req.headers.cookie)
    } else if (
      !process.server &&
      MwString.checkExists(MwCookie.get(COMPANY_ID))
    ) {
      companyId = MwCookie.get(COMPANY_ID)
    }

    const headers = {
      'X-Requested-With': 'XMLHttpsRequest',
      Authorization: `Bearer ${strAuthorization}`,

      id_user: userId,
      company_id: companyId,
      db_h: dbh,
    }

    let agent = {}
    if (process.server) {
      const https = require('https')

      agent = new https.Agent({
        rejectUnauthorized: false,
      })
    }

    return {
      baseURL: process.env.baseApiUrl,
      url: process.env.baseURL,
      timeout: 30000,
      headers,
      responseType: 'json',
      httpsAgent: agent,
      validateStatus: function (status) {
        if (auth.logged()) {
          if (status === 401) {
            MwHandle.handleWarning({
              context: 'Token không tồn tại hoặc không hợp lệ',
            })
            auth.logout()
            redirect('/login')
          } else if (status === 402) {
            store.dispatch('ACT_AUTH_REFRESH')
          }
          return true
        }

        return true
      },
    }
  }
  $axios.setBaseURL(env.baseApiUrl)
  const axios = $axios.create(getConfig())

  axios.interceptors.response.use((response) => {
    if (response.status === 200) {
      return Promise.resolve({
        status: response.status,
        data: response.data.data,
        message: response.data.message,
      })
    } else if (response.status === 500) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        status: 500,
        errors: {
          message: 'Lỗi cơ sở dư liệu',
        },
      })
    } else if (response.status === 429) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        status: 429,
        errors: {
          message: 'Lỗi quá tải',
        },
      })
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        status: response.status,
        errors: response.data.errors,
      })
    }
  })

  inject('api', axios)
}

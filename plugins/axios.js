import { MwString, MwCookie, MwHandle } from '~/libraries/helpers/index'
import { MwAuth } from '~/libraries/auth/index'
const auth = new MwAuth()

export default function ({ $axios, env, redirect, response }, inject) {
  const req = response

  const getConfig = function () {
    let strAuthorization = ''
    let userId = null
    let companyId = null
    let dbh = ''

    if (process.client && MwString.existsObject(req, ['headers', 'cookie'])) {
      dbh = MwCookie.convertCookie('db_h', req.headers.cookie)
    } else if (!process.server && MwString.checkExists(MwCookie.get('db_h'))) {
      dbh = MwCookie.get('db_h')
    }

    if (process.server && MwString.existsObject(req, ['headers', 'cookie'])) {
      strAuthorization = MwCookie.convertCookie(
        'access_token',
        req.headers.cookie
      )
    } else if (
      !process.server &&
      MwString.checkExists(MwCookie.get('access_token'))
    ) {
      strAuthorization = MwCookie.get('access_token')
    }

    if (process.server && MwString.existsObject(req, ['headers', 'cookie'])) {
      userId = MwCookie.convertCookie('id_user', req.headers.cookie)
    } else if (
      !process.server &&
      MwString.checkExists(MwCookie.get('id_user'))
    ) {
      userId = MwCookie.get('id_user')
    }

    if (process.server && MwString.existsObject(req, ['headers', 'cookie'])) {
      companyId = MwCookie.convertCookie('company_id', req.headers.cookie)
    } else if (
      !process.server &&
      MwString.checkExists(MwCookie.get('company_id'))
    ) {
      companyId = MwCookie.get('company_id')
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
          if (status === 401 || status === 403) {
            MwHandle.handleWarning({
              context: 'Phiên làm việc đã hết hạn , đề nghị đăng nhập lại',
            })
            auth.logout()
            redirect('/login')
          }
          return true
        }

        return true
      },
    }
  }

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

  axios.setBaseURL(env.baseApiUrl)

  inject('api', axios)
}

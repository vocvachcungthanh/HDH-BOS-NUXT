import { MwCookie, MwHandle } from '~/libraries/helpers/index'
import { MwAuth } from '~/libraries/auth/index'
import {
  ACCESS_TOKEN,
  COMPANY_ID,
  DATABASE,
  USER_ID,
} from '~/libraries/constant'

const auth = new MwAuth()

export default function ({ $axios, env, redirect, response, store }, inject) {
  let refreshing = false
  let refreshPromise = null

  const updateAxiosConfig = () => {
    const cookie = response?.headers?.cookie
    const dbh = process.server
      ? MwCookie.convertCookie(DATABASE, cookie)
      : MwCookie.get(DATABASE)

    const strAuthorization = process.server
      ? MwCookie.convertCookie(ACCESS_TOKEN, cookie)
      : MwCookie.get(ACCESS_TOKEN)

    const userId = process.server
      ? MwCookie.convertCookie(USER_ID, cookie)
      : MwCookie.get(USER_ID)

    const companyId = process.server
      ? MwCookie.convertCookie(COMPANY_ID, cookie)
      : MwCookie.get(COMPANY_ID)

    const headers = {
      'X-Requested-With': 'XMLHttpsRequest',
      Authorization: `Bearer ${strAuthorization}`,
      id_user: userId,
      company_id: companyId,
      db_h: dbh,
    }

    const agent = process.server
      ? new (require('https').Agent)({ rejectUnauthorized: false })
      : {}

    const refreshAccessToken = async () => {
      // Kiểm tra xem có đang thực hiện refresh hay không
      if (refreshing) {
        // Nếu đang refresh, trả về hứa hẹn đang thực hiện refresh
        return refreshPromise
      }

      // Đánh dấu là đang thực hiện refresh
      refreshing = true

      try {
        // Thực hiện refresh token
        refreshPromise = await store.dispatch('ACT_AUTH_REFRESH')
        // Đánh dấu là đã hoàn thành refresh
        refreshing = false
        refreshPromise = null
      } catch (error) {
        // Xử lý lỗi refresh token ở đây (ví dụ: logout, redirect...)
        refreshing = false
        refreshPromise = null
      }
    }

    const getConfig = {
      baseURL: env.baseApiUrl,
      url: env.baseURL,
      timeout: 30000,
      headers,
      responseType: 'json',
      httpsAgent: agent,
      validateStatus: async (status) => {
        if (auth.logged() && !refreshing) {
          if (status === 401) {
            MwHandle.handleWarning({
              context: 'Token không tồn tại hoặc không hợp lệ',
            })
            auth.logout()
            redirect('/login')
          } else if (status === 402) {
            await refreshAccessToken()
          }
          return true
        }

        return true
      },
    }

    $axios.setBaseURL(env.baseApiUrl)
    const axios = $axios.create(getConfig)

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

  updateAxiosConfig()

  inject('updateAxios', {
    upload() {
      updateAxiosConfig()
    },
  })
}

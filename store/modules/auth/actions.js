import { MwAuth } from '@/libraries/auth/index'

const auth = new MwAuth()

export default {
  async ACT_AUTH_LOGIN(context, parmas) {
    try {
      const response = await this.$api.post('auth/login', parmas)

      if (response.status === 200) {
        return context.dispatch('ACT_SET_INFO', response.data)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_AUTH_LOGOUT(_context) {
    try {
      const response = await this.$api.post('auth/logout')

      if (response.status === 200) {
        auth.logout()
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },

  async ACT_AUTH_REFRESH(context) {
    try {
      const response = await this.$api.post('auth/refresh', {
        refresh_token: auth.getRefeshToken(),
      })

      if (response.status === 200) {
        const token = response.data.access_token
        const companyId = response.data.company_id
        const idUser = response.data.id

        auth.setAccessToken(token)
        auth.setRefreshToken(response.data.refresh_token)
        auth.setUser(idUser)
        auth.setCompany(companyId)

        context.commit('SET_AUTH_LOGIN', response.data)

        if (companyId) {
          context.dispatch('ACT_COMPANY', { companyId, token, idUser })
          window.location.reload()
        }
      }
    } catch (error) {
      context.dispatch('ACT_AUTH_LOGOUT')
    }
  },

  ACT_SET_INFO(context, params) {
    const token = params.access_token
    const companyId = params.company_id
    const idUser = params.id

    auth.setAccessToken(token)
    auth.setRefreshToken(params.refresh_token)
    auth.setUser(idUser)
    auth.setCompany(companyId)
    auth.setTokenExpired(params.expires_in)

    context.commit('SET_AUTH_LOGIN', params)

    if (companyId) {
      context.dispatch('ACT_EXPIRES_IN')
      return context.dispatch('ACT_COMPANY', { companyId, token, idUser })
    }
  },

  ACT_EXPIRES_IN(context) {
    setTimeout(() => {
      context.dispatch('ACT_AUTH_REFRESH')
    }, 1000 * auth.getTokenExpired())
  },
}

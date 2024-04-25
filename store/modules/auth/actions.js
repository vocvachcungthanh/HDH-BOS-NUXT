import { MwAuth } from '@/libraries/auth/index'
import { ERR_CONNECTITON_REFUSE, ERR_REFRESH_TOKEN } from '~/contacts'

const auth = new MwAuth()

export default {
  async ACT_AUTH_LOGIN(context, parmas) {
    try {
      const response = await this.$api.post('auth/login', parmas)

      if (response.status === 200) {
        return context.dispatch('ACT_SET_INFO', response.data)
      }
    } catch (error) {
      if (error.response) {
        return Promise.reject(error.errors.message)
      } else {
        return Promise.reject(ERR_CONNECTITON_REFUSE)
      }
    }
  },

  async ACT_AUTH_LOGOUT(_context) {
    try {
      const response = await this.$api.post('auth/logout')

      if (response.status === 200) {
        _context.commit('SET_AUTH_LOGOUT', {
          token: null,
          companyId: null,
          userId: null,
          expiresIn: null,
          refreshToken: null,
        })
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_AUTH_REFRESH(context) {
    try {
      const response = await this.$api.post('auth/refresh', {
        refresh_token: auth.getRefeshToken(),
      })

      if (response.status === 200) {
        const companyId = response.data.company_id
        const token = response.data.access_token
        const userId = response.data.id
        const expiresIn = response.data.expires_in
        const refreshToken = response.data.refresh_token

        context.commit('SET_AUTH_LOGIN', {
          token,
          companyId,
          userId,
          expiresIn,
          refreshToken,
        })

        if (companyId) {
          context.dispatch('ACT_COMPANY')
        }

        context.commit('SET_RELOAD_TOEKN', true)
      }
    } catch (error) {
      context.commit('SET_AUTH_LOGOUT', {
        token: null,
        companyId: null,
        userId: null,
        expiresIn: null,
        refreshToken: null,
      })

      return Promise.reject(ERR_REFRESH_TOKEN)
    }
  },

  async ACT_SET_INFO(context, params) {
    const companyId = params.company_id
    const token = params.access_token
    const userId = params.id
    const expiresIn = params.expires_in
    const refreshToken = params.refresh_token

    context.commit('SET_AUTH_LOGIN', {
      token,
      companyId,
      userId,
      expiresIn,
      refreshToken,
    })

    if (companyId) {
      return await context.dispatch('ACT_COMPANY')
    }
  },
}

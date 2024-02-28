import { MwAuth } from '@/libraries/auth/index'

const auth = new MwAuth()

export default {
  async ACT_AUTH_LOGIN(context, parmas) {
    try {
      const response = await this.$api.post('login', parmas)

      if (response.status === 200) {
        auth.setAccessToken(response.data.token)
        auth.setRefreshToken(response.data.refresh_token)
        auth.setTokenExpired(response.data.token_expired)
        auth.setRefreshTokenExpired(response.data.refresh_token_expired)
        auth.setUser(response.data.user_id)
        auth.setCompany(response.data.company_id)

        context.commit('SET_AUTH_LOGIN', response.data)

        const token = response.data.token
        const companyId = response.data.company_id

        if (companyId) {
          context.dispatch('ACT_COMPANY', { companyId, token }).then((_res) => {
            return Promise.resolve(true)
          })
        }
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },
}

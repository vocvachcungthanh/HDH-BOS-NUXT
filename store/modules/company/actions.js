import { MwAuth } from '@/libraries/auth/index'

const auth = new MwAuth()

export default {
  async ACT_COMPANY(context, params) {
    try {
      const configs = {
        headers: {
          'X-Requested-With': 'XMLHttpsRequest',
          access_token: params.token,
        },
      }

      const response = await this.$api.get(
        `company/${params.companyId}`,
        configs
      )

      if (response.status === 200) {
        context.commit('SET_COMPANY', response.data)
        auth.setDatabase(response.data.db_h)
        auth.setCompanyInfo(response.data)

        return Promise.resolve(true)
      }
    } catch (error) {
      console.log(error)
      return Promise.reject(error.errors.message)
    }
  },
}

import { MwCookie } from '~/libraries/helpers/index'
import { COMPANY_ID } from '~/libraries/constant'

export default {
  async ACT_COMPANY(context) {
    try {
      const response = await this.$api.get(
        `company/${MwCookie.get(COMPANY_ID)}`
      )

      if (response.status === 200) {
        context.commit('SET_COMPANY', response.data)

        return Promise.resolve(true)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },
}

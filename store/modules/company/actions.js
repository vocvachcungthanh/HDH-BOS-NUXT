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

        return Promise.resolve(true)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },
}

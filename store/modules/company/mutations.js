import { MwAuth } from '@/libraries/auth/index'

const { saveCompnayInfoCookie } = new MwAuth()

export default {
  SET_COMPANY(state, data) {
    const database = data.db_h
    const companyInfo = data

    state.company = {
      hdH: database,
      info: companyInfo,
    }

    saveCompnayInfoCookie({ companyInfo, database })
  },
}

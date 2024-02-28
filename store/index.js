import { Store } from 'vuex'

import mutations from '~/store/mutations'
import actions from '~/store/actions'
import getters from '~/store/getters'
import state from '~/store/state'

import { menusStore } from '~/store/modules/menus'
import { recoveryEmailStore } from '~/store/modules/recoveryEmail'
import { departmentStore } from '~/store/modules/department'
import { fieldsStore } from '~/store/modules/fields'
import { authStore } from '~/store/modules/auth'
import { companyStore } from '~/store/modules/company'

const store = () =>
  new Store({
    state,
    getters,
    mutations,
    actions,

    modules: {
      storeMenu: menusStore,
      storeRecoveryEMail: recoveryEmailStore,
      storeDepartment: departmentStore,
      storeFields: fieldsStore,
      storeAuth: authStore,
      storeCompany: companyStore,
    },
  })

export default store

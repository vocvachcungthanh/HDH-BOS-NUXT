import { Store } from 'vuex'

import mutations from '~/store/mutations'
import actions from '~/store/actions'
import getters from '~/store/getters'
import state from '~/store/state'

import { recoveryEmailStore } from '~/store/modules/recoveryEmail'
import { departmentStore } from '~/store/modules/department'
import { companyStore } from '~/store/modules/company'
import { fieldsStore } from '~/store/modules/fields'
import { menusStore } from '~/store/modules/menus'
import { blockStore } from '~/store/modules/block'
import { authStore } from '~/store/modules/auth'

const store = () =>
  new Store({
    state,
    getters,
    mutations,
    actions,

    modules: {
      storeMenu: menusStore,
      storeRecoveryEMail: recoveryEmailStore,
      storeBlock: blockStore,
      storeFields: fieldsStore,
      storeAuth: authStore,
      storeCompany: companyStore,
      storeDepartment: departmentStore,
    },
  })

export default store

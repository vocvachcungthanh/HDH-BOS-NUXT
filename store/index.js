import { Store } from 'vuex'

import mutations from '~/store/mutations'
import actions from '~/store/actions'
import getters from '~/store/getters'
import state from '~/store/state'

import { menusStore } from '~/store/modules/menus'
import { recoveryEmailStore } from '~/store/modules/recoveryEmail'
import { departmentStore } from '~/store/modules/department'

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
    },
  })

export default store

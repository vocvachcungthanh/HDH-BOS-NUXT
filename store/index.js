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
import { accountTypeStore } from '~/store/modules/accountType'
import { postionStore } from '~/store/modules/postions'
import { trashStore } from '~/store/modules/trash'
import { staffsStore } from '~/store/modules/staffs'
import { orgChartStore } from '~/store/modules/orgChart'

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
      storeAccountType: accountTypeStore,
      storePostion: postionStore,
      storeTrash: trashStore,
      storeStaffs: staffsStore,
      storeOrgChart: orgChartStore,
    },
  })

export default store

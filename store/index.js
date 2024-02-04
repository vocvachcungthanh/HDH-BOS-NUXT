import { Store } from 'vuex'

import mutations from '~/store/mutations'
import actions from '~/store/actions'
import getters from '~/store/getters'
import state from '~/store/state'

import { menusStore } from '~/store/modules/menus'

const store = () =>
  new Store({
    state,
    getters,
    mutations,
    actions,

    modules: {
      StoreMenu: menusStore,
    },
  })

export default store

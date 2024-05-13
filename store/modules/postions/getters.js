import { MwArray } from '~/libraries/helpers'

const uniqueArray = MwArray.uniqueArray

export default {
  GET_CODE_POSTION(state) {
    return state.codePostion
  },

  GET_POSTIONS(state) {
    return state.postions || {}
  },

  GET_SLICER_POSTION(state, getters, rootState) {
    const slicerUnit = []
    const slicerCodePostion = []
    const slicerNamePostion = []
    const slicerAccountType = []
    const slicerPermissions = []
    const slicerBenefits = []

    const postions = state.postions.data || []
    postions.forEach((item) => {
      slicerUnit.push({
        id: item.department_id,
        name: item.department_name,
      })

      slicerCodePostion.push({
        id: item.id,
        name: item.code,
      })

      slicerNamePostion.push({
        id: item.id,
        name: item.name,
      })

      slicerAccountType.push({
        id: item.account_type_id,
        name: item.account_type_name,
      })

      slicerPermissions.push({
        id: item.id,
        name: item.permissions,
      })

      slicerBenefits.push({
        id: item.id,
        name: item.benefits,
      })
    })

    const data = []

    function values(name) {
      if (name === 'slicerUnit') {
        return uniqueArray(slicerUnit)
      }

      if (name === 'slicerCodePostion') {
        return uniqueArray(slicerCodePostion)
      }

      if (name === 'slicerNamePostion') {
        return uniqueArray(slicerNamePostion)
      }

      if (name === 'slicerAccountType') {
        return uniqueArray(slicerAccountType)
      }

      if (name === 'slicerPermissions') {
        return uniqueArray(slicerPermissions)
      }

      if (name === 'slicerBenefits') {
        return uniqueArray(slicerBenefits)
      }
    }

    rootState.slicer.forEach((item) => {
      if (item.type === 'postion') {
        data.push({
          ...item,
          values: values(item.name),
        })
      }
    })

    return data
  },
}

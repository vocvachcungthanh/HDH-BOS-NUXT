import { MwArray } from '~/libraries/helpers'

const uniqueArray = MwArray.uniqueArray
export default {
  GET_SLICER_STAFF(state, getters, rootState) {
    const slicerStaffCode = []
    const slicerStaffName = []
    const slicerStaffPhone = []
    const slicerStaffEmail = []
    const slicerStaffPostion = []
    const slicerStaffUnit = []
    const slicerStaffStaff = []

    const data = []

    function values(name) {
      if (name === 'slicerStaffCode') {
        return uniqueArray(slicerStaffCode)
      }

      if (name === 'slicerStaffName') {
        return uniqueArray(slicerStaffName)
      }

      if (name === 'slicerStaffPhone') {
        return uniqueArray(slicerStaffPhone)
      }

      if (name === 'slicerStaffEmail') {
        return uniqueArray(slicerStaffEmail)
      }

      if (name === 'slicerStaffPostion') {
        return uniqueArray(slicerStaffPostion)
      }

      if (name === 'slicerStaffUnit') {
        return uniqueArray(slicerStaffUnit)
      }

      if (name === 'slicerStaffStaff') {
        return uniqueArray(slicerStaffStaff)
      }
    }

    rootState.slicer.forEach((item) => {
      if (item.type === 'staff') {
        data.push({
          ...item,
          values: values(item.name),
        })
      }
    })
    return [...data]
  },
}

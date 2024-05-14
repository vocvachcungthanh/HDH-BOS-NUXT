import { MwArray } from '~/libraries/helpers'

const uniqueArray = MwArray.uniqueArray
export default {
  GET_DEPARTMENT(state) {
    return state.departments || []
  },

  GET_CODE_DEPARTMENT(state) {
    return state.codeDepartment
  },

  GET_UNIT(state) {
    return MwArray.removeEmptyChildren(state.units || [], 'subordinate') || []
  },

  GET_EMPTY_SEARCH(state) {
    return state.emptySearch || ''
  },

  GET_SLICER_UNITS(state, getters, rootState) {
    const slicerCode = []
    const slicerName = []
    const slicerBlock = []
    const slicerParent = []
    const slicerField = []

    state.units.forEach((item) => {
      slicerCode.push({
        id: item.id,
        name: item.code,
      })

      slicerName.push({
        id: item.id,
        name: item.name,
      })

      slicerBlock[item.block_id] = {
        id: item.block_id,
        name: item.block_name,
      }

      if (item.parent_id !== 0) {
        slicerParent[item.parent_id] = {
          id: item.parent_id,
          name: item.parent_name,
        }
      }

      slicerField[item.field_id] = {
        id: item.field_id,
        name: item.field_name,
      }
    })

    const data = []

    function values(name) {
      if (name === 'slicerCode') {
        return uniqueArray(slicerCode)
      }

      if (name === 'slicerName') {
        return uniqueArray(slicerName)
      }

      if (name === 'slicerBlock') {
        return uniqueArray(slicerBlock)
      }

      if (name === 'slicerParent') {
        return uniqueArray(slicerParent)
      }

      if (name === 'slicerField') {
        return uniqueArray(slicerField)
      }
    }

    rootState.slicer.forEach((item) => {
      if (item.type === 'unit') {
        data.push({
          ...item,
          values: values(item.name),
        })
      }
    })

    return [...data]
  },
}

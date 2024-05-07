import { MwArray } from '~/libraries/helpers'

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
    const sliceBlock = []
    const sliceParent = []
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

      sliceBlock[item.block_id] = {
        id: item.block_id,
        name: item.block_name,
      }

      if (item.parent_id !== 0) {
        sliceParent[item.parent_id] = {
          id: item.parent_id,
          name: item.parent_name,
        }
      }

      slicerField[item.field_id] = {
        id: item.field_id,
        name: item.field_name,
      }
    })

    console.log(sliceBlock)

    const data = []

    function values(name) {
      if (name === 'slicerCode') {
        return sliceParent.filter(Boolean || 0)
      }

      if (name === 'slicerName') {
        return slicerName.filter(Boolean || 0)
      }

      if (name === 'sliceBlock') {
        return sliceBlock.filter(Boolean || 0)
      }

      if (name === 'sliceParent') {
        return sliceParent.filter(Boolean || 0)
      }

      if (name === 'slicerField') {
        return slicerField.filter(Boolean || 0)
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

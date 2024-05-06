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

    rootState.slicer.slicerCode = {
      ...rootState.slicer.slicerCode,
      values: slicerCode,
    }
    rootState.slicer.slicerName = {
      ...rootState.slicer.slicerName,
      values: slicerName,
    }
    rootState.slicer.slicerBlock = {
      ...rootState.slicer.slicerBlock,
      values: sliceBlock.filter(Boolean || 0),
    }
    rootState.slicer.slicerParent = {
      ...rootState.slicer.slicerParent,
      values: sliceParent.filter(Boolean || 0),
    }
    rootState.slicer.slicerField = {
      ...rootState.slicer.slicerField,
      values: slicerField.filter(Boolean || 0),
    }

    const units = []

    Object.keys(rootState.slicer).forEach((item) => {
      if (rootState.slicer[item].type === 'unit') {
        units.push(rootState.slicer[item])
      }
    })

    return { ...units }
  },
}

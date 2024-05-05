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

  GET_SLICER_UNITS(state) {
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

    state.slicerUnit.slicerCode = {
      ...state.slicerUnit.slicerCode,
      values: slicerCode,
    }

    state.slicerUnit.slicerName = {
      ...state.slicerUnit.slicerName,
      values: slicerName,
    }

    state.slicerUnit.slicerBlock = {
      ...state.slicerUnit.slicerBlock,
      values: sliceBlock.filter(Boolean || 0),
    }

    state.slicerUnit.slicerParent = {
      ...state.slicerUnit.slicerParent,
      values: sliceParent.filter(Boolean || 0),
    }

    state.slicerUnit.slicerField = {
      ...state.slicerUnit.slicerField,
      values: slicerField.filter(Boolean || 0),
    }
    return state.slicerUnit
  },
}

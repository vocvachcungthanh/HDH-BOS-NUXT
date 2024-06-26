import _ from 'lodash'
import { MwString } from './string'

export const MwArray = {
  checkArrayNotEmpty(data) {
    if (this.isArray(data) && data.length > 0) return true
    return false
  },

  chunkArray(data, numberItem) {
    if (this.checkArrayNotEmpty(data) && numberItem > 0) {
      return _.chunk(data, numberItem)
    }
    return []
  },

  pushItemToArray(dataOrigin, item) {
    if (this.isArray(dataOrigin)) dataOrigin.push(item)
    else dataOrigin = [item]
    return _.uniqWith(dataOrigin, _.isEqual)
  },

  isArray(input) {
    if (MwString.checkExists(input) && Array.isArray(input)) return true
    else return false
  },

  inArray(value, array) {
    if (this.isArray(array) && array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        if (value === array[i]) return true
      }
    }
    return false
  },

  merge(obj, src) {
    const objClone = _.clone(obj)
    return _.merge(objClone, src)
  },

  setNumber(data) {
    const coverStatus = []

    data.forEach((item) => {
      coverStatus.push({
        ...item,
        status: Number(item.status),
        source_id: Number(item.source_id),
      })
    })

    return coverStatus || []
  },

  removeEmptyChildren(data, key = 'children') {
    if (data?.length > 0) {
      data.forEach((item) => {
        if (item[key]?.length === 0) {
          delete item[key]
        } else {
          this.removeEmptyChildren(item[key])
        }
      })
    }

    return data
  },

  uniqueArray(data) {
    return data.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (t) =>
            t?.id === item?.id && t.name === item.name && item.name !== null
        )
    )
  },
}

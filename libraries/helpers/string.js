import _ from 'lodash'
import { MwArray } from './index'

export const MwString = {
  renderParams(obj) {
    let str = ''
    Object.keys(obj).forEach(function (key) {
      if (MwString.checkNotEmpty(obj[key])) str += '&' + key + '=' + obj[key]
    })
    if (str) return _.trimStart(str, '&')
    else return ''
  },

  /**
   * Kiểm tra xem object có tồn tại hay ko
   * */
  existsObject(data, arr) {
    if (this.isObject(data) && MwArray.checkArrayNotEmpty(arr)) {
      for (const item of arr) {
        if (this.checkNotEmpty(data[item])) data = data[item]
        else return false
      }
      return true
    }
    return false
  },

  checkNotEmpty(input) {
    try {
      if (this.checkExists(input) && (input !== '' || input.trim() !== ''))
        return true
      return false
    } catch (e) {
      return false
    }
  },

  checkExists(input) {
    try {
      if (!_.isUndefined(input) && !_.isNull(input)) return true
      return false
    } catch (e) {
      return false
    }
  },

  stripVN(str) {
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a')
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e')
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i')
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o')
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u')
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y')
    str = str.replace(/(đ)/g, 'd')
    str = str.replace(/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/g, 'A')
    str = str.replace(/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/g, 'E')
    str = str.replace(/(Ì|Í|Ị|Ỉ|Ĩ)/g, 'I')
    str = str.replace(/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/g, 'O')
    str = str.replace(/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/g, 'U')
    str = str.replace(/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/g, 'Y')
    str = str.replace(/(Đ)/g, 'D')
    return str
  },

  strSlug(str) {
    if (this.checkExists(str) && str !== '') {
      return _.kebabCase(this.stripVN(str.toLowerCase()))
    }
    return ''
  },

  isObject(obj) {
    if (this.checkExists(obj)) return _.isObject(obj)
    return false
  },

  clone(input) {
    if (this.checkNotEmpty(input)) return _.clone(input)
    return null
  },

  replace(strSource, strReplace, strToReplace) {
    if (this.checkExists(strSource)) {
      return _.replace(strSource, new RegExp(strReplace, 'g'), strToReplace)
    }
    return null
  },

  stripTags(str, allow) {
    if (!str) return ''
    // making sure the allow arg is a string containing only tags in lowercase (<a><b><c>)
    allow = (
      ((allow || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []
    ).join('')
    const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
    const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi
    let strReturn = str
      .replace(commentsAndPhpTags, '')
      .replace(tags, function ($0, $1) {
        return allow.includes('<' + $1.toLowerCase() + '>') ? $0 : ''
      })
    strReturn = strReturn.replace(/(?:\t|\t)/g, '')
    strReturn = strReturn.replace(/(?:\r\n\t|\r|\n)/g, '<br>')
    strReturn = strReturn.replace(/<br(.*?)>/g, '<br>')
    strReturn = strReturn.replace(/(<br ?\/?>)+/g, '<br>')
    strReturn = strReturn.replace(/(?:<br>\s*){2,}/g, '<br>')
    strReturn = strReturn.replace(/(?:&nbsp;\s*){2,}/g, '&nbsp;')
    if (strReturn.indexOf('<br>') === 0) {
      strReturn = strReturn.replace('<br>', '')
    }
    return strReturn
  },

  /**
   * Lấy địa chỉ tương đối theo tọa độ
   * */
  getLocationByCoordinates(lat, lng, callBack) {
    const request = new XMLHttpRequest()
    const url =
      'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
      lat +
      ',' +
      lng +
      '&sensor=true'
    request.open('GET', url, true)
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        const address = data.results[0]
        callBack(address.formatted_address)
      }
    }
    request.send()
  },

  /**
   * joinString
   * */
  joinString(array) {
    if (MwArray.checkArrayNotEmpty(array)) {
      return array
        .map((item) => {
          return item.name
        })
        .join(', ')
    }
    return ''
  },
}

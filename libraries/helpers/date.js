import moment from 'moment'
import { MwString } from './index'

export const MwDate = {
  /**
   * Thời gian hiện tại dành cho DatetimePicker
   * */
  timeNow() {
    return moment().format()
  },

  /**
   * Định dạng thời gian lấy từ database ra để hiển thị dành cho DatetimePicker
   * */
  convertObjToString(objDate, format = 'DD/MM/YYYY') {
    if (MwString.checkNotEmpty(objDate))
      return moment(objDate, format).format('X')
    return ''
  },

  /**
   * Format date
   * Định dạng thời gian tương tác với database dành cho DatetimePicker: ('L')
   * Ngày tháng năm 'DD/MM/YYYY'
   * Full : 'L LT'
   * Ngày tháng: 'DD/MM'
   * */
  formatDateTime(strDate, format = 'DD/MM/YYYY') {
    if (MwString.checkNotEmpty(strDate))
      return moment(strDate, 'YYYY-MM-DD HH:mm Z').format(format)
    return ''
  },

  formatDateTest(strDate, format = 'DD/MM/YYYY') {
    if (MwString.checkNotEmpty(strDate))
      return moment(strDate, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm Z')
    return ''
  },

  /**
   * Format time from timestamp to string
   * Định dạng thời gian tương tác với database dành cho DatetimePicker: ('L')
   * Ngày tháng năm 'DD/MM/YYYY'
   * Full : 'L LT'
   * Ngày tháng: 'DD/MM'
   */
  convertTimestampToString(timestamp, format = 'DD/MM/YYYY') {
    if (MwString.checkNotEmpty(timestamp))
      return moment.unix(timestamp).format(format)
    return ''
  },

  /**
   * Định dạng thời gian từ string sang timestamp
   * */
  convertStringToTimeStamp(strDate) {
    if (MwString.checkNotEmpty(strDate))
      return moment(strDate, 'DD/MM/YYYY').format('X')
    return ''
  },

  /**
   * Cộng thêm thời gian
   * */
  addDays(days = 0) {
    if (days > 0) return moment().startOf('days').add(days, 'days')
    // eslint-disable-next-line no-console
    else console.error('Lỗi thêm thời gian')
  },

  /**
   * Trừ thời gian
   * */
  subDay(days = 0) {
    if (days > 0) return moment().startOf('days').subtract(days, 'days')
    // eslint-disable-next-line no-console
    else console.error('Lỗi bớt thời gian')
  },
}

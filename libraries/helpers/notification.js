import notification from 'ant-design-vue/lib/notification'
import {
  MESS_TITLE_ERROR,
  MESS_TITLE_SUCCESS,
  MESS_TITLE_WRANING,
} from '~/libraries/constant'

export const MwHandle = {
  handleError(data) {
    const title = data.title || MESS_TITLE_ERROR
    const context = data.context

    notification.error({
      placement: 'topRight',
      message: title,
      description: context,
    })
  },

  handleSuccess(data) {
    const title = data.title || MESS_TITLE_SUCCESS
    const context = data.context

    notification.success({
      message: title,
      description: context,
    })
  },

  handleWarning(data) {
    const title = data.title || MESS_TITLE_WRANING
    const context = data.context

    notification.warning({
      placement: 'topRight',
      message: title,
      description: context,
    })
  },
}

export default function (context) {
  let userAgent = ''
  context.isMobile = false

  if (context.req) {
    userAgent = context.req.headers['user-agent']
  } else {
    userAgent = navigator.userAgent
  }

  if (/mobile/i.test(userAgent)) {
    context.isMobile = true
    context.store.commit('SET_IS_MOBILE', true)
  }
}

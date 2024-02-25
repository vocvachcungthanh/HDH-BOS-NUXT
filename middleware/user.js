import { MwAuth } from '@/libraries/auth/index'

export default ({ app, isServer, req, redirect }) => {
  const auth = new MwAuth(req)
  if (!auth.logged()) return redirect('/login')
}

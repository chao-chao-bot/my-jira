import { AuthFormType, Users } from '@/types'
import * as React from 'react'
import * as auth from '@/auth-provider'
import { ReactNode } from 'react'
import http from '@/utils/http'
import { useMount } from '@/hooks'
interface ContextProps {
  user: Users | null
  register: (form: AuthFormType) => void
  login: (form: AuthFormType) => Promise<void>
  loginout: () => Promise<void>
}

const bootstrapUser = async () => {
  let user = null
  const token = auth.getToken()
  if (token) {
    const data = await http('userinfo', { token, data: auth.getUserInfo() })
    user = { ...data.user, token }
  }
  return user
}

export const AuthContext = React.createContext<ContextProps | undefined>(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState<Users | null>(null)
  const login = (form: AuthFormType) => auth.login(form).then(setUser)
  const register = (form: AuthFormType) => auth.register(form).then(setUser)
  const loginout = () => auth.loginout().then(() => setUser(null))
  useMount(() => {
    bootstrapUser().then(setUser)
  })
  return (
    <AuthContext.Provider value={{ user, login, register, loginout }}>
      {children}
    </AuthContext.Provider>
  )
}

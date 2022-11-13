import { AuthFormType, Users } from '@/types'
import * as React from 'react'
import * as auth from '@/auth-provider'
import { ReactNode } from 'react'
interface ContextProps {
  user: Users | null
  register: (form: AuthFormType) => Promise<void>
  login: (form: AuthFormType) => Promise<void>
  loginout: () => Promise<void>
}
export const AuthContext = React.createContext<ContextProps | undefined>(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState<Users | null>(null)
  const login = (form: AuthFormType) => auth.login(form).then(setUser)
  const register = (form: AuthFormType) => auth.register(form).then(setUser)
  const loginout = () => auth.loginout().then(() => setUser(null))

  return (
    <AuthContext.Provider value={{ user, login, register, loginout }}>
      {children}
    </AuthContext.Provider>
  )
}

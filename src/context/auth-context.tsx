import { AuthFormType, Users } from '@/types'
import * as React from 'react'
import * as auth from '@/auth-provider'
import { ReactNode } from 'react'
import { useMount } from '@/hooks'
import { useAsync } from '@/hooks/useAsync'
import { FullPageErrorFallback, FullPageLoading } from '@/components/lib'
import { accountUserInfo } from '@/api/user/user-manage'

interface ContextProps {
  user: Users | null
  register: (form: AuthFormType) => void
  login: (form: AuthFormType) => Promise<void>
  loginout: () => Promise<void>
}

const bootstrapUser = async () => {
  let user: Users | null = null
  const token = auth.getToken()
  const info = auth.getUserInfo()
  if (token) {
    const data = await accountUserInfo({ id: info.id })
    user = data.user.data
  }
  return user
}

export const AuthContext = React.createContext<ContextProps | undefined>(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: user,
    isIdel,
    isLoading,
    isError,
    setData: setUser,
    run,
    error
  } = useAsync<Users | null>()

  const login = (form: AuthFormType) => auth.login(form).then(setUser)
  const register = (form: AuthFormType) => auth.register(form).then(setUser)
  const loginout = () => auth.loginout().then(() => setUser(null))

  useMount(() => {
    run(bootstrapUser())
  })
  if (isIdel || isLoading) {
    return <FullPageLoading />
  }
  if (isError) {
    return <FullPageErrorFallback />
  }

  return (
    <AuthContext.Provider value={{ user, login, register, loginout }}>
      {children}
    </AuthContext.Provider>
  )
}

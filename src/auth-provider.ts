import { AuthFormType, Users } from '@/types'
import { accountLogin, accountRegister } from './api/user/user-manage'

const localStorageTokenKey = '__auth_provider_token__'
const localStorageUserKey = '__auth_user_info__'
export const getToken = () => window.localStorage.getItem(localStorageTokenKey)
export const getUserInfo = () =>
  JSON.parse(window.localStorage.getItem(localStorageUserKey) || '{}')

export const handleUserResponse = ({ user }: { user?: Users }) => {
  window.localStorage.setItem(localStorageTokenKey, user?.token || '')
  window.localStorage.setItem(
    localStorageUserKey,
    JSON.stringify({ id: user?.id, username: user?.name })
  )
  return user
}

export const login = (data: AuthFormType) => {
  return accountLogin(data).then(
    (value: any) => {
      handleUserResponse(value || {})
      if (!value) {
        throw new Error('内部错误，请联系管理员')
      } else {
        return value.user
      }
    },
    (err: any) => {
      return Promise.reject(err)
    }
  )
}

export const register = (data: AuthFormType) => {
  //发送注册请求
  return accountRegister(data).then(
    (value: { user: any }) => {
      handleUserResponse(value || {})
      try {
        if (!value) {
          throw new Error('内部错误，请联系管理员')
        } else {
          return value.user
        }
      } catch (error) {
        console.log(error)
      }
    },
    (err: any) => {
      return Promise.reject(err)
    }
  )
}

export const loginout = async () => {
  window.localStorage.removeItem(localStorageTokenKey)
  window.localStorage.removeItem(localStorageUserKey)
}

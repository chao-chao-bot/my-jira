import { AuthFormType, Users } from '@/types'

const localStorageKey = '__auth_provider_token__'
export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({ user }: { user: Users }) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}

const apiUrl = import.meta.env.VITE_BASE_URL

export const login = (data: AuthFormType) => {
  //发送登录请求
  return fetch(`${apiUrl}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(async value => {
    if (value.ok) {
      return handleUserResponse(await value.json())
    } else {
      return Promise.reject(data)
    }
  })
}

export const register = (data: AuthFormType) => {
  //发送登录请求
  return fetch(`${apiUrl}/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(async value => {
    if (value.ok) {
      return value.json()
    } else {
      return Promise.reject(data)
    }
  })
}

export const loginout = async () => {
  window.localStorage.removeItem(localStorageKey)
}

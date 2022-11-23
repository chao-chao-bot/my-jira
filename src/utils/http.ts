import qs from 'qs'
import * as auth from '@/auth-provider'

const apiUrl = import.meta.env.VITE_BASE_URL

export interface RequestConfig extends RequestInit {
  data?: object
  token?: string
}
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: RequestConfig = {}
) => {
  const config = {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: token ? token : 'no-token',
      'Content-Type': data ? 'application/json' : ''
    },
    ...customConfig
  }

  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data || {})
  }
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async response => {
    if (response.status === 401) {
      //未登录或者token 失效 返回401
      await auth.loginout()
      window.location.reload()
      return Promise.reject({ message: '请重新登录' })
    }
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}
export default http

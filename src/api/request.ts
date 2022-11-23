import { getToken } from '@/auth-provider'

import Axios from 'axios'

/** 公共参数 */
const commonParams = () => {
  return {}
}

const apiUrl = import.meta.env.VITE_BASE_URL
export const instance = Axios.create({
  baseURL: apiUrl,
  timeout: 60 * 1000
})

interface AxiosResponse {
  status: number
  data: any
  message: string
}
const handleSuccess = (response: { status: number; data: AxiosResponse }) => {
  if (response?.data?.status === 1 || response?.data?.message === 'success') {
    return response.data.data
  }
  return Promise.reject(response)
}

/**请求拦截器配置 */
export const requestInterceptorsHeader = (config: any) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = token
  }
  return config
}
instance.interceptors.request.use(requestInterceptorsHeader)

/**
 * get 请求
 * @param url
 * @param params
 * @returns
 */
const get = <T>(url: string, params?: Record<string, any>, config?: any): Promise<T | null> => {
  return instance
    .get(url, {
      params: {
        ...params
      }
    })
    .then(handleSuccess)
    .catch(err => console.log(err))
}

const post = <T>(url: string, data?: Record<string, any>, config?: any): Promise<T | null> => {
  const requestConfig = {
    ...commonParams
  }
  return instance
    .post<AxiosResponse, AxiosResponse>(url, data || {}, requestConfig)
    .then(handleSuccess)
    .catch(err => console.log(err))
}

export default {
  get,
  post
}

import { getToken } from '@/auth-provider'
import { getUrlParams } from '@/utils/url'
import { message } from 'antd'

import Axios, { AxiosRequestConfig } from 'axios'

/** 公共参数 */
const commonParams = () => {
  return {}
}

type AxiosRequestCustomConfig = AxiosRequestConfig & {
  /** 是否取消上一次相同url请求 */
  cancelPrevious?: boolean
  /**
   * 是否取消上一次相同url 且指定请求参数相同的 请求
   * 对比的参数请通过params 或 data传入 url上的参数不支持
   * */
  cancelUrlParams?: string[]
  /** 忽略错误提示 */
  ignoreError?: boolean
}

const apiUrl = import.meta.env.VITE_BASE_URL
export const instance = Axios.create({
  baseURL: apiUrl,
  timeout: 6 * 1000
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

const handleIgnoreMessageException = (exception: {
  status: number
  data: AxiosResponse
  message?: string
  response: {
    status: number
    data: AxiosResponse
  }
  isAxiosError?: boolean
}) => {
  if (Axios.isCancel(exception)) {
    return Promise.reject()
  }
  return Promise.resolve(null)
}

const handleException = (exception: {
  status: number
  data: AxiosResponse
  message?: string
  response: {
    status: number
    data: AxiosResponse
  }
  isAxiosError?: boolean
}) => {
  if (Axios.isCancel(exception)) {
    return Promise.reject()
  }
  let { status: httpStatus, data } = exception || {}
  if (exception.isAxiosError) {
    console.error(exception)
    httpStatus = exception?.response?.status
    data = exception?.response?.data
    if (exception?.message?.includes('timeout')) {
      message.warning('请求超时，请重试！')
      return Promise.resolve(null)
    } else {
      message.warning('系统出错，请稍后再试！')
      return Promise.resolve(null)
    }
  }

  if (httpStatus === 403 && data?.status === 40003) {
    message.warning('账号没有访问资源的权限...')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  } else if (httpStatus === 403 && data?.status === 40007) {
    message.warning(data?.message || '账号没有访问资源的权限...')
  } else if (httpStatus === 504) {
    message.warning('请求超时，请重试！')
  } else if (httpStatus === 400) {
    message.warning(data?.message || '请求参数错误！')
  } else if (httpStatus === 204) {
    message.warning('无数据')
  } else {
    message.warning(typeof data === 'string' ? data : data?.message || 'none')
  }
  return Promise.resolve(null)
}
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
    .catch(config?.ignoreError ? handleIgnoreMessageException : handleException)
}

const post = <T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestCustomConfig
): Promise<T | null> => {
  const requestConfig = {
    ...commonParams
  }
  return instance
    .post<AxiosResponse, AxiosResponse>(url, data || {}, requestConfig)
    .then(handleSuccess)
    .catch(config?.ignoreError ? handleIgnoreMessageException : handleException)
}

export default {
  get,
  post
}

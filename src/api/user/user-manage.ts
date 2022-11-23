import { AuthFormType, Users } from '@/types'
import request from '../request'

export const accountLogin = (data: AuthFormType) => {
  return request.post<{ user: Users }>('/user/login', data)
}
export const accountRegister = (data: AuthFormType) => {
  return request.post<any>('/user/register', data)
}

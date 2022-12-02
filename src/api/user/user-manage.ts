import { AuthFormType, Users } from '@/types'
import request from '../request'

/**用户登录 */
export const accountLogin = (data: AuthFormType) => {
  return request.post<{ user: Users }>('/user/login', data)
}
/**用户注册 */
export const accountRegister = (data: AuthFormType) => {
  return request.post<any>('/user/register', data)
}

/**获取用户信息*/
export const accountUserInfo = (data: any) => {
  return request.get<any>('/userinfo', data)
}

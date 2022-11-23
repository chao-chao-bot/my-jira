import { http } from '@/utils/http'
import { userAuth } from './useAuth'

export const useHttp = () => {
  const { user } = userAuth()
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token })
}

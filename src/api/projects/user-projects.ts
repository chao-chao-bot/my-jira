import { Users } from '@/types'
import request from '../request'

export const fetchProjectList = async (data: any) => {
  const res = await request.get<any[]>('/projects', data)
  return res || []
}

export const fetchUserList = async (data: any) => {
  const res = await request.get<Users[]>('/users', data)
  console.log('res-=====', res)

  return res || []
}

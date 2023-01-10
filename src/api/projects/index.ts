import { Project, TParamProject, Users } from '@/types'
import request from '../request'

/**获取项目列表 */
export const fetchProjectList = async (data: TParamProject) => {
  const res = await request.get<Project[]>('/projects', data)
  const addKeyRes = res?.map(item => {
    return { ...item, key: item.id }
  })
  return addKeyRes || []
}

export const fetchUserList = async (data?: any) => {
  const res = await request.get<Users[]>('/users', data)
  return res || []
}

/**创建项目 */
export const fetchCreateProject = async (data: any) => {
  const res = await request.post<Project[]>('/project/create', data)
  return res || []
}
/**删除项目 */
export const fetchDeleteProject = async (data: any) => {
  const res = await request.post<string>('/project/delete', data)

  return res
}

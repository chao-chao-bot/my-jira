/*项目类型 */
export type Project = {
  id: number
  creator_id: number
  project_name: string
  project_prefix: string
  member?: string
}

export type TParamProject = Partial<Pick<Project, 'project_name' | 'creator_id'>>

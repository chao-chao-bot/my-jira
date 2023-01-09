/*项目类型 */
export type Project = {
  creator_id: string
  project_name: string
  project_prefix: string
  member?: string
}

export type TParamProject = Partial<Project>

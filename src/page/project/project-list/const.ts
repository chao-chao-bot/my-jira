import { MenuOption } from '@/types'
import { map } from 'lodash-es'

export enum ProjectOption {
  //项目设置
  ProjectSetting = 'project-setting',
  //删除
  ProjectDelete = 'project-delete'
}

export const ProjectOptionMap: Record<ProjectOption, MenuOption> = {
  [ProjectOption.ProjectSetting]: {
    key: ProjectOption.ProjectSetting,
    label: '项目设置'
  },
  [ProjectOption.ProjectDelete]: {
    key: ProjectOption.ProjectDelete,
    label: '删除'
  }
}

export const ProjectOptionList = map(ProjectOptionMap)

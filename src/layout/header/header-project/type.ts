import { MenuProps } from 'antd'

export enum ProjectDropItem {
  /**查看所有项目 */
  VIEWALLITEMS = 'view-all-items',
  /**创建项目 */
  CREATEPROJECT = 'create-project',
  /**最近项目 */
  RECENTPROJECT = 'recent-project'
}

/**项目下拉初始化 */

export const inintProjectList: MenuProps['items'] = [
  {
    key: ProjectDropItem.RECENTPROJECT,
    type: 'group',
    label: '最近项目',
    children: []
  },
  {
    type: 'divider'
  },
  {
    label: '查看所有项目',
    key: ProjectDropItem.VIEWALLITEMS
  },
  {
    label: '创建项目',
    key: ProjectDropItem.CREATEPROJECT
  }
]

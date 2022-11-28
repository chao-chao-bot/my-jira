import { TabsOption } from '@/types'
import { MenuProps } from 'antd'
import { map } from 'lodash-es'

/** Header Task */
export enum TaskTapItem {
  ASSIGNEDTOME = 'assigned-to-me',
  BOARD = 'board'
}

export const TaskTapItemMap: Record<TaskTapItem, TabsOption> = {
  [TaskTapItem.ASSIGNEDTOME]: {
    label: '分配给我的',
    key: TaskTapItem.ASSIGNEDTOME
  },
  [TaskTapItem.BOARD]: {
    label: '看板',
    key: TaskTapItem.BOARD
  }
}

export const initTaskTapItemList = [
  {
    label: '分配给我的',
    key: TaskTapItem.ASSIGNEDTOME,
    children: 'asd'
  },
  {
    label: '看板',
    key: TaskTapItem.BOARD,
    children: 'asd'
  }
]
/**任务 dropdown key */
export enum TaskDropItemKey {
  EMPTY = 'empty',
  WORKPAGE = 'work-page',
  BOARD = 'board'
}

export const TaskTabItemList = map(TaskTapItemMap)

export const initTaskList: MenuProps['items'] = [
  {
    key: TaskDropItemKey.EMPTY,
    label: '暂无任务',
    disabled: true
  },
  {
    type: 'divider'
  },
  {
    label: '工作页面',
    key: TaskDropItemKey.WORKPAGE
  }
]
export const initBoardList: MenuProps['items'] = [
  {
    key: TaskDropItemKey.EMPTY,
    label: '暂无看板',
    disabled: true
  },
  {
    type: 'divider'
  },
  {
    label: '看板页',
    key: TaskDropItemKey.BOARD
  }
]

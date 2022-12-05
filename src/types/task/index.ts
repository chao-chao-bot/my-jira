import { Users } from '..'
import { Project } from '../project'

/**任务类型 */
export enum TaskType {
  /**缺陷 */
  ERROR = 'error',
  /**改进 */
  IMPROVEMENT = 'improvement',
  /**新增功能 */
  NEW_FEATURES = 'new_features'
}

/**任务状态 */
export enum TakStatus {
  /**待办 */
  IN_REVIEW = 'in_review',
  /**正在进行 */
  IN_PROGRESS = 'in_progress',
  /**完成 */
  COMPLETE = 'complete'
}
/**任务优先级 */

export enum TaskPriority {
  HIGHEST = 'highest',
  HIGH = 'high',
  LOW = 'low',
  LOWEST = 'lowest'
}

/**任务 */
export type Task = {
  projectId: string
  /**任务类型 */
  taskType: TaskType
  /**任务状态 */
  taskStatus: TakStatus
  /**摘要 */
  abstract: string
  /**描述 */
  describe?: any
  /**报告人 */
  reporter?: Users
  /**附件 */
  enclosure?: any
  /**截止日期 */
  endData?: Date
  /**经办人 */
  operator: string
}

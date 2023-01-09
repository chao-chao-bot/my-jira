import CustomPopover from '@/components/header/custom-popover'
import { useEventBus } from '@/hooks'
import { ProjectOptionEnum } from '@/page/project/project-create-modal/const'
import { Button } from 'antd'
import * as React from 'react'

/**最近项目 */
export const HeaderProject: React.FC = () => {
  const handleProjectCreated = () => {
    console.log(' hi hi ')
  }
  return (
    <CustomPopover
      content={<div>123</div>}
      footer={
        <div>
          <div>
            <Button block type='link'>
              查看所有项目
            </Button>
          </div>
          <div>
            <Button onClick={handleProjectCreated} block type='link'>
              创建项目
            </Button>
          </div>
        </div>
      }
    >
      123
    </CustomPopover>
  )
}

export default HeaderProject

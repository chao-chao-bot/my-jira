import CustomPopover from '@/components/header/custom-popover'
import { Button } from 'antd'
import * as React from 'react'

/**最近项目 */
export const HeaderProject: React.FC = () => {
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
            <Button block type='link'>
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

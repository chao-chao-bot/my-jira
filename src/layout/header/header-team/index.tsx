import CustomPopover from '@/components/header/custom-popover'
import { Button } from 'antd'
import * as React from 'react'

export const HeaderTeam: React.FC = () => {
  return (
    <CustomPopover
      content={<div>123</div>}
      footer={
        <div>
          <Button block type='link'>
            Link Button
          </Button>
        </div>
      }
    >
      123
    </CustomPopover>
  )
}

export default HeaderTeam

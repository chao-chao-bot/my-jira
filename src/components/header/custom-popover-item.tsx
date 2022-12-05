import { TakStatus } from '@/types'
import * as React from 'react'
import styled from 'styled-components'
import { LoginOutlined } from '@ant-design/icons'

interface CustomPopoverItemProps {
  title: TakStatus
  taskName: string
  keyWord: string
  projectName: string
}
export const CustomPopoverItem: React.FC<CustomPopoverItemProps> = props => {
  const { title, taskName, keyWord, projectName } = props

  return (
    <CustomPopoverItemWrapper>
      <div className='title'>{title}</div>
      <div className='article'>
        <LoginOutlined />
        <div className='overview'>
          <div>{taskName}</div>
          <div title={`${keyWord}·${projectName}`}>{`${keyWord}·${projectName}`}</div>
        </div>
      </div>
    </CustomPopoverItemWrapper>
  )
}

const CustomPopoverItemWrapper = styled.div`
  width: 100%;
  .article {
    display: flex;
    align-items: center;
    .overview {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      div:last-child {
        width: calc(100% - 24px);
        margin-top: 3px;
        color: #5e6c84;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`

export default CustomPopoverItem

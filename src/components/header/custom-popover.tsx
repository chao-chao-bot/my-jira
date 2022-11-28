import { Button, Divider } from 'antd'
import * as React from 'react'
import styled from 'styled-components'
interface CustomDropDownProps {
  title?: string
  content: React.ReactNode
  footer?: React.ReactNode
  [key: string]: any
}
export const CustomPopover: React.FC<CustomDropDownProps> = props => {
  const { title, content, footer } = props
  return (
    <CustomDropDownWrapper>
      <div className='content'>
        {title || ''}
        <div>{content}</div>
      </div>
      {footer && (
        <div className='footer'>
          <Divider />
          {footer}
        </div>
      )}
    </CustomDropDownWrapper>
  )
}

const CustomDropDownWrapper = styled.div`
  width: 24rem;
  background-color: #fff;
  max-height: 26rem;
  border-radius: 0.3rem;
  box-shadow: var(
    --ds-shadow-overlay,
    0 4px 8px -2px rgba(9, 30, 66, 0.25),
    0 0 1px rgba(9, 30, 66, 0.31)
  );
  .content {
    padding: 1rem;
  }
  .footer {
    .ant-divider-horizontal {
      margin: 12px 0;
      margin-bottom: 0;
      div:hover {
        background-color: #f4f5f7;
      }
    }
  }
`
export default CustomPopover

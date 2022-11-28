4
import { Tabs } from 'antd'
import * as React from 'react'
import styled from 'styled-components'
import { TaskTapItem } from './type'

interface HeaderTaskProps {
  menu: React.ReactNode
  onChange: (key: string) => void
}
export const HeaderTask: React.FC<HeaderTaskProps> = props => {
  const { menu, onChange } = props
  return (
    <HeaderTaskWrapper>
      <Tabs onChange={onChange} defaultActiveKey={TaskTapItem.ASSIGNEDTOME}>
        <Tabs.TabPane tab='与我相关' key={TaskTapItem.ASSIGNEDTOME}>
          {menu}
        </Tabs.TabPane>
        <Tabs.TabPane tab='看板' key={TaskTapItem.BOARD}>
          {menu}
        </Tabs.TabPane>
      </Tabs>
    </HeaderTaskWrapper>
  )
}

const HeaderTaskWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  .ant-dropdown-menu {
    box-shadow: none;
  }
  .ant-tabs-nav {
    padding: 0 12px;
  }
`

export default HeaderTask

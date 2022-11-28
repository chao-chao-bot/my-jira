import * as React from 'react'

import { userAuth } from '@/hooks/useAuth'
import { Button, Dropdown, Tabs } from 'antd'
import logo from '@/assets/software-logo.svg'
import styled from 'styled-components'
import './index.css'
import { UserInfoItemSettingList } from './types'
import { initBoardList, initTaskList, TaskTapItem } from './header-task/type'
import HeaderTask from './header-task'
import { inintProjectList } from './header-project/type'
import { initTeamDropList } from './header-team/type'
import { Row } from '../../components/lib'

const HeaderWrapper = styled(Row)`
  position: relative;
  height: 6rem;
  position: relative;
  padding: 3.2rem;
  &:after {
    height: 4px;
    position: absolute;
    top: 100%;
    right: 0px;
    left: 0px;
    background: linear-gradient(
      rgba(9, 30, 66, 0.13) 0px,
      rgba(9, 30, 66, 0.13) 1px,
      rgba(9, 30, 66, 0.08) 1px,
      rgba(9, 30, 66, 0) 4px
    );
    content: '';
  }
`
const HeaderLeft = styled(Row)`
  & > *:hover {
    background-color: #e1edff;
    cursor: pointer;
  }
  .logo-sf {
    height: 2.5rem;
  }
`
const HeaderRight = styled(Row)``
interface PageHeaderProps {
  children?: any
}
export const PageHeader: React.FC<PageHeaderProps> = () => {
  const { loginout } = userAuth()

  const [taskItems, setList] = React.useState(initTaskList)

  const handleTaskTabChange = React.useCallback((key: string) => {
    if (key === TaskTapItem.ASSIGNEDTOME) {
      setList(initTaskList)
      //请求数据 判断数据是否为空 当数据为空时 直接放initTaskList
      //当数据不为空时 删除 init数据中的第一项 然后unshift 后端数据
    } else {
      setList(initBoardList)
    }
  }, [])

  return (
    <HeaderWrapper between={true}>
      <HeaderLeft gap={true}>
        <img src={logo} alt='logo' className='logo-sf' />
        <Dropdown
          trigger={['click']}
          menu={{ items: taskItems }}
          dropdownRender={menu => <HeaderTask menu={menu} onChange={handleTaskTabChange} />}
        >
          <a>您的任务</a>
        </Dropdown>

        <Dropdown trigger={['click']} menu={{ items: inintProjectList }}>
          <a>项目</a>
        </Dropdown>

        <Dropdown trigger={['click']} menu={{ items: initTeamDropList }}>
          <a>团队</a>
        </Dropdown>
        <Button type='primary'>创建</Button>
      </HeaderLeft>

      <HeaderRight gap={true}>
        <input type='text' />
        <Dropdown trigger={['click']} menu={{ items: UserInfoItemSettingList }}>
          <a>通知</a>
        </Dropdown>
        <Dropdown trigger={['click']} menu={{ items: UserInfoItemSettingList }}>
          <a>个人资料</a>
        </Dropdown>

        <Button onClick={loginout}>登出</Button>
      </HeaderRight>
    </HeaderWrapper>
  )
}

export default PageHeader

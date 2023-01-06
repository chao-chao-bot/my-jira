import * as React from 'react'

import { userAuth } from '@/hooks/useAuth'
import { Button, Dropdown, Menu, MenuProps, Tabs } from 'antd'
import logo from '@/assets/software-logo.svg'
import styled from 'styled-components'
import { UserInfoItemSettingList } from './types'
import { initBoardList, initTaskList, TaskDropItemKey, TaskTapItem } from './header-task/type'
import HeaderTask from './header-task'
import { inintProjectList, ProjectDropItem } from './header-project/type'
import { initTeamDropList } from './header-team/type'
import { Row } from '../../components/lib'

import { EEventCraeteTask } from './const'
import { useEventBus } from '@/hooks'
import { ProjectCreated } from '@/page/project/project-create-modal/const'
import { useNavigate } from 'react-router'
import { resetRoute } from '@/utils'

const HeaderWrapper = styled(Row)`
  position: relative;
  height: 6.4rem;
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
  .ant-dropdown-menu-item-group-title {
    color: red !important;
    font-size: 11px;
    font-weight: 700;
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
  const navigate = useNavigate()
  const { loginout } = userAuth()
  const { trigger: openCreateProjectModal } = useEventBus(ProjectCreated.OPEN_CRATE_PROJECT_MODAL)
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

  const { trigger: openCreateTaskModal } = useEventBus(EEventCraeteTask.CreateTask)

  const craeteTask = () => {
    openCreateTaskModal()
  }

  const handleProjectDropDownListClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case ProjectDropItem.VIEWALLITEMS:
        navigate('/projects')
        break
      case ProjectDropItem.CREATEPROJECT:
        openCreateProjectModal()
        break
      default:
        alert('跳转到project页面')
    }
  }

  const handleTaskDropDownListClick: MenuProps['onClick'] = ({ key }) => {
    console.log('key', key)
    switch (key) {
      case TaskDropItemKey.WORKPAGE:
        navigate('/you-work')
        break
      case TaskDropItemKey.BOARD:
        alert('看板页面')
        break
    }
  }

  return (
    <HeaderWrapper between={true}>
      <HeaderLeft gap={true}>
        <Button type='link' onClick={resetRoute}>
          <img src={logo} alt='logo' className='logo-sf' />
        </Button>

        <Dropdown
          trigger={['click']}
          menu={{ items: taskItems, onClick: handleTaskDropDownListClick }}
          dropdownRender={menu => <HeaderTask menu={menu} onChange={handleTaskTabChange} />}
        >
          <a>您的任务</a>
        </Dropdown>

        <Dropdown
          trigger={['click']}
          menu={{ items: inintProjectList, onClick: handleProjectDropDownListClick }}
        >
          <a>项目</a>
        </Dropdown>

        <Dropdown trigger={['click']} menu={{ items: initTeamDropList }}>
          <a>团队</a>
        </Dropdown>
        <Button type='primary' onClick={craeteTask}>
          创建
        </Button>
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

import styled from '@emotion/styled'

import * as React from 'react'
import { useDocumentTitle } from './hooks'
import PageHeader from './layout/header'
import { RouteSet } from '@/router'
import { TaskCreateModal } from './page/task/task-crated-modal'
import { ProjectCreateModal } from './page/project/project-create-modal'
import { ProjectDeleteModal } from './page/project/project-delete-modal'

export const AuthenticatedApp: React.FC = () => {
  useDocumentTitle('项目列表', false)
  return (
    <div>
      <PageHeader />
      <Main>
        <RouteSet />
        <TaskCreateModal />
        <ProjectCreateModal />
      </Main>
    </div>
  )
}

const Main = styled.main`
  height: calc(100vh - 6.4rem);
  background: #fff;
  display: flex;
  overflow: hidden;
  padding: 1rem 3.2rem;
`

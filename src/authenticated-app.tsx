import styled from '@emotion/styled'

import * as React from 'react'
import { useDocumentTitle } from './hooks'
import PageHeader from './layout/header'
import ProjectListScreen from './page/project-list'

export const AuthenticatedApp: React.FC = () => {
  useDocumentTitle('项目列表', false)
  return (
    <div>
      <PageHeader />
      <Main>
        <ProjectListScreen />
      </Main>
    </div>
  )
}

const Main = styled.main`
  height: calc(100vh - 6rem);
  background: pink;
  display: flex;
  overflow: hidden;
`

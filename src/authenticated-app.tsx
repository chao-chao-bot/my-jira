import { userAuth } from './hooks/useAuth'
import { Button } from 'antd'
import styled from '@emotion/styled'
import ProjectListScreen from './screens/project-list'
import * as React from 'react'

export const AuthenticatedApp: React.FC = () => {
  const { loginout } = userAuth()
  return (
    <div>
      <div>
        <Button onClick={loginout}>登出</Button>
      </div>
      <PageHeader></PageHeader>
      <Main>
        <ProjectListScreen />
      </Main>
    </div>
  )
}

const PageHeader = styled.header`
  height: 6rem;
`
const Main = styled.main`
  height: calc(100vh - 6rem);
  background: pink;
`

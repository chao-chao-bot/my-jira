import styled from '@emotion/styled'

import * as React from 'react'
import PageHeader from './layout/header'

export const AuthenticatedApp: React.FC = () => {
  return (
    <div>
      <PageHeader />

      <Main>{/* <ProjectListScreen /> */}</Main>
    </div>
  )
}

const Main = styled.main`
  height: calc(100vh - 6rem);
  background: pink;
  display: flex;
  overflow: hidden;
`

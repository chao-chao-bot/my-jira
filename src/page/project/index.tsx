import * as React from 'react'
import List from './project-list/list'
import { SearchPanel } from './project-list/search-panel'
import { useDebounce, useDocumentTitle } from '@/hooks'
import styled from '@emotion/styled'
import { useProject } from '@/utils/project'
import { useUser } from '@/utils/users'
import { useProjeSearchParams } from './project-list/util'

export const ProjectListScreen: React.FC = () => {
  useDocumentTitle('项目列表', false)

  const [param, setParam] = useProjeSearchParams()
  const { data: users } = useUser()
  const { data: list, isLoading } = useProject(useDebounce(param, 200))

  return (
    <Container>
      <h1>项目列表页面</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  )
}
export default ProjectListScreen

ProjectListScreen.whyDidYouRender = false
const Container = styled.div`
  flex: 1;
`

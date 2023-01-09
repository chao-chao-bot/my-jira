import * as React from 'react'
import List from './list'
import { SearchPanel } from './search-panel'
import { useDebounce } from '@/hooks'
import styled from '@emotion/styled'
import { useProject } from '@/utils/project'
import { useUser } from '@/utils/users'
import { useUrlQueryParam } from '@/hooks/useUrlQueryParam'

export const ProjectListScreen: React.FC = () => {
  const [param, setParam] = useUrlQueryParam(['project_name'])
  const deParams = useDebounce(param, 200)
  const { data: users } = useUser()
  const { data: list, isLoading } = useProject(deParams)

  return (
    <Container>
      <h1>项目列表页面</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  )
}
export default ProjectListScreen

ProjectListScreen.whyDidYouRender = true
const Container = styled.div`
  flex: 1;
`

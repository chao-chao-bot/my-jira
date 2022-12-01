import * as React from 'react'
import List from './list'
import { SearchPanel } from './search-panel'
import { useDebounce } from '@/hooks'
import styled from '@emotion/styled'
import { useProject } from '@/utils/project'
import { useUser } from '@/utils/users'

export const ProjectListScreen: React.FC = () => {
  const [param, setParam] = React.useState({
    name: '',
    personId: ''
  })
  const deParams = useDebounce(param, 1200)
  const { data: users } = useUser()
  const { data: list, isLoading } = useProject(deParams)

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []}></SearchPanel>
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  )
}
export default ProjectListScreen

const Container = styled.div`
  padding: 0 3.2rem;
`

import * as React from 'react'
import List from './list'
import { SearchPanel } from './search-panel'
import { cleanObject } from '@/utils'
import { useDebounce, useMount } from '@/hooks'
import { fetchProjectList, fetchUserList } from '@/api/projects/user-projects'
import { Users } from '@/types'
import styled from '@emotion/styled'

export const ProjectListScreen: React.FC = () => {
  const [param, setParam] = React.useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = React.useState<Users[]>([])
  const [list, setList] = React.useState<any>([])
  const deParams = useDebounce(param, 1200)

  React.useEffect(() => {
    fetchProjectList(cleanObject(deParams)).then(value => {
      setList(value || [])
    })
  }, [deParams])

  useMount(() => {
    fetchUserList('users').then(value => {
      setUsers(value)
    })
  })
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
      <List list={list} users={users}></List>
    </Container>
  )
}
export default ProjectListScreen

const Container = styled.div`
  padding: 0 3.2rem;
`

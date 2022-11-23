import * as React from 'react'
import List from './list'
import { SearchPanel } from './search-panel'
import { cleanObject } from '@/utils'
import { useDebounce, useMount } from '@/hooks'
import { fetchProjectList, fetchUserList } from '@/api/projects/user-projects'
import { Users } from '@/types'

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
    <div>
      <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  )
}
export default ProjectListScreen

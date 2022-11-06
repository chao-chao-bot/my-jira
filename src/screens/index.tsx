import * as React from 'react'
import List from './list'
import qs from 'qs'
import { SearchPanel } from './search-panel'
import { cleanObject } from '../utils'
import { useDebounce, useMount } from '../hooks'

const apiUrl = import.meta.env.VITE_BASE_URL
export const ProjectListScreen = () => {
  const [param, setParam] = React.useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = React.useState([])
  const [list, setList] = React.useState([])
  const deParams = useDebounce(param, 1200)
  React.useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(deParams))}`).then(async value => {
      if (value.ok) {
        setList(await value.json())
      }
    })
  }, [deParams])

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async value => {
      if (value.ok) {
        setUsers(await value.json())
      }
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

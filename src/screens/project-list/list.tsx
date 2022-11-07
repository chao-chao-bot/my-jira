import { Project, Users } from 'types'

interface ListProps {
  list: Project[]
  users: Users[]
}
export const List = (props: ListProps) => {
  const { list, users } = props
  return (
    <table>
      <thead>
        <tr>
          <td>名称</td>
          <td>负责人</td>
        </tr>
      </thead>
      <tbody>
        {list.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{users.find(user => user.id === item.personId)?.name || '未知'}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default List

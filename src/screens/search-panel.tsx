import { Users } from 'types'

interface SearchPanelProps {
  users: Users[]
  param: {
    name: string
    personId: string
  }
  setParam: (param: SearchPanelProps['param']) => void
}
export const SearchPanel = (props: SearchPanelProps) => {
  const { param, setParam, users } = props
  return (
    <div>
      <input
        type='text'
        value={param.name}
        onChange={event => setParam({ ...param, name: event.target.value })}
      ></input>

      <select
        value={param.personId}
        onChange={e => {
          setParam({
            ...param,
            personId: e.target.value
          })
        }}
      >
        <option>负责人</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  )
}
export default SearchPanel

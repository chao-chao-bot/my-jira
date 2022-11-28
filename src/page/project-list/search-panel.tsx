import { Users } from '@/types'
import { Form, Input, Select } from 'antd'

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
    <Form layout='inline' style={{ marginBottom: '2rem' }}>
      <Form.Item>
        <Input
          placeholder='项目名'
          type='text'
          value={param.name}
          onChange={event => setParam({ ...param, name: event.target.value })}
        ></Input>
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={value => {
            setParam({
              ...param,
              personId: value
            })
          }}
        >
          <option>负责人</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  )
}
export default SearchPanel

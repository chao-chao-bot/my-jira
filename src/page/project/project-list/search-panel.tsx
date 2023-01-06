import { Project, TParamProject, Users } from '@/types'
import { Form, Input, Select } from 'antd'

interface SearchPanelProps {
  users: Users[]
  param: TParamProject
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
          value={param.project_name}
          onChange={event => setParam({ ...param, project_name: event.target.value })}
        ></Input>
      </Form.Item>
      <Form.Item>
        <Select
          value={param.creator_id}
          onChange={value => {
            setParam({
              ...param,
              creator_id: value
            })
          }}
        >
          <option>负责人</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  )
}
export default SearchPanel

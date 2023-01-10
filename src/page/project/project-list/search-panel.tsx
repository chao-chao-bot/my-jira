import { UserSelect } from '@/components/user-select'
import { TParamProject, Users } from '@/types'
import { Form, Input } from 'antd'

interface SearchPanelProps {
  users: Users[]
  param: TParamProject
  setParam: (param: SearchPanelProps['param']) => void
}
export const SearchPanel = (props: SearchPanelProps) => {
  const { param, setParam } = props
  const handleChange = (value: number | undefined) => {
    console.log(value)
    setParam({ ...param, creator_id: value })
  }
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
        <UserSelect defaultOptionName='负责人' value={param.creator_id} onChange={handleChange} />
      </Form.Item>
    </Form>
  )
}
export default SearchPanel

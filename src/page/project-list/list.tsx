import { Project, Users } from '@/types'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'

interface ListProps {
  list: Project[]
  users: Users[]
}
interface DataType {
  [key: string]: unknown
}
export const List = (props: ListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { list, users } = props
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }
  ]

  return <Table columns={columns} dataSource={data}></Table>
}
export default List

import { Project, Users } from '@/types'
import { Table } from 'antd'
import { ColumnsType, TableProps } from 'antd/lib/table'

interface ListProps extends TableProps<Project> {
  users: Users[]
}
interface DataType {
  [key: string]: unknown
}
export const List = (props: ListProps) => {
  const { users, ...resetProps } = props

  const columns: ColumnsType<Project> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>
    },
    {
      title: 'personId',
      dataIndex: 'personId',
      key: 'personId'
    },
    {
      title: 'Organization',
      dataIndex: 'organization',
      key: 'organization'
    }
  ]

  return <Table {...resetProps} columns={columns} />
}
export default List

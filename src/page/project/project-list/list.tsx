import { Project, Users } from '@/types'
import { Table } from 'antd'
import { ColumnsType, TableProps } from 'antd/lib/table'
import { Link } from 'react-router-dom'
// react-router-dom 和 react-router 的关系：后者管理路由状态，进行计算路由树，交给前者进行消费
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
      render(value, project) {
        return <Link to={project.id + ''}>{project.project_name}</Link>
      }
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

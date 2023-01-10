import { Project, Users } from '@/types'
import { useProject } from '@/utils/project'
import { ExclamationCircleOutlined, MoreOutlined } from '@ant-design/icons'
import { Dropdown, Modal, Table } from 'antd'
import { ColumnsType, TableProps } from 'antd/lib/table'
import { Link } from 'react-router-dom'
import { ProjectOption, ProjectOptionList } from './const'
// react-router-dom 和 react-router 的关系：后者管理路由状态，进行计算路由树，交给前者进行消费
interface ListProps extends TableProps<Project> {
  users: Users[]
}

type TDeleteProjectParam = Pick<Project, 'project_name' | 'id'>

export const List = (props: ListProps) => {
  const { users, ...resetProps } = props
  const handleProjectDelete = (id: number) => () => {
    //发送删除的请求
    console.log('删除', id)
    useProject()
  }
  const confirm = (param: TDeleteProjectParam) => {
    const { project_name, id } = param
    Modal.confirm({
      title: <b>删除</b>,
      icon: <ExclamationCircleOutlined />,
      content: (
        <div>
          确定要删除 <b>{project_name}</b> 项目吗？删除后不可恢复。
        </div>
      ),
      okText: '确认',
      cancelText: '取消',
      onOk: handleProjectDelete(id)
    })
  }
  const onClick =
    (param: TDeleteProjectParam) =>
    ({ key }: { key: string }) => {
      switch (key) {
        case ProjectOption.ProjectDelete:
          confirm(param)
          break
        case ProjectOption.ProjectSetting:
          break
        default:
      }
    }

  const columns: ColumnsType<Project> = [
    {
      title: '名称',
      dataIndex: 'project_name',
      key: 'project_name',
      render(value, project) {
        return <Link to={project.project_prefix + ''}>{value}</Link>
      }
    },
    {
      title: '关键字',
      dataIndex: 'project_prefix',
      key: 'project_prefix'
    },
    {
      title: '负责人',
      dataIndex: 'username',
      key: 'organization'
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (_, project) => {
        const { project_name, id } = project
        return (
          <Dropdown menu={{ items: ProjectOptionList, onClick: onClick({ project_name, id }) }}>
            <MoreOutlined />
          </Dropdown>
        )
      }
    }
  ]

  return <Table {...resetProps} columns={columns} />
}
export default List

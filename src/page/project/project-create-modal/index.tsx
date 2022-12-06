import * as React from 'react'
import { Modal, Form, Input, Select } from 'antd'

import { Project } from '@/types'
import { useEventBus } from '@/hooks'
import { ProjectCreated } from './const'

export const ProjectCreateModal: React.FC = () => {
  const [form] = Form.useForm<Project>()
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleOk = () => {
    console.log(form.getFieldsValue())
    //发送数据请求
    setIsModalOpen(false)
  }

  useEventBus(ProjectCreated.OPEN_CRATE_PROJECT_MODAL, showModal)
  return (
    <Modal
      title='创建项目'
      okText='创建'
      cancelText='取消'
      getContainer={false}
      width={'50rem'}
      open={isModalOpen}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <Form layout='vertical' form={form}>
        <Form.Item name='creator_id' label='项目名称' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='proejct_prefix' label='索引' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='member' label='邀请成员'>
          <Select
            showSearch
            showArrow={false}
            mode='multiple'
            allowClear
            style={{ width: '100%' }}
          ></Select>
        </Form.Item>
        {/* hidden  */}
        <Form.Item hidden name='creator_id' label='项目名称'>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

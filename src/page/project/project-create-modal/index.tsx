import * as React from 'react'
import { Modal, Form, Input, Select } from 'antd'

import { Project } from '@/types'

import { ProjectCreated } from './const'
import { useDialog } from '@/hooks/useDialog'

export const ProjectCreateModal: React.FC = () => {
  const [form] = Form.useForm<Project>()

  const handleOk = () => {
    console.log(form.getFieldsValue())
    //发送数据请求
    dialogClose()
  }

  const handleOpen = () => {
    form.resetFields()
  }

  const { dialogProps, dialogClose } = useDialog(ProjectCreated.OPEN_CRATE_PROJECT_MODAL, {
    onOpen: handleOpen
  })
  return (
    <Modal title='创建项目' onOk={handleOk} {...dialogProps}>
      <Form layout='vertical' form={form}>
        <Form.Item
          name='creator_id'
          label='项目名称'
          rules={[{ required: true, message: '项目名称是必填项' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='proejct_prefix'
          label='索引'
          rules={[{ required: true, message: '索引是必填项' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='member' label='邀请成员'>
          <Select
            showSearch
            showArrow={false}
            mode='multiple'
            allowClear
            style={{ width: '100%' }}
            options={[
              {
                value: 'jack',
                label: 'Jack'
              },
              {
                value: 'lucy',
                label: 'Lucy'
              },
              {
                value: 'disabled',
                disabled: true,
                label: 'Disabled'
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe'
              }
            ]}
          ></Select>
        </Form.Item>
        {/* hidden  */}
        <Form.Item hidden name='creator_id'>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

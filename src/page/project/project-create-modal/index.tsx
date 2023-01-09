import * as React from 'react'
import { Modal, Form, Input, Select } from 'antd'

import { Project } from '@/types'

import { ProjectOptionEnum } from './const'
import { useDialog } from '@/hooks/useDialog'
import { userAuth } from '@/hooks/useAuth'
import { fetchCreateProject } from '@/api/projects'

export const ProjectCreateModal: React.FC = () => {
  const { user } = userAuth()
  const [form] = Form.useForm<Project>()

  const handleOk = async () => {
    let formData
    try {
      formData = await form.validateFields()
    } catch (error) {
      return Promise.resolve(error)
    }
    if (formData) {
      console.log(formData)
      const res = await fetchCreateProject(formData)
      console.log(res)
      dialogClose()
    }
  }

  const handleOpen = () => {
    //TODO:完善项目创建form
    form.resetFields()
    form.setFieldValue('creator_id', user?.id)
    form.setFieldValue('member', [68065])
  }

  const { dialogProps, dialogClose } = useDialog(ProjectOptionEnum.OPEN_CRATE_PROJECT_MODAL, {
    onOpen: handleOpen
  })
  return (
    <Modal title='创建项目' onOk={handleOk} {...dialogProps}>
      <Form layout='vertical' form={form}>
        <Form.Item
          name='project_name'
          label='项目名称'
          rules={[{ required: true, message: '项目名称是必填项' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='project_prefix'
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
        <Form.Item label='描述' name='introduction'>
          <Input.TextArea style={{ resize: 'none' }} showCount rows={4} maxLength={150} />
        </Form.Item>
        <Form.Item hidden name='creator_id'>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

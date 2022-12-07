import * as React from 'react'
import { Divider, Modal, Input, DatePicker } from 'antd'
import { EEventCraeteTask } from '@/layout/header/const'

import { Form, Select } from 'antd'
import { Task } from '@/types'
import styled from 'styled-components'
import { useDialog } from '@/hooks/useDialog'

interface TaskCreateModalProps {
  [key: string]: any
}

const ModalWrapper = styled.div`
  .ant-modal-body {
    max-height: calc(100vh - 24rem);
    overflow-y: scroll;
  }
`

export const TaskCreateModal: React.FC<TaskCreateModalProps> = React.memo(props => {
  const [form] = Form.useForm<Task>()
  const handleOk = () => {
    dialogClose()
    /**提交表单 */
  }

  const handleOpen = () => {
    form.resetFields()
    console.log('openope')
  }

  const { dialogClose, dialogProps } = useDialog(EEventCraeteTask.CreateTask, {
    onOpen: handleOpen
  })
  return (
    <ModalWrapper>
      <Modal {...dialogProps} getContainer={false} title='创建任务' onOk={handleOk}>
        <Form layout='vertical' form={form}>
          <Form.Item
            style={{ width: '50%' }}
            label='项目'
            name='projectId'
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value='demo'>Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            style={{ width: '50%' }}
            label='任务类型'
            name='taskType'
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value='demo'>Demo</Select.Option>
            </Select>
          </Form.Item>
          <Divider />
          <Form.Item style={{ width: '20%' }} label='状态' name='taskStatus'>
            <Select>
              <Select.Option value='demo'>状态</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label='摘要' name='abstract' rules={[{ required: true }]}>
            <Input></Input>
          </Form.Item>

          <Form.Item label='描述' name='describe'>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label='截止日期' name='endData'>
            <DatePicker placeholder='请选择日期' />
          </Form.Item>
          <Form.Item label='经办人' name='operator' rules={[{ required: true }]}>
            <Select>
              <Select.Option value='demo'>Demo</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </ModalWrapper>
  )
})

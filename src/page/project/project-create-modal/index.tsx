import * as React from 'react'
import { Button, Divider, Modal, Input, DatePicker } from 'antd'
import { EEventCraeteTask } from '@/layout/header/const'
import { useEventBus } from '@/hooks'
import { Form, Select } from 'antd'
import { Project, Task } from '@/types'
import styled from 'styled-components'

interface ProjectCreateModalProps {
  [key: string]: any
}

const ModalWrapper = styled.div`
  .ant-modal-title {
    font-size: 24px;
    font-weight: 400;
  }
  .ant-modal-body {
    max-height: calc(100vh - 24rem);
    overflow-y: scroll;
  }
`

export const ProjectCreateModal: React.FC<ProjectCreateModalProps> = React.memo(props => {
  const [form] = Form.useForm<Task>()
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  const showModal = () => {
    //Todo:form表单进行赋值
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
    /**提交表单 */
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  useEventBus(EEventCraeteTask.CreateTask, showModal)

  return (
    <ModalWrapper>
      <Modal
        okText='创建'
        cancelText='取消'
        width={'80rem'}
        getContainer={false}
        title='创建任务'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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

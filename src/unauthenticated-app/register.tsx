import { userAuth } from '@/hooks/useAuth'
import { AuthFormType } from '@/types'
import { Form, Input } from 'antd'
import { LongButton } from '.'

// Ts 是鸭子类型(duck typing) 面向接口编程 而不是面向接口编程
export const RegisterScreen = () => {
  const { register } = userAuth()

  const hadleSubmit = (values: AuthFormType) => {
    register(values)
  }

  return (
    <Form onFinish={hadleSubmit}>
      <Form.Item name={'username'} rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder='用户名' type='text' id='username' />
      </Form.Item>
      <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
        <Input placeholder='密码' type='password' id='password' />
      </Form.Item>
      <Form.Item>
        <LongButton type='primary' htmlType='submit'>
          注册
        </LongButton>
      </Form.Item>
    </Form>
  )
}
export default RegisterScreen

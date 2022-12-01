import { userAuth } from '@/hooks/useAuth'
import { AuthFormType } from '@/types'
import { Form, Input } from 'antd'
import { LongButton } from '.'

interface RegisterScreenProps {
  onError: (error: Error) => void
}

// Ts 是鸭子类型(duck typing) 面向接口编程 而不是面向接口编程 onError
export const RegisterScreen = (props: RegisterScreenProps) => {
  const { register } = userAuth()
  const { onError } = props

  const hadleSubmit = (values: AuthFormType) => {
    const { cpassword, ...resetValues } = values
    if (cpassword !== resetValues.password) {
      onError(new Error('请确认两次密码相同'))
      return
    }

    register(resetValues)
  }

  return (
    <Form onFinish={hadleSubmit}>
      <Form.Item name={'username'} rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder='用户名' type='text' id='username' />
      </Form.Item>
      <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
        <Input placeholder='密码' type='password' id='password' />
      </Form.Item>
      <Form.Item name={'cpassword'} rules={[{ required: true, message: '请确认密码' }]}>
        <Input placeholder='确认密码' type='password' id='cpassword' />
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

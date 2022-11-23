import { userAuth } from '@/hooks/useAuth'
import { Button, Form, Input } from 'antd'
import { AuthFormType } from '@/types'
import { LongButton } from '.'

/* interface p1 {
  name: string
}
interface p2 extends p1 {
  age: number
}
const test = (p: p1) => {
  console.log(p)
}
// const a: p2 = { name: '123', age: 123 }
const a = { name: '123', age: 123 }
test(a) */

// Ts 是鸭子类型(duck typing) 面向接口编程 而不是面向接口编程
export const LoginScreen = () => {
  const { login } = userAuth()

  const hadleSubmit = async (values: AuthFormType) => {
    login(values)
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
          登录
        </LongButton>
      </Form.Item>
    </Form>
  )
}
export default LoginScreen

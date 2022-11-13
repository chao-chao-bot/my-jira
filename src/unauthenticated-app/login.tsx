import { userAuth } from '@/hooks/useAuth'
import * as React from 'react'

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
  const { login, user } = userAuth()
  console.log(user)
  const hadleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({ username, password })
  }

  return (
    <form onSubmit={hadleSubmit}>
      <div>
        <label htmlFor='username'>用户名</label>
        <input type='text' id='username' />
      </div>
      <div>
        <label htmlFor='password'>密码</label>
        <input type='password' id='password' />
      </div>
      <button type='submit'>登录</button>
    </form>
  )
}
export default LoginScreen

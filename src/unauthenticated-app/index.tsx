import { Button, Card, Divider } from 'antd'
import * as React from 'react'
import LoginScreen from './login'
import RegisterScreen from './register'
import styled from '@emotion/styled'
import logo from '@/assets/logo.svg'
import left from '@/assets/left.svg'
import right from '@/assets/right.svg'
export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = React.useState(false)
  return (
    <Containter>
      <Background />
      <Header />
      <ShadowCard>
        <Title>{isRegister ? '请注册' : '请登录'}</Title>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Divider />
        <a onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? '已有账号，请登录' : '没有账号？注册新账号'}
        </a>
      </ShadowCard>
    </Containter>
  )
}

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem);
  background-image: url(${left}), url(${right});
`

export const LongButton = styled(Button)`
  width: 100%;
`
const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0rem;
  background-size: 10rem;
  width: 100%;
`
const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`
const Containter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

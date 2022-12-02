import { Spin, Typography } from 'antd'
import styled from 'styled-components'
export const Row = styled.div<{ gap?: number | boolean; between?: boolean; marginBottom?: number }>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.between ? 'space-between' : undefined)};
  > * {
    margin-top: 0 !important;
    margin-left: 0 !important;
    margin-right: ${props =>
      typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined};
    margin-bottom: ${props => props.marginBottom + 'rem'};
  }
`

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FullPageLoading = () => (
  <FullPage>
    <Spin size={'large'}></Spin>
  </FullPage>
)

export const FullPageErrorFallback = () => {
  return (
    <FullPage>
      <Typography.Text type='warning'>{'啊哦，页面出错了，请稍后再试.....'}</Typography.Text>
    </FullPage>
  )
}

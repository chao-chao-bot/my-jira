import { Tabs } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const WorkPage: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <WorkPageWrapper>
      <h1>您的工作</h1>
      <section>
        <div className='header'>
          <h4>最近的项目</h4>
          <Link to='/projects'>查看所有的项目</Link>
        </div>
        <div className='project-list'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>
      <Tabs
        defaultActiveKey='1'
        onChange={onChange}
        items={[
          {
            label: `从事`,
            key: '1',
            children: <p>123</p>
          },
          {
            label: `已经指派给我`,
            key: '2',
            children: `Content of Tab Pane 2`
          },
          {
            label: `已标星`,
            key: '3',
            children: `Content of Tab Pane 3`
          }
        ]}
      />
    </WorkPageWrapper>
  )
}

const WorkPageWrapper = styled.div`
  width: 100vw;
  .header {
    display: flex;
    justify-content: space-between;
  }
  .project-list {
    display: flex;
    & > div {
      margin-right: 10px;
      width: 10rem;
      height: 10rem;
      background-color: pink;
    }
  }
  section {
    margin-bottom: 20px;
  }
`

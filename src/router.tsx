import { useRoutes, Navigate } from 'react-router'
import { Test } from './components/test'
import ProjectListScreen from './page/project/project-list'
import { BrowserRouter as Router } from 'react-router-dom'
import { People } from './page/people'
import { WorkPage } from './page'

export const RouteGet = () => {
  const routes = useRoutes([
    {
      path: '/projects',
      element: <ProjectListScreen />
    },
    {
      path: '/projects/:key/*',
      element: <Test />
    },
    {
      path: '/people',
      element: <People />
    },
    {
      path: '/your-work',
      element: <WorkPage />
    },
    {
      path: '/*',
      element: <Navigate to='/your-work' />
    }
  ])

  return routes
}
export const RouteSet = () => {
  return <RouteGet />
}

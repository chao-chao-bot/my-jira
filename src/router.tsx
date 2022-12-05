import { useRoutes, Navigate } from 'react-router'
import { Test } from './components/test'
import ProjectListScreen from './page/project/project-list'
import { BrowserRouter as Router } from 'react-router-dom'

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
      path: '/',
      element: <Navigate to='/projects' />
    }
  ])

  return routes
}
export const RouteSet = () => {
  return (
    <Router>
      <RouteGet />
    </Router>
  )
}

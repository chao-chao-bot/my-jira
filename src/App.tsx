import './App.less'
import { AuthenticatedApp } from './authenticated-app'

import { userAuth } from './hooks/useAuth'
import { UnauthenticatedApp } from './unauthenticated-app'
function App() {
  const { user } = userAuth()

  return <div className='App'>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>
}

export default App

import { userAuth } from './hooks/useAuth'
export const AuthenticatedApp = () => {
  const { loginout } = userAuth()
  return (
    <div>
      <button onClick={loginout}>登出</button>
      {/* <ProjectListScreen /> */}
    </div>
  )
}

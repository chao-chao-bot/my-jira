import { ReactNode } from 'react'
import { AuthProvider } from './auth-context'

interface AppProvidersProps {
  children: ReactNode
}
export const AppProviders = (props: AppProvidersProps) => {
  const { children } = props
  return <AuthProvider>{children}</AuthProvider>
}

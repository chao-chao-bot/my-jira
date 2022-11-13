import { AuthContext } from '@/context/auth-context'
import * as React from 'react'

export const userAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用')
  }
  return context
}

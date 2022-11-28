import * as React from 'react'
export const useMount = (callback: () => void) => {
  React.useEffect(() => {
    callback()
  }, [])
}

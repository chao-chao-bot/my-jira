import * as React from 'react'
export const useMount = (callback: { (): void; (): void }) => {
  React.useEffect(() => {
    callback()
  }, [])
}

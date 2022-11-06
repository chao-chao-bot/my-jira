import * as React from 'react'

/**防抖 hook */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = (value: any, dealy?: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value)
  React.useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), dealy)
    return () => clearTimeout(timeout)
  }, [value, dealy])
  return debouncedValue
}

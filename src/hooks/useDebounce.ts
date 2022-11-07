import * as React from 'react'

/**防抖 hook */
export const useDebounce = <T>(value: T, dealy?: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value)
  React.useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), dealy)
    return () => clearTimeout(timeout)
  }, [value, dealy])
  return debouncedValue
}

import * as React from 'react'
export const useArray = <T>(arr: T[]) => {
  const [value, setValue] = React.useState<T[]>(arr)
  const clear = () => {
    value.splice(0, arr.length - 1)
    setValue([])
  }
  const add = (item: T) => {
    setValue([...value, item])
  }

  const removeIndex = (index: number) => {
    value.splice(index, 1)
    setValue([...value])
  }
  return {
    value,
    setValue,
    clear,
    add,
    removeIndex
  }
}
export default useArray

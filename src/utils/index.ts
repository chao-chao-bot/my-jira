export const isFalsy = (value: number | string) => (value === 0 ? false : !value)

export const cleanObject = (object: object) => {
  const result = { ...object }
  Object.keys(result).forEach(key => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = result[key]
    if (isFalsy(value)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      delete result[key]
    }
  })
  return result
}

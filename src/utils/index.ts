export const isVoid = (value: unknown) => value === undefined || value === null || value === ''

interface CleanObjectParams {
  [key: string]: unknown
}

export const cleanObject = (object: CleanObjectParams) => {
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isVoid(value)) {
      delete result[key]
    }
  })
  return result
}

export const resetRoute = () => (window.location.href = window.location.origin)

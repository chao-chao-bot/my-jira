import { cleanObject } from '@/utils'
import * as React from 'react'
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom'
/**
 * 实现url参数管理 ，返回页面ulr中指定键的参数值
 * */

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyMap = React.useMemo(
    () =>
      keys.reduce((prev, key) => {
        return { ...prev, [key]: searchParams.get(key) || '' }
      }, {} as { [key in K]: string }),
    [searchParams]
  )

  const setSearchParamsFunction = (params: Partial<{ [key in K]: unknown }>) => {
    const o = cleanObject({ ...Object.fromEntries(searchParams), ...params }) as URLSearchParamsInit
    return setSearchParams(o)
  }
  return [
    keyMap,
    setSearchParamsFunction
    //数组中的类型不一致 解决数组类型不统一
  ] as const
}

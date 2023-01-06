/**
 * 实现url参数管理 ，返回页面ulr中指定键的参数值
 * */

import { useSearchParams } from 'react-router-dom'

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams()
  return [
    keys.reduce((prev, key) => {
      return { ...prev, [key]: searchParams.get(key) || '' }
    }, {} as { [key in K]: string }),
    setSearchParams
    //解决数组类型不统一
  ] as const
}

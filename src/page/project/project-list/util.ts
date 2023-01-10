import { useUrlQueryParam } from '@/hooks/useUrlQueryParam'
import * as React from 'react'

export const useProjeSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(['project_name', 'creator_id'])
  const memoParam = React.useMemo(() => {
    return { ...param, creator_id: Number(param.creator_id) || undefined }
  }, [param])
  return [memoParam, setParam] as const
}

import * as React from 'react'
import { useAsync } from '@/hooks/useAsync'
import { Users } from '@/types'
import { fetchUserList } from '@/api/projects'

export const useUser = (param?: Partial<Users>) => {
  const { run, ...result } = useAsync<Users[]>()
  React.useEffect(() => {
    run(fetchUserList(param))
  }, [])
  return result
}

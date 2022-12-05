import * as React from 'react'
import { useAsync } from '@/hooks/useAsync'
import { Users } from '@/types'
import { fetchUserList } from '@/api/projects/user-projects'

export const useUser = (param?: Partial<Users>) => {
  const { run, ...result } = useAsync<Users[]>()
  React.useEffect(() => {
    console.log(' hihi ')

    run(fetchUserList(param))
  }, [])
  return result
}

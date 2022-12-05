import * as React from 'react'
import { fetchProjectList } from '@/api/projects/user-projects'
import { useAsync } from '@/hooks/useAsync'
import { Project } from '@/types'

import { cleanObject } from '.'

export const useProject = (params?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>()
  React.useEffect(() => {
    run(fetchProjectList(cleanObject(params || {})))
  }, [params])
  return result
}

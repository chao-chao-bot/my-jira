import { useUser } from '@/utils/users'
import * as React from 'react'
import { IdSelect } from './id-select'

type UserSelectProps = React.ComponentProps<typeof IdSelect>
export const UserSelect: React.FC<UserSelectProps> = props => {
  const { data: users } = useUser()
  return <IdSelect options={users || []} {...props} />
}

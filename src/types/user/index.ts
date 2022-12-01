export * from './auth'
export type Users = {
  id: string
  name: string
  email: string
  token?: string
}

export type Project = {
  key: string
  name: string
  personId: string
  pin: boolean
  organization: string
}

export type Users = {
  id: string
  name: string
  email: string
  token?: string
}

export type Project = {
  id: string
  name: string
  personId: string
  pin: boolean
  organization: string
}
export * from './auth'

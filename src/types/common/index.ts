export type Users = {
  id: string
  name: string
  email: string
  title: string
  organization: string
}

export type Project = {
  id: string
  name: string
  personId: string
  pin: boolean
  organization: string
}

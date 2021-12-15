export interface UserI {
  _id: string
  auth: {
    email: string
    password: string
    role: string
  }
  profile: {
    firstName: string
    lastName: string
    avatar: string
  }
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  token: string
  createdAt: Date
  updatedAt: Date
}

export interface NewUserI {
  auth: {
    email: string
    password: string
  }
  profile: {
    firstName: string
    lastName: string
  }
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
}

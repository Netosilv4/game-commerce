import axios from 'axios'
import { useState } from 'react'
import { NewUserI } from '../interfacesAndTypes/users'

interface UseRegisterI {
  newUser: NewUserI
  setNewUser: (newUser: NewUserI) => void
  crudError: string
  sendCreate: () => void
}

const useRegister = (): UseRegisterI => {
  const [newUser, setNewUser] = useState<NewUserI>({
    auth: {
      email: '',
      password: ''
    },
    profile: {
      firstName: '',
      lastName: ''
    },
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    }
  })
  const [crudError, setCrudError] = useState<string>('')

  const sendCreate = async () => {
    try {
      const response = await axios.post('http://localhost:4000/user/create', {
        user: newUser
      })
      if (response.status === 200) {
        setCrudError('User created !')
      }
    } catch (err) {
      if (err.response) {
        setCrudError(err.response.data.message)
      } else {
        setCrudError('Internal server error')
      }
    }
  }

  return {
    newUser,
    setNewUser,
    crudError,
    sendCreate
  }
}

export default useRegister

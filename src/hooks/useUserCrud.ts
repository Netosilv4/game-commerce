/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { useState } from 'react'
import { UserI } from '../interfacesAndTypes/users'

interface UserCrudInterface {
  updateUser: (user: UserI) => void
  sendUpdate: () => void
  crudError: string
  userData: UserI
  setCrudError: (error: string) => void
}

const useUserCrud = (user: UserI): UserCrudInterface => {
  const [userData, setUserData] = useState<UserI>(user)
  const [crudError, setCrudError] = useState<string>('')

  const updateUser = (newUser: UserI) => {
    setUserData(newUser)
  }

  const sendUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/user/update/${user._id}`,
        {
          user: userData
        }
      )
      if (response.status === 200) {
        console.log(response)
        setCrudError('User updated !')
      }
    } catch (error: any) {
      if (error.response) {
        setCrudError(error.response.data.message)
      } else {
        setCrudError('Internal server error')
      }
    }
  }

  return {
    updateUser,
    sendUpdate,
    crudError,
    userData,
    setCrudError
  }
}

export default useUserCrud

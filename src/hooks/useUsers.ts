/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { UserI } from '../interfacesAndTypes/users'

export interface useUserI {
  user: UserI
  loginMessage: string
  formEmail: string
  formPassword: string
  setFormEmail: Dispatch<SetStateAction<string>>
  setFormPassword: Dispatch<SetStateAction<string>>
  loginHandler: (email?: string, password?: string) => Promise<void>
  loading: boolean
  logout: () => void
}
const useUser = (): useUserI => {
  const [user, setUser] = useState<UserI>(undefined)
  const [loginMessage, setLoginMessage] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formPassword, setFormPassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const localUser = localStorage.getItem('user')
    if (localUser) {
      setUser(JSON.parse(localUser))
    }
  }, [])

  useEffect(() => {
    saveLocal()
  }, [user])

  const loginHandler = async (email = formEmail, password = formPassword) => {
    setLoading(true)
    try {
      const dbResponse = await axios.post('http://localhost:4000/user/login', {
        email: email,
        password: password
      })
      setUser({ ...dbResponse.data._doc })
    } catch (err: any) {
      console.log(err)
      if (err.response) {
        setLoginMessage(err.response.data.message)
        setLoading(true)
      } else {
        setLoginMessage('Internal error, try again in a few minutes')
        setLoading(true)
      }
    }
    setLoading(false)
  }

  const saveLocal = () => {
    if (user !== undefined) {
      try {
        localStorage.setItem('user', JSON.stringify(user))
      } catch (err) {
        console.log(err)
      }
    }
  }

  const logout = () => {
    setUser(undefined)
    localStorage.removeItem('user')
  }

  return {
    user,
    loginMessage,
    formEmail,
    formPassword,
    setFormEmail,
    setFormPassword,
    loginHandler,
    loading,
    logout
  }
}

export default useUser

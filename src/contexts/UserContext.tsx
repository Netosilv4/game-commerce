import React, { createContext } from 'react'
import useUser, { useUserI } from '../hooks/useUsers'

export const UserContext = createContext<useUserI>({} as useUserI)

const UserProvider: React.FC = ({ children }) => {
  const {
    formEmail,
    formPassword,
    loginHandler,
    loginMessage,
    setFormEmail,
    setFormPassword,
    user,
    loading,
    logout
  } = useUser()
  return (
    <UserContext.Provider
      value={{
        formEmail,
        formPassword,
        loginHandler,
        loginMessage,
        setFormEmail,
        setFormPassword,
        user,
        loading,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { UserI } from '../../interfacesAndTypes/users'
import {
  FormContainer,
  FormInput,
  FormLabel,
  FormSpan,
  FormTitle
} from '../../styles/globalComponents/Forms'
import { capitalize } from '../../utils/capitalize'

interface EditUserFormProps {
  updateUser: (user: UserI) => void
  userData: UserI
}

const EditUserForm: React.FC<EditUserFormProps> = ({
  updateUser,
  userData
}) => {
  const { user } = useContext(UserContext)
  return (
    <FormContainer>
      <FormTitle>Auth Info</FormTitle>
      {Object.keys(user.auth).map(value => {
        return (
          <FormLabel key={value}>
            <FormSpan>{capitalize(value)}</FormSpan>
            <FormInput
              name={value}
              onChange={({ target }) =>
                updateUser({
                  ...userData,
                  auth: {
                    ...userData.auth,
                    [target.name]: target.value
                  }
                })
              }
              value={userData.auth[value]}
              type="text"
            />
          </FormLabel>
        )
      })}
      <FormTitle>Profile Info</FormTitle>
      {Object.keys(user.profile).map(value => {
        return (
          <FormLabel key={value}>
            <FormSpan>{capitalize(value)}</FormSpan>
            <FormInput
              name={value}
              onChange={({ target }) =>
                updateUser({
                  ...userData,
                  profile: {
                    ...userData.profile,
                    [target.name]: target.value
                  }
                })
              }
              value={userData.profile[value]}
              type="text"
            />
          </FormLabel>
        )
      })}
      <FormTitle>Address info</FormTitle>
      {Object.keys(user.address).map(value => {
        return (
          <FormLabel key={value}>
            <FormSpan>{capitalize(value)}</FormSpan>
            <FormInput
              name={value}
              onChange={({ target }) =>
                updateUser({
                  ...userData,
                  address: {
                    ...userData.address,
                    [target.name]: target.value
                  }
                })
              }
              value={userData.address[value]}
              type="text"
            />
          </FormLabel>
        )
      })}
    </FormContainer>
  )
}

export default EditUserForm

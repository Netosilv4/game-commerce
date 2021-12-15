import React from 'react'
import useRegister from '../../hooks/useRegister'
import {
  ErrorMessage,
  FormButton,
  FormInput,
  FormLabel,
  FormTitle,
  FormWrapper,
  LoginFormContainer
} from '../../styles/globalComponents/Forms'
import { FlexDiv } from '../../styles/globalComponents/GeneralComponents'

interface RegisterFormProps {
  setTab: (tab: string) => void
}
const RegisterForm: React.FC<RegisterFormProps> = ({ setTab }) => {
  const { newUser, setNewUser, crudError, sendCreate } = useRegister()
  return (
    <LoginFormContainer>
      <h1>Register</h1>
      <FormWrapper>
        <FormTitle>Profile info</FormTitle>
        <FormLabel>
          Frist name*:
          <FormInput
            name={'firstName'}
            value={newUser.profile.firstName}
            onChange={({ target }) =>
              setNewUser({
                ...newUser,
                profile: {
                  ...newUser.profile,
                  firstName: target.value
                }
              })
            }
            placeholder="First name"
          />
        </FormLabel>
        <FormLabel>
          Last name*:
          <FormInput
            value={newUser.profile.lastName}
            onChange={({ target }) =>
              setNewUser({
                ...newUser,
                profile: { ...newUser.profile, lastName: target.value }
              })
            }
            name={'lastName'}
            placeholder="First lastname"
          />
        </FormLabel>
        <FormLabel>
          Email*:
          <FormInput
            value={newUser.auth.email}
            onChange={({ target }) =>
              setNewUser({
                ...newUser,
                auth: { ...newUser.auth, email: target.value }
              })
            }
            name={'email'}
            placeholder="Email"
          />
        </FormLabel>
        <FormLabel>
          Password*:
          <FormInput
            value={newUser.auth.password}
            onChange={({ target }) =>
              setNewUser({
                ...newUser,
                auth: { ...newUser.auth, password: target.value }
              })
            }
            name={'password'}
            type="password"
            placeholder="Password"
          />
        </FormLabel>
        <FormTitle>Address info</FormTitle>
        <FormLabel>
          City*:
          <FormInput
            value={newUser.address.city}
            onChange={({ target }) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, city: target.value }
              })
            }
            name="city"
            placeholder="city"
          />
        </FormLabel>
        <FormLabel>
          State*:
          <FormInput
            value={newUser.address.state}
            onChange={({ target }) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, state: target.value }
              })
            }
            name="state"
            placeholder="state"
          />
        </FormLabel>{' '}
        <FormLabel>
          Zip*:
          <FormInput
            value={newUser.address.zip}
            onChange={({ target }) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, zip: target.value }
              })
            }
            name="zip"
            placeholder="zip"
          />
        </FormLabel>{' '}
        <FormLabel>
          Country*:
          <FormInput
            value={newUser.address.country}
            onChange={({ target }) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, country: target.value }
              })
            }
            name="country"
            placeholder="country"
          />
        </FormLabel>
        <FormLabel>
          Street*:
          <FormInput
            value={newUser.address.street}
            onChange={({ target }) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, street: target.value }
              })
            }
            name="street"
            placeholder="street"
          />
        </FormLabel>
        <ErrorMessage>{crudError}</ErrorMessage>
        <FlexDiv>
          <FormButton type="button" onClick={() => sendCreate()}>
            Sign Up
          </FormButton>
          <FormButton
            type="button"
            style={{ backgroundColor: 'green' }}
            onClick={() => setTab('login')}
          >
            Already have a account ?
          </FormButton>
        </FlexDiv>
      </FormWrapper>
    </LoginFormContainer>
  )
}

export default RegisterForm

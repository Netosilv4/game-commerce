import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import {
  FormButton,
  FormInput,
  FormLabel,
  FormSpan,
  FormWrapper,
  LoginFormContainer
} from '../../styles/globalComponents/Forms'
import { FlexDiv } from '../../styles/globalComponents/GeneralComponents'

interface LoginFormProps {
  setTab: (tab: string) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ setTab }) => {
  const {
    formEmail,
    formPassword,
    loginHandler,
    setFormEmail,
    setFormPassword,
    loginMessage,
    loading
  } = useContext(UserContext)

  return (
    <LoginFormContainer>
      <h1>Login</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <FormWrapper>
          <FormLabel>
            <FormSpan>Email:</FormSpan>
            <FormInput
              value={formEmail}
              onChange={({ target }) => setFormEmail(target.value)}
              placeholder="Email"
            />
          </FormLabel>
          <FormLabel>
            <FormSpan>Password:</FormSpan>
            <FormInput
              value={formPassword}
              onChange={({ target }) => setFormPassword(target.value)}
              placeholder="Password"
            />
          </FormLabel>
          <span style={{ color: 'red' }}>{loginMessage}</span>
          <FlexDiv>
            <FormButton type="button" onClick={() => loginHandler()}>
              Login
            </FormButton>
            <FormButton
              style={{ backgroundColor: 'green' }}
              type="button"
              onClick={() => setTab('register')}
            >
              Dont have an account?
            </FormButton>
          </FlexDiv>
        </FormWrapper>
      )}
    </LoginFormContainer>
  )
}

export default LoginForm

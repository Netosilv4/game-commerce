import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: scroll;
  h1 {
    letter-spacing: 1px;
  }
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 50px;
  justify-content: center;
  padding: 20px;
`

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const FormInput = styled.input`
  padding: 10px;
`

export const FormButton = styled.button`
  border: none;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.primary};
  padding: 20px 0;
  cursor: pointer;
  color: white;
  font-weight: 700;
  :hover {
    opacity: 0.8;
  }
`

export const FormSpan = styled.span``

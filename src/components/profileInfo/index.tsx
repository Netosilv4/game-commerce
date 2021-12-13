import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import useUserCrud from '../../hooks/useUserCrud'
import { FormButton } from '../../styles/globalComponents/Forms'
import EditUserForm from '../forms/EditUserForm'
import {
  ButtonWrapper,
  ProfileData,
  ProfileField,
  ProfileInfoBox,
  ProfileSection,
  ProfileTitle
} from './styles'

const ProfileInfo: React.FC = () => {
  const { user, loginHandler } = useContext(UserContext)
  const { crudError, updateUser, sendUpdate, userData, setCrudError } =
    useUserCrud(user)
  const [editing, setEditing] = React.useState(false)

  useEffect(() => {
    if (crudError === 'User updated !') {
      loginHandler(userData.auth.email, userData.auth.password)
      setEditing(false)
      setCrudError('')
    }
  }, [crudError])
  return (
    <>
      {editing ? (
        <ProfileSection>
          <EditUserForm updateUser={updateUser} userData={userData} />
          <span style={{ color: 'red' }}>{crudError}</span>
          <ButtonWrapper>
            <FormButton
              style={{ width: '300px' }}
              onClick={() => setEditing(false)}
            >
              Voltar
            </FormButton>
            <FormButton
              style={{ backgroundColor: 'green', width: '300px' }}
              onClick={() => sendUpdate()}
            >
              Salvar
            </FormButton>
          </ButtonWrapper>
        </ProfileSection>
      ) : (
        <ProfileSection>
          <ProfileTitle>Basic info</ProfileTitle>
          <ProfileInfoBox>
            <ProfileField>Name</ProfileField>
            <ProfileData>
              {user.profile.firstName} {user.profile.lastName}
            </ProfileData>
          </ProfileInfoBox>
          <ProfileInfoBox>
            <ProfileField>City</ProfileField>
            <ProfileData>{user.address.city}</ProfileData>
          </ProfileInfoBox>
          <ProfileInfoBox>
            <ProfileField>Street</ProfileField>
            <ProfileData>{user.address.street}</ProfileData>
          </ProfileInfoBox>
          <ProfileInfoBox>
            <ProfileField>Country</ProfileField>
            <ProfileData>{user.address.country}</ProfileData>
          </ProfileInfoBox>
          <FormButton onClick={() => setEditing(true)}>
            Alterar informações
          </FormButton>
        </ProfileSection>
      )}
    </>
  )
}

export default ProfileInfo

import { ProfileSection } from '../profileInfo/styles'
import React from 'react'
import useSwitchAdminTabs from '../../hooks/useSwitchAdminTabs'
import { FormButton } from '../../styles/globalComponents/Forms'
import { FlexDiv } from '../../styles/globalComponents/GeneralComponents'
import { FormTitle } from '../forms/styles'
const AdminArea: React.FC = () => {
  const { handleTabChange, renderTab } = useSwitchAdminTabs()
  return (
    <ProfileSection>
      <FormTitle>Add/Modify games</FormTitle>
      <FlexDiv>
        <FormButton onClick={() => handleTabChange('editGame')}>
          Edit Game
        </FormButton>
        <FormButton onClick={() => handleTabChange('addGame')}>
          Add Game
        </FormButton>
      </FlexDiv>
      <div>{renderTab()}</div>
    </ProfileSection>
  )
}

export default AdminArea

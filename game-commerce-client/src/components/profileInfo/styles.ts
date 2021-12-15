import styled from 'styled-components'

export const ProfileSection = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
`

export const ProfileTitle = styled.h1`
  font-weight: 400;
  margin-bottom: 20px;
`

export const ProfileField = styled.span`
  font-size: 24px;
  color: gray;
`

export const ProfileData = styled.h3`
  font-size: 24px;
  font-weight: 500;
`

export const ProfileInfoBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
`

export const Aside = styled.div`
  width: 20%;
  height: 300px;
  display: flex;
  background-color: ${props => props.theme.colors.button};
`
export const AsideMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const AsideMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  font-size: 18px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

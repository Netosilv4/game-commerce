import styled from 'styled-components'

export const GameAreaContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const DescriptionBox = styled.div`
  width: 50%;
  padding: 30px;
  color: ${props => props.theme.colors.textSecondary};
  background-color: ${props => props.theme.colors.text};
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const AditionalInfoContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const List = styled.ul`
  margin-top: 100px;
  list-style: none;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

export const ListItem = styled.li`
  font-weight: 700;
  margin-bottom: 10px;
`

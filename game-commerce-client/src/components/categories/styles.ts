import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 10px;
  transition: 0.2s;
  background-color: ${props => props.theme.colors.button};
  color: ${props => props.theme.colors.textSecondary};
  :hover {
    color: ${props => props.theme.colors.text};
    transform: scale(110%);
    z-index: 1000;
    background-color: ${props => props.theme.colors.paper};
  }
`

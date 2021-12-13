import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 5vw;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.paper};
  padding: 0 50px;
  @media (max-width: 600px) {
    margin-bottom: 50px;
    height: 60px;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  cursor: pointer;
`

export const HeaderMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`

export const LoginButton = styled.button`
  border: none;
  padding: 10px;
  width: 75px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  background-color: ${props => props.theme.colors.button};
  :hover {
    background-color: #000;
  }
`

export const MenuItem = styled.li`
  cursor: pointer;
  :hover {
    transform: scale(110%);
  }
`

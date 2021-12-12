import React from 'react'
import {
  HeaderContainer,
  HeaderMenu,
  LoginButton,
  MenuItem,
  Title
} from './styles'
import { GrSearch, GrFavorite, GrCart } from 'react-icons/gr'
export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Title>GameShop</Title>
      <HeaderMenu>
        <MenuItem>
          <GrSearch size="20px" />
        </MenuItem>
        <MenuItem>
          <GrFavorite size="20px" />
        </MenuItem>
        <MenuItem>
          <GrCart size="20px" />
        </MenuItem>
        <LoginButton>Login</LoginButton>
      </HeaderMenu>
    </HeaderContainer>
  )
}

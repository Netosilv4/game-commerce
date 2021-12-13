import React, { useContext } from 'react'
import {
  HeaderContainer,
  HeaderMenu,
  LoginButton,
  MenuItem,
  Title
} from './styles'
import { GrSearch, GrCart } from 'react-icons/gr'
import { useRouter } from 'next/dist/client/router'
import { UserContext } from '../../contexts/UserContext'
import Router from 'next/router'
import { ChartContext } from '../../contexts/UserChart'
export const Header = (): JSX.Element => {
  const { user } = useContext(UserContext)
  const { hidden, setHidden } = useContext(ChartContext)
  const router = useRouter()
  return (
    <HeaderContainer>
      <Title onClick={() => router.push('/')}>GameShop</Title>
      <HeaderMenu>
        <MenuItem>
          <GrSearch size="20px" />
        </MenuItem>
        <MenuItem onClick={() => setHidden(!hidden)}>
          <GrCart size="20px" />
        </MenuItem>
        {user ? (
          <LoginButton onClick={() => Router.push('/profile')}>
            {user.profile.firstName}
          </LoginButton>
        ) : (
          <LoginButton onClick={() => router.push('/login')}>Login</LoginButton>
        )}
      </HeaderMenu>
    </HeaderContainer>
  )
}

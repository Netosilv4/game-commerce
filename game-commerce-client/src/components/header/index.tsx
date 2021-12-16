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
import Link from 'next/link'

export const Header = (): JSX.Element => {
  const { user } = useContext(UserContext)
  const { hidden, setHidden } = useContext(ChartContext)
  const router = useRouter()
  return (
    <HeaderContainer>
      <Link href="/">
        <Title>GameShop</Title>
      </Link>
      <HeaderMenu>
        <MenuItem>
          <GrSearch size="20px" />
        </MenuItem>
        <MenuItem onClick={() => setHidden(!hidden)}>
          <GrCart size="20px" />
        </MenuItem>
        {user ? (
          <LoginButton onClick={() => Router.replace('/profile')}>
            {user.profile.firstName}
          </LoginButton>
        ) : (
          <LoginButton onClick={() => router.replace('/login')}>
            Login
          </LoginButton>
        )}
      </HeaderMenu>
    </HeaderContainer>
  )
}

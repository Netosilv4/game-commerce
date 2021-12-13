import React, { useContext, useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import { Header } from '../components/header'
import LoginForm from '../components/loginForm'
import RegisterForm from '../components/registerForm'
import { FormContainer } from '../styles/pages/Login'
import { UserContext } from '../contexts/UserContext'
import { Redirect } from './profile'
const Login = (): JSX.Element => {
  const { user } = useContext(UserContext)
  const [tab, setTab] = useState('login')
  if (user) {
    return <Redirect path="/" />
  }

  const handleTab = (tab: string) => {
    switch (tab) {
      case 'login':
        return <LoginForm setTab={setTab} />
      case 'register':
        return <RegisterForm setTab={setTab} />
      default:
        return <LoginForm setTab={setTab} />
    }
  }

  return (
    <Container>
      <Head>
        <title>GameShop</title>
      </Head>
      <Header />
      <FormContainer>{handleTab(tab)}</FormContainer>
    </Container>
  )
}

export default Login

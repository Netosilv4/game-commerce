import React, { useContext, useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import { Header } from '../components/header'
import RegisterForm from '../components/forms/RegisterForm'
import { UserContext } from '../contexts/UserContext'
import { Redirect } from './profile'
import Cart from '../components/chart'
import { FormContainer } from '../styles/globalComponents/Forms'
import LoginForm from '../components/forms/LoginForm'

const Login = (): JSX.Element => {
  const { user } = useContext(UserContext)
  const [tab, setTab] = useState('login')
  if (user) {
    console.log('to aqui')
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
      <Cart />
      <FormContainer style={{ alignItems: 'center' }}>
        {handleTab(tab)}
      </FormContainer>
    </Container>
  )
}

export default Login

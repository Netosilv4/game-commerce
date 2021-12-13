import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { Header } from '../components/header'
import ProfileSide from '../components/profileInfo/ProfileSide'
import { UserContext } from '../contexts/UserContext'
import useSwitchTab from '../hooks/useSwitchTab'
import { Container } from '../styles/pages/Home'
import { ProfileWrapper } from '../styles/pages/Profile'

export const Redirect = ({ path }: { path: string }): null => {
  const router = useRouter()

  useEffect(() => {
    router.push(path)
  }, [])

  return null
}

const Profile: React.FC = () => {
  const { user } = useContext(UserContext)
  const { switchTab, setTab } = useSwitchTab(user)

  if (!user) return <Redirect path="/" />

  return (
    <Container>
      <Head>
        <title>GameShop account</title>
      </Head>
      <Header />
      <h1 style={{ margin: '20px' }}>Hello, {user.profile.firstName} !</h1>
      <ProfileWrapper>
        <ProfileSide user={user} setTab={setTab} />
        {switchTab()}
      </ProfileWrapper>
    </Container>
  )
}
export default Profile

import React from 'react'
import AdminArea from '../components/adminArea'
import ProfileInfo from '../components/profileInfo'
import { UserI } from '../interfacesAndTypes/users'

interface SwitchTabI {
  setTab: (tab: string) => void
  switchTab: () => JSX.Element
}

const useSwitchTab = (user: UserI): SwitchTabI => {
  const [tab, setTab] = React.useState('info')

  const switchTab = () => {
    switch (true) {
      case tab === 'info':
        return <ProfileInfo />
      case tab === 'admin' && user.auth.role === 'admin':
        return <AdminArea />
      default:
        return <ProfileInfo />
    }
  }

  return {
    setTab,
    switchTab
  }
}

export default useSwitchTab

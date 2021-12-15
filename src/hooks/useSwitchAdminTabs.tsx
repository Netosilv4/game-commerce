import React, { useState } from 'react'
import EditGame from '../components/editGame'
import AddGameForm from '../components/forms/AddGameForm'

interface SwitchTabI {
  handleTabChange: (tabName: string) => void
  renderTab: () => JSX.Element
}

const useSwitchAdminTabs = (): SwitchTabI => {
  const [activeTab, setActiveTab] = useState<string>('users')

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName)
  }

  const renderTab = () => {
    switch (true) {
      case activeTab === 'editGame':
        return <EditGame />
      case activeTab === 'addGame':
        return <AddGameForm />
      default:
        return <EditGame />
    }
  }
  return {
    handleTabChange,
    renderTab
  }
}

export default useSwitchAdminTabs

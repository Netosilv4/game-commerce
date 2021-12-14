import React, { useState } from 'react'
import EditGame from '../components/editGame'

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
        return <div>AddGame</div>
      default:
        return <div>AddGame</div>
    }
  }
  return {
    handleTabChange,
    renderTab
  }
}

export default useSwitchAdminTabs

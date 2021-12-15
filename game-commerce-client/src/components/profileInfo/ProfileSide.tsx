import React, { useContext } from 'react'
import { Aside, AsideMenu, AsideMenuItem } from './styles'
import { CgProfile } from 'react-icons/cg'
import { MdSecurity } from 'react-icons/md'
import { RiAdminFill } from 'react-icons/ri'
import { UserI } from '../../interfacesAndTypes/users'
import { BiLogOutCircle } from 'react-icons/bi'
import { UserContext } from '../../contexts/UserContext'
interface ProfileSideProps {
  setTab: (tab: string) => void
  user: UserI
}

const Profileside: React.FC<ProfileSideProps> = ({ setTab, user }) => {
  const { logout } = useContext(UserContext)
  return (
    <Aside>
      <AsideMenu>
        <AsideMenuItem onClick={() => setTab('info')}>
          <span>Basic info</span>
          <CgProfile color="white" size="30px" />
        </AsideMenuItem>
        {user.auth.role === 'admin' && (
          <AsideMenuItem onClick={() => setTab('admin')}>
            <span>Admin</span>
            <RiAdminFill color="white" size="30px" />
          </AsideMenuItem>
        )}
        <AsideMenuItem onClick={() => setTab('security')}>
          <span>Security</span>
          <MdSecurity color="white" size="30px" />
        </AsideMenuItem>
        <AsideMenuItem onClick={() => logout()}>
          <span style={{ color: 'red' }}>Logout</span>
          <BiLogOutCircle color="white" size="30px" />
        </AsideMenuItem>
      </AsideMenu>
    </Aside>
  )
}
export default Profileside

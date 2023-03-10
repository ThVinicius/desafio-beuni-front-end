import { Dispatch, FC, SetStateAction } from 'react'
import useLogout from '../../hooks/useLogout'
import logoutIcon from '../../assets/images/logout.png'
import availableIcon from '../../assets/images/available.svg'
import { Menu } from './headerStyle'
import { Link } from 'react-router-dom'

interface IProps {
  openCustomerMenu: boolean
  setOpenCustomerMenu: Dispatch<SetStateAction<boolean>>
}

const CustomerMenu: FC<IProps> = ({
  openCustomerMenu,
  setOpenCustomerMenu
}) => {
  const { logout } = useLogout()

  const handleLogout = () => {
    setOpenCustomerMenu(false)
    logout()
  }

  return (
    <Menu
      isOpen={openCustomerMenu}
      onMouseLeave={() => setOpenCustomerMenu(false)}
    >
      <Link to="/order">
        <span>
          Histórico de compras
          <img src={availableIcon} alt="icone de historico" />
        </span>
      </Link>
      <span onClick={handleLogout}>
        Logout
        <img src={logoutIcon} alt="logout icon" />
      </span>
    </Menu>
  )
}

export default CustomerMenu

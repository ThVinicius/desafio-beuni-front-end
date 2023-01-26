import { FC, useState } from 'react'
import usePath from '../../hooks/usePath'
import userIcon from '../../assets/images/user.svg'
import Logo from '../Logo/Logo'
import CustomerMenu from './CustomerMenu'
import Cart from './Cart'
import { Container, Icon } from './headerStyle'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  const { isAuth } = usePath()
  const [openCustomerMenu, setOpenCustomerMenu] = useState(false)

  return (
    <>
      {!isAuth && (
        <Container>
          <Icon
            src={userIcon}
            alt="Icone do usuário"
            onClick={() => setOpenCustomerMenu(prev => !prev)}
          />
          <Link to="/home">
            <Logo />
          </Link>
          <Cart />
          <CustomerMenu {...{ openCustomerMenu, setOpenCustomerMenu }} />
        </Container>
      )}
    </>
  )
}

export default Header

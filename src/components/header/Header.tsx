import { FC, useState } from 'react'
import usePath from '../../hooks/usePath'
import userIcon from '../../assets/images/user.svg'
import cartIcon from '../../assets/images/cart.svg'
import Logo from '../Logo/Logo'
import { Container, Icon } from './headerStyle'
import CustomerMenu from './CustomerMenu'

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
          <Logo />
          <Icon src={cartIcon} alt="Icone do carrinho" />
          <CustomerMenu {...{ openCustomerMenu, setOpenCustomerMenu }} />
        </Container>
      )}
    </>
  )
}

export default Header

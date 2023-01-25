import { FC } from 'react'
import usePath from '../../hooks/usePath'
import Logo from '../Logo/Logo'
import { Container } from './headerStyle'

const Header: FC = () => {
  const { isAuth } = usePath()

  return (
    <>
      {!isAuth && (
        <Container>
          <Logo />
        </Container>
      )}
    </>
  )
}

export default Header

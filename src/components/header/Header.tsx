import { FC } from 'react'
import { Container, Logo } from './headerStyle'

const Header: FC = () => {
  return (
    <Container>
      <Logo>
        <h1>Desafio</h1>
        <img
          src="http://beuni.com.br/wp-content/uploads/sites/17/2022/07/beuni-menor.png?x24827"
          alt="Logo BeUni"
        />
      </Logo>
    </Container>
  )
}

export default Header

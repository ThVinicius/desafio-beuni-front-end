import { FC } from 'react'
import { Container } from './logoStyle'

const Logo: FC = () => {
  return (
    <Container>
      <h1>Desafio</h1>
      <img
        src="http://beuni.com.br/wp-content/uploads/sites/17/2022/07/beuni-menor.png?x24827"
        alt="Logo BeUni"
      />
    </Container>
  )
}

export default Logo

import { FC } from 'react'
import beuniLogo from '../../assets/images/beuni-logo.png'
import { Container } from './logoStyle'

const Logo: FC = () => {
  return (
    <Container>
      <h1>Desafio</h1>
      <img src={beuniLogo} alt="Logo BeUni" />
    </Container>
  )
}

export default Logo

import { FC } from 'react'
import { Container } from './authContainerStyle'

interface IProps {
  children: JSX.Element | JSX.Element[]
}

const AuthContainer: FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default AuthContainer

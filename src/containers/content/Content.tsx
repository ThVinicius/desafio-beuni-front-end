import { FC } from 'react'
import { Container } from './contentStyle'

interface IProps {
  children: JSX.Element | JSX.Element[]
}

const Content: FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Content

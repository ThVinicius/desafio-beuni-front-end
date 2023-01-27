import { FC } from 'react'
import AuthContainer from '../../containers/auth/Container'
import Form from './form/Form'

const SignIn: FC = () => {
  return (
    <AuthContainer>
      <Form />
    </AuthContainer>
  )
}

export default SignIn

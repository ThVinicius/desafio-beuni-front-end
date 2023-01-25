import { FC, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../components/Logo/Logo'
import useSignIn from '../../../hooks/api/useSignIn'
import { Button, Container, InputBox } from './formStyle'

const Form: FC = () => {
  const { signIn } = useSignIn()
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  const submit = (event: FormEvent) => {
    event.preventDefault()

    signIn({ nickname, password })
  }

  return (
    <Container onSubmit={submit}>
      <Logo />
      <InputBox style={{ marginTop: '20px' }}>
        <p>Nickname</p>
        <input
          type="text"
          maxLength={33}
          name="nickname"
          placeholder="Nickname"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
        />
      </InputBox>
      <InputBox>
        <p>Senha</p>
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </InputBox>
      <Button type="submit">Enviar</Button>
      <Link to="/signup">Não tem uma conta? crie uma!</Link>
    </Container>
  )
}

export default Form

import { FC, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../components/Logo/Logo'
import useSignUp from '../../../hooks/api/useSignUp'
import { Button, Container, InputBox } from './formStyle'

const Form: FC = () => {
  const { signUp } = useSignUp()
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submit = (event: FormEvent) => {
    event.preventDefault()

    signUp({ nickname, password, confirmPassword })
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
      <InputBox>
        <p>Confirme a senha</p>
        <input
          type="password"
          name="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </InputBox>
      <Button type="submit">Cadastrar</Button>
      <Link to="/">Já tem uma conta? faça o login!</Link>
    </Container>
  )
}

export default Form

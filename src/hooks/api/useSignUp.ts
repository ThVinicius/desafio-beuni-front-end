import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

interface ISignUp {
  nickname: string
  password: string
  confirmPassword: string
}

export default function useSignUp() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signUp = (payload: ISignUp) => {
    if (loading) return
    setLoading(true)

    const toastId = toast.loading('Requisição em andamento...')

    const URL = `${import.meta.env.VITE_BASE_URL_API}/sign-up`

    const promise = axios.post(URL, payload)

    promise
      .then(() => {
        toast.update(toastId, {
          render: 'Cadastro realizado com sucesso! 👌',
          type: 'success',
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: true
        })

        navigate('/')
      })
      .catch(({ response }) => {
        let renderToast: string

        switch (response?.status) {
          case 400:
            renderToast = response.data
            break

          case 409:
            renderToast = 'Esse nickname já esta em uso! tente outro'

            break

          default:
            renderToast = 'Erro inesperado, tente mais tarde'
            break
        }

        toast.update(toastId, {
          render: `${renderToast} 🤯`,
          type: 'error',
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: true
        })
      })
      .finally(() => setLoading(false))
  }

  return { signUp, loadingSignUp: loading }
}

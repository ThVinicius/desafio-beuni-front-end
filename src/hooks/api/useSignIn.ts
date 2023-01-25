import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useToken } from '../../context/useToken'

interface ICustomer {
  nickname: string
  password: string
}

export default function useSignIn() {
  const [loading, setLoading] = useState(false)
  const { setToken } = useToken()
  const navigate = useNavigate()

  const signIn = (payload: ICustomer) => {
    if (loading) return
    setLoading(true)

    const toastId = toast.loading('Requisição em andamento...')

    const URL = `${import.meta.env.VITE_BASE_URL_API}/sign-in`

    const promise = axios.post(URL, payload)

    promise
      .then(({ data }) => {
        setToken(data.token)

        toast.update(toastId, {
          render: 'Login efetuado com sucesso! 👌',
          type: 'success',
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: true
        })

        navigate('/home')
      })
      .catch(({ response }) => {
        let renderToast: string

        switch (response?.status) {
          case 401:
            renderToast = response.data

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

  return { signIn, loadingSignIn: loading }
}

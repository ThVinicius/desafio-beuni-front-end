import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCart } from '../../context/useCart'
import { useToken } from '../../context/useToken'

export default function useAddOrder() {
  const { token } = useToken()
  const { setCart } = useCart()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const addOrder = () => {
    if (loading) return
    setLoading(true)

    const toastId = toast.loading('Requisição em andamento...')

    const URL = `${import.meta.env.VITE_BASE_URL_API}/orders`
    const body = null
    const header = { headers: { authorization: `Bearer ${token}` } }

    const promise = axios.post(URL, body, header)

    promise
      .then(() => {
        toast.update(toastId, {
          render: 'Compra realizada com sucesso! 👌',
          type: 'success',
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: true
        })

        setCart([])

        navigate('/order')
      })
      .catch(() => {
        toast.update(toastId, {
          render: `Houve um erro inesperado, tente mais tarde 🤯`,
          type: 'error',
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: true
        })

        navigate('/')
      })
  }

  return { addOrder, loadingAddOrder: loading }
}

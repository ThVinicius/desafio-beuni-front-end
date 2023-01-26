import { toast } from 'react-toastify'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToken } from '../../context/useToken'
import { useCart } from '../../context/useCart'

export default function useGetCart() {
  const { setCart } = useCart()
  const { token } = useToken()
  const navigate = useNavigate()

  useEffect(() => {
    const URL = `${import.meta.env.VITE_BASE_URL_API}/carts`
    const header = { headers: { authorization: `Bearer ${token}` } }

    const promise = axios.get(URL, header)

    promise
      .then(({ data }) => {
        setCart(data)
      })
      .catch(() => {
        toast.error('É necessário estar logado para acessar essa rota')

        navigate('/')
      })
  }, [])
}

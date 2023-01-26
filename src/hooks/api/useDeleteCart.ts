import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCart } from '../../context/useCart'
import { useToken } from '../../context/useToken'

export default function useDeleteCart() {
  const { token } = useToken()
  const { setCart } = useCart()
  const navigate = useNavigate()

  const removeCart = (id: number) => {
    setCart(prev => prev.filter(({ cartId }) => cartId !== id))

    const URL = `${import.meta.env.VITE_BASE_URL_API}/carts/${id}`
    const header = { headers: { authorization: `Bearer ${token}` } }

    const promise = axios.delete(URL, header)

    promise.catch(() => {
      toast.error('Aconteceu um erro inesperado, tente mais tardde')

      navigate('/')
    })
  }

  return { removeCart }
}

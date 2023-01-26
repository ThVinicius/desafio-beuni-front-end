import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useToken } from '../../context/useToken'
import { useCart } from '../../context/useCart'

interface IPayload {
  productId: number
  quantity: number
}

export default function useAddCart() {
  const { token } = useToken()
  const { setCart } = useCart()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const addCart = (payload: IPayload) => {
    if (loading) return
    setLoading(true)

    const URL = `${import.meta.env.VITE_BASE_URL_API}/carts`
    const header = { headers: { authorization: `Bearer ${token}` } }

    const promise = axios.post(URL, payload, header)

    promise
      .then(({ data }) => {
        setCart(prev => [...prev, data])
      })
      .catch(() => {
        navigate('/')

        toast.error('Algo deu errado com sua requisição, tente mais tarde')
      })
      .finally(() => setLoading(false))
  }

  return { addCart, loadingAddCart: loading }
}

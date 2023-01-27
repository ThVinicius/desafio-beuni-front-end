import { toast } from 'react-toastify'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToken } from '../../context/useToken'
import { IOrder } from '../../types/orderType'

export default function useGetOrder() {
  const [orders, setOrders] = useState<IOrder[]>()
  const [loading, setLoading] = useState(true)
  const { token } = useToken()
  const navigate = useNavigate()

  useEffect(() => {
    const URL = `${import.meta.env.VITE_BASE_URL_API}/orders`
    const header = { headers: { authorization: `Bearer ${token}` } }

    const promise = axios.get<IOrder[]>(URL, header)

    promise
      .then(({ data }) => setOrders(data))
      .catch(() => {
        toast.error('Algo deu errado, tente mais tarde')

        navigate('/')
      })
      .finally(() => setLoading(false))
  }, [])

  return { orders, loadingGetOrder: loading }
}

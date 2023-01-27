import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { IProduct } from '../../types/productType'
import { useToken } from '../../context/useToken'

export default function useGetProducts() {
  const [products, setProducts] = useState<IProduct[]>()
  const [loading, setLoading] = useState(false)
  const { token } = useToken()
  const navigate = useNavigate()

  const getProducts = (query?: string) => {
    setLoading(true)

    const queryName = query ? `?name=${query}` : ''

    const URL = `${import.meta.env.VITE_BASE_URL_API}/products${queryName}`

    const header = { headers: { authorization: `Bearer ${token}` } }

    const promise = axios.get<IProduct[]>(URL, header)

    promise
      .then(({ data }) => setProducts(data))
      .catch(() => {
        toast.error('É necessário estar logado para acessar essa página!')

        navigate('/')
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return { products, loadingGetProducts: loading, getProducts }
}

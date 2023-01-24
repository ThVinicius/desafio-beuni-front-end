import { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from '../../types/productType'

export default function useGetProducts() {
  const [products, setProducts] = useState<IProduct[]>()
  const [loading, setLoading] = useState(false)

  const getProducts = (query?: string) => {
    setLoading(true)

    const queryName = query ? `?name=${query}` : ''

    const URL = `${import.meta.env.VITE_BASE_URL_API}/products${queryName}`

    const promise = axios.get<IProduct[]>(URL)

    promise
      .then(({ data }) => setProducts(data))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return { products, loadingGetProducts: loading, getProducts }
}

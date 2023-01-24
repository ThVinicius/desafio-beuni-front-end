export interface IProduct {
  id: number
  name: string
  description: string
  category: string
  image: string
  stock: number
  price: number
  rating: number
  brand: string
  hasFreeShipping: boolean
  minimumQuantity: number
  kitManagerVariations: string
}

export interface ICart {
  cartId: number
  productId: number
  name: string
  image: string
  description: string
  category: string
  stock: number
  brand: string
  price: number
  hasFreeShipping: boolean
  minimumQuantity: number
  rating: number
}

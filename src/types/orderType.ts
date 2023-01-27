export interface IOrder {
  orderDate: string
  totalPrice: number
  products: {
    cartId: number
    orderId: number
    productId: number
    name: string
    image: string
    totalPrice: number
    quantity: number
  }[]
}

import { FC } from 'react'
import useDeleteCart from '../../hooks/api/useDeleteCart'
import { ICart } from '../../types/cartType'
import formatPrice from '../../utils/formatPrice'
import { Container } from './cartTemplateStyle'

interface IProps {
  cart: ICart
  readOnly?: boolean
}

const CartTemplate: FC<IProps> = ({ cart, readOnly = false }) => {
  const { removeCart } = useDeleteCart()

  return (
    <Container>
      <img src={cart.image} alt={cart.name} />
      <h1>{cart.name}</h1>
      <span>
        <p>Quantidade</p>
        <h6>{cart.quantity}</h6>
      </span>
      <h2>R$ {formatPrice(cart.totalPrice)}</h2>
      {!readOnly && (
        <h3
          onClick={() => {
            removeCart(cart.cartId)
          }}
        >
          X
        </h3>
      )}
    </Container>
  )
}

export default CartTemplate

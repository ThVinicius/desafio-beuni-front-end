import { FC } from 'react'
import { useCart } from '../../context/useCart'
import cartIcon from '../../assets/images/cart.svg'
import { CartContainer, CartCount, Icon } from './headerStyle'

const Cart: FC = () => {
  const { cart } = useCart()

  return (
    <CartContainer>
      <Icon src={cartIcon} alt="Icone do carrinho" />
      {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
    </CartContainer>
  )
}

export default Cart

import { FC } from 'react'
import { useCart } from '../../context/useCart'
import cartIcon from '../../assets/images/cart.svg'
import { CartContainer, CartCount, Icon } from './headerStyle'
import { Link } from 'react-router-dom'

const Cart: FC = () => {
  const { cart } = useCart()

  return (
    <Link to="/cart">
      <CartContainer>
        <Icon src={cartIcon} alt="Icone do carrinho" />
        {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
      </CartContainer>
    </Link>
  )
}

export default Cart

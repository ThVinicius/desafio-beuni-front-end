import { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../../context/useCart'
import useAddOrder from '../../../hooks/api/useAddOrder'
import formatPrice from '../../../utils/formatPrice'
import { Container, LinkBox } from './infoStyle'

const Info: FC = () => {
  const { cart } = useCart()
  const { addOrder } = useAddOrder()

  const totalPrice = useMemo(() => {
    let totalPrice = 0

    for (const aux of cart) {
      totalPrice += aux.totalPrice
    }

    return totalPrice
  }, [cart])

  return cart.length !== 0 ? (
    <Container>
      <h1>Preço total: R$ {formatPrice(totalPrice)}</h1>
      <button onClick={addOrder}>Finalizar compra</button>
    </Container>
  ) : (
    <LinkBox>
      <Link to="/home">
        Seu carrinho está vazio. Clique aqui para voltar as compras
      </Link>
    </LinkBox>
  )
}

export default Info

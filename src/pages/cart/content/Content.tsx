import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../../context/useCart'
import useGetCart from '../../../hooks/api/useGetCart'
import CartTemplate from '../../../components/cartTemplate/CartTemplate'
import Info from '../../../components/info/Info'
import { Box, Container, LinkBox } from './contentStyle'

const Content: FC = () => {
  const { cart } = useCart()
  useGetCart()

  return (
    <Container>
      <Box>
        {cart.map((cart, index) => (
          <CartTemplate cart={cart} key={index} />
        ))}
      </Box>
      {cart.length > 0 ? (
        <Info />
      ) : (
        <LinkBox>
          <Link to="/home">
            Seu carrinho está vazio. Clique aqui para voltar as compras
          </Link>
        </LinkBox>
      )}
    </Container>
  )
}

export default Content

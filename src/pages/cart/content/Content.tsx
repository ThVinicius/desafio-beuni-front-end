import { FC } from 'react'
import { useCart } from '../../../context/useCart'
import useGetCart from '../../../hooks/api/useGetCart'
import CartTemplate from '../cartTemplate/CartTemplate'
import Info from '../info/Info'
import { Box, Container } from './contentStyle'

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
      <Info />
    </Container>
  )
}

export default Content

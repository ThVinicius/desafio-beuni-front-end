import { FC, useMemo } from 'react'
import formatPrice from '../../../utils/formatPrice'
import { Container, Image, Info } from './productStyle'

interface IProps {
  name: string
  image: string
  stock: number
  price: number
}

const Product: FC<IProps> = ({ name, image, stock, price }) => {
  const isAvailable = useMemo(
    () => (stock <= 0 ? 'Indisponível' : 'Disponível'),
    [stock]
  )

  return (
    <Container>
      <Info isAvailable={isAvailable === 'Disponível'}>
        <h1>{name}</h1>
        <h2>{isAvailable}</h2>
        <h3>R$ {formatPrice(price)}</h3>
      </Info>
      <Image src={image} alt={name} />
    </Container>
  )
}

export default Product

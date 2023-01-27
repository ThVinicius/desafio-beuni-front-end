import { FC, useMemo, useState } from 'react'
import { IProduct } from '../../../types/productType'
import formatPrice from '../../../utils/formatPrice'
import Modal from '../modal/Modal'
import { Container, Image, Info } from './productStyle'

interface IProps {
  product: IProduct
}

const Product: FC<IProps> = ({ product }) => {
  const [openModal, setOpenModal] = useState(false)

  const isAvailable = useMemo(
    () => (product.stock <= 0 ? 'Indisponível' : 'Disponível'),
    [product.stock]
  )

  return (
    <>
      <Container onClick={() => setOpenModal(true)}>
        <Info isAvailable={isAvailable === 'Disponível'}>
          <h1>{product.name}</h1>
          <h2>{isAvailable}</h2>
          <h3>R$ {formatPrice(product.price)}</h3>
        </Info>
        <Image src={product.image} alt={product.name} />
      </Container>
      <Modal {...{ product, openModal, setOpenModal, isAvailable }} />
    </>
  )
}

export default Product

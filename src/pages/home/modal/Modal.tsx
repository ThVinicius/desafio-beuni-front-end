import { Dispatch, FC, SetStateAction } from 'react'
import { Rating } from 'react-simple-star-rating'
import { IProduct } from '../../../types/productType'
import formatPrice from '../../../utils/formatPrice'
import { BtnClose, Container, Content, Image, Info, Title } from './modalStyle'

interface IProps {
  product: IProduct
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<IProps> = ({ product, openModal, setOpenModal }) => {
  return (
    <>
      {openModal && (
        <Container>
          <Content>
            <Info>
              <Title>
                <h1>{product.name}</h1>
                <Rating readonly initialValue={product.rating} />
                <h3>{product.description}</h3>
              </Title>
              <div>
                <h2>Quantidade em estoque</h2>
                <p>{product.stock}</p>
              </div>
              <div>
                <h2>Quantidade minima</h2>
                <p>{product.minimumQuantity}</p>
              </div>
              <div>
                <h2>Frete grátis?</h2>
                <p>{product.hasFreeShipping ? 'Sim' : 'Não'}</p>
              </div>
              <div>
                <h2>Preço</h2>
                <p>R$ {formatPrice(product.price)}</p>
              </div>
            </Info>
            <Image src={product.image} alt={product.name} />
            <BtnClose
              onClick={() => {
                setOpenModal(false)
              }}
            >
              X
            </BtnClose>
          </Content>
        </Container>
      )}
    </>
  )
}

export default Modal

import { Dispatch, FC, SetStateAction } from 'react'
import CartTemplate from '../../../components/cartTemplate/CartTemplate'
import Info from '../../../components/info/Info'
import { IOrder } from '../../../types/orderType'
import { Box, BtnClose, Container, Content } from './modalStyle'

interface IProps {
  order: IOrder
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<IProps> = ({ order, openModal, setOpenModal }) => {
  return (
    <Container>
      <Content>
        <Box>
          {order.products.map((product, index) => (
            <CartTemplate cart={product} readOnly={true} key={index} />
          ))}
        </Box>
        <Info readOnly={true} price={order.totalPrice} />
        <BtnClose onClick={() => setOpenModal(false)}>X</BtnClose>
      </Content>
    </Container>
  )
}

export default Modal

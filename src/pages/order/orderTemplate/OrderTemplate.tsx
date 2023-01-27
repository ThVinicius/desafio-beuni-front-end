import { FC, useState } from 'react'
import { IOrder } from '../../../types/orderType'
import formatPrice from '../../../utils/formatPrice'
import Modal from '../modal/Modal'
import { Container } from './orderTemplateStyle'

interface IProps {
  order: IOrder
}

const OrderTemplate: FC<IProps> = ({ order }) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    if (openModal) return

    setOpenModal(true)
  }

  return (
    <Container onClick={handleOpenModal}>
      <span>
        <h1>Data do pedido</h1>
        <h2>{order.orderDate}</h2>
      </span>
      <span>
        <h1>Preço Total</h1>
        <h2>R$ {formatPrice(order.totalPrice)}</h2>
      </span>
      {openModal && <Modal {...{ order, openModal, setOpenModal }} />}
    </Container>
  )
}

export default OrderTemplate

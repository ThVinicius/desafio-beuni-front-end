import { FC } from 'react'
import useGetOrder from '../../../hooks/api/useGetOrder'
import OrderTemplate from '../orderTemplate/OrderTemplate'
import { Container } from './contentStyle'

const Content: FC = () => {
  const { orders, loadingGetOrder } = useGetOrder()

  return (
    <Container>
      {!loadingGetOrder &&
        orders?.map((order, index) => (
          <OrderTemplate order={order} key={index} />
        ))}
    </Container>
  )
}

export default Content

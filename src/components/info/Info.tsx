import { FC, useMemo } from 'react'
import { useCart } from '../../context/useCart'
import useAddOrder from '../../hooks/api/useAddOrder'
import formatPrice from '../../utils/formatPrice'
import { Container } from './infoStyle'

interface IProps {
  readOnly?: boolean
  price?: number
}

const Info: FC<IProps> = ({ readOnly = false, price }) => {
  const { cart } = useCart()
  const { addOrder } = useAddOrder()

  const totalPrice = !readOnly
    ? useMemo(() => {
        let totalPrice = 0

        for (const aux of cart) {
          totalPrice += aux.totalPrice
        }

        return totalPrice
      }, [cart])
    : price!

  return (
    <Container>
      <h1>Preço total: R$ {formatPrice(totalPrice)}</h1>
      {!readOnly && <button onClick={addOrder}>Finalizar compra</button>}
    </Container>
  )
}

export default Info

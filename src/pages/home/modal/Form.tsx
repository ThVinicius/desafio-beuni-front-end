import { ChangeEvent, FC, FormEvent, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { useCart } from '../../../context/useCart'
import useAddCart from '../../../hooks/api/useAddCart'
import { IProduct } from '../../../types/productType'
import formatPrice from '../../../utils/formatPrice'
import { Box, BtnAddCart } from './modalStyle'

interface IProps {
  product: IProduct
  isAvailable: 'Indisponível' | 'Disponível'
}

const Form: FC<IProps> = ({ product, isAvailable }) => {
  const [quantity, setQuantity] = useState(product.minimumQuantity.toString())
  const { addCart } = useAddCart()
  const { cart } = useCart()

  const isAdd = useMemo(
    () => cart.some(cart => cart.productId === product.id),
    [cart]
  )

  const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value.replace(/\D/g, ''))
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()

    if (Number(quantity) < product.minimumQuantity) {
      return toast.error(
        `A quantidade minima de compra desse produto é ${product.minimumQuantity}`
      )
    }

    if (Number(quantity) > product.stock) {
      return toast.error('A quantidade de compra não pode exceder o estoque')
    }

    addCart({ productId: product.id, quantity: Number(quantity) })
  }

  return (
    <>
      {isAvailable === 'Disponível' && !isAdd && (
        <Box>
          <form onSubmit={submit}>
            <span>
              <p>quantidade</p>
              <input
                type="text"
                value={quantity}
                onChange={e => handleQuantity(e)}
              />
            </span>

            <p>Total R$ {formatPrice(product.price * Number(quantity))}</p>
            <BtnAddCart type="submit">Adicionar ao carrinho</BtnAddCart>
          </form>
        </Box>
      )}
    </>
  )
}

export default Form

import {
  useState,
  useContext,
  createContext,
  FC,
  Dispatch,
  SetStateAction
} from 'react'
import { ICart } from '../types/cartType'

interface IProps {
  children: JSX.Element | JSX.Element[]
}

type ContextType = {
  cart: ICart[] | []
  setCart: Dispatch<SetStateAction<ICart[]>>
}

const CartContext = createContext<ContextType>({
  cart: [],
  setCart: () => {}
})

const CartProvider: FC<IProps> = ({ children }) => {
  const [cart, setCart] = useState<ICart[] | []>([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }

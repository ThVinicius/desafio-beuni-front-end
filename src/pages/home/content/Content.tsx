import { FC } from 'react'
import useGetProducts from '../../../hooks/api/useGetProducts'
import Product from '../product/Product'
import { Container } from './contentStyle'

const Content: FC = () => {
  const { products, loadingGetProducts } = useGetProducts()
  return (
    <Container>
      <>
        {!loadingGetProducts &&
          products!.map(({ name, image, stock, price }, index) => (
            <Product {...{ name, image, stock, price }} key={index} />
          ))}

        {/* {!loadingGetProducts && (
          <Product
            name={products![0].name}
            image={products![0].image}
            stock={products![0].stock}
            price={products![0].price}
          />
        )} */}
      </>
    </Container>
  )
}

export default Content

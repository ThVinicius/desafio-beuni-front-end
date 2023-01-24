import { FC } from 'react'
import useGetProducts from '../../../hooks/api/useGetProducts'
import Filter from '../filter/Filter'
import Product from '../product/Product'
import ContentSkeleton from './ContentSkeleton'
import { Container, Products } from './contentStyle'

const Content: FC = () => {
  const { products, loadingGetProducts, getProducts } = useGetProducts()

  return (
    <Container>
      <Filter getProducts={getProducts} />
      {!loadingGetProducts ? (
        <Products>
          {products?.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </Products>
      ) : (
        <ContentSkeleton />
      )}
    </Container>
  )
}

export default Content

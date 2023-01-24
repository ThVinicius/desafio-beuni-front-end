import { FC } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import { Products } from './contentStyle'
import { Container as Product, Info } from '../product/productStyle'
import { Container as Filter, Form } from '../filter/filterStyle'

const ContentSkeleton: FC = () => {
  return (
    <>
      <Filter>
        <Form>
          <Skeleton width={350} height={45} />
        </Form>
      </Filter>
      <Products>
        {[...Array(9)].map((ele, index) => (
          <Product isSkeleton={true} key={index}>
            <Info>
              <Skeleton width={200} />
              <Skeleton width={150} />
              <Skeleton width={100} />
            </Info>
            <Skeleton
              width={170}
              style={{
                height: '200px',
                borderRadius: '0 10px 10px 0'
              }}
            />
          </Product>
        ))}
      </Products>
    </>
  )
}

export default ContentSkeleton

import { FC, useEffect, useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { Container, Form } from './filterStyle'

interface IProps {
  getProducts: (query?: string) => void
}

const Filter: FC<IProps> = ({ getProducts }) => {
  const [filterByName, setFilterByName] = useState('')

  useEffect(() => getProducts(filterByName), [filterByName])

  return (
    <Container>
      <Form>
        <p>Filtrar: </p>
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          placeholder="Nome"
          onChange={e => setFilterByName(e.target.value)}
        />
      </Form>
    </Container>
  )
}

export default Filter

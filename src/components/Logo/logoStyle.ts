import styled from 'styled-components'

const Container = styled.div`
  width: fit-content;
  display: flex;
  gap: 8px;
  align-items: baseline;

  h1 {
    font: normal 700 40px 'Lato', sans-serif;
  }

  img {
    height: 38px;
  }

  @media (max-width: 525px) {
    h1 {
      font: normal 700 28px 'Lato', sans-serif;
    }

    img {
      height: 28px;
    }
  }
`

export { Container }

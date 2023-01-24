import styled from 'styled-components'

const Container = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f89c71;
`

const Logo = styled.div`
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
`

export { Container, Logo }

import styled from 'styled-components'

const Container = styled.div`
  width: 75%;
  height: fit-content;
  padding: 10px 0;
  display: flex;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font: normal 400 18px 'Lato', sans-serif;
  }

  h3 {
    font: normal 700 30px 'Lato', sans-serif;
    color: red;
    cursor: pointer;
  }

  @media (max-width: 860px) {
    width: 100%;
  }

  @media (max-width: 670px) {
    img {
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }

    h1,
    span,
    h2 {
      width: 25%;
    }

    h1,
    h2,
    p,
    h6 {
      font: normal 400 12px 'Lato', sans-serif;
    }

    span {
      gap: 5px;
      font: normal 400 12px 'Lato', sans-serif;
    }

    h3 {
      font: normal 700 18px 'Lato', sans-serif;
    }
  }
`

export { Container }

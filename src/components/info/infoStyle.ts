import styled from 'styled-components'

const Container = styled.div`
  width: fit-content;
  height: 80px;
  padding: 10px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  border-radius: 15px;

  button {
    padding: 10px 20px;
    background-color: green;
    color: #fff;
    border-radius: 15px;
    font: normal 700 20px 'Roboto', sans-serif;
    cursor: pointer;
  }

  h1 {
    font: normal 700 20px 'Roboto', sans-serif;
  }
`

export { Container }

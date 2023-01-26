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
`

const LinkBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 15px;
  font: normal 700 22px 'Lato', sans-serif;
`

export { Container, LinkBox }

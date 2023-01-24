import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
  display: flex;
  justify-content: center;
`

const Form = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  p {
    font: normal 500 18px 'Lato', sans-serif;
  }

  input {
    width: 90%;
    height: 45px;
    border-radius: 5px;
    padding-left: 5px;
    font: normal 500 18px 'Lato', sans-serif;

    ::placeholder {
      font: normal 500 18px 'Lato', sans-serif;
    }
  }
`

export { Container, Form }

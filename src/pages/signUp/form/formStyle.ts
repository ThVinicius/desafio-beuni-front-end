import styled from 'styled-components'

const Container = styled.form`
  width: 500px;
  height: fit-content;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  a {
    margin-top: 20px;
    font: normal 700 18px 'Lato', sans-serif;
    color: #000;
    text-decoration: underline;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`

const InputBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  p {
    font: normal 500 18px 'Lato', sans-serif;
  }

  input {
    width: 75%;
    height: 35px;
    padding-left: 7px;
    font: normal 500 20px 'Lato', sans-serif;
  }
`

const Button = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  color: #000;
  background-color: #56e0ff;
  font: normal 500 21px 'Lato', sans-serif;
  border-radius: 7px;
`

export { Container, InputBox, Button }

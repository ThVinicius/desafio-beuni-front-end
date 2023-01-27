import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const Content = styled.div`
  width: 80%;
  height: 90%;
  padding: 30px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1150px) {
    width: 95%;
    flex-direction: column;
  }
`

const Box = styled.div`
  width: 100%;
  height: calc(100%-80px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const BtnClose = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 35px;
  background-color: red;
  color: #fff;
  position: absolute;
  top: -2%;
  left: -2%;
  font: normal 700 21px 'Lato', sans-serif;
  cursor: pointer;
`

export { Container, Content, Box, BtnClose }

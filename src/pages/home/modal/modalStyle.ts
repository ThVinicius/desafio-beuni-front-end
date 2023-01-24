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
`

const Content = styled.div`
  width: 80%;
  height: 90%;
  padding: 30px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
`

const Image = styled.img`
  width: 500px;
  height: 100%;
`

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  overflow-y: auto;

  h1 {
    font: normal 700 25px 'Lato', sans-serif;
  }

  h3 {
    font: normal 500 21px 'Lato', sans-serif;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    h2 {
      font: normal 700 21px 'Lato', sans-serif;
    }

    p {
      font: normal 500 18px 'Lato', sans-serif;
    }
  }
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

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export { Container, Content, Image, Info, BtnClose, Title }

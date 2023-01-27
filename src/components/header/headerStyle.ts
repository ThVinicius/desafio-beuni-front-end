import styled from 'styled-components'

const Container = styled.header`
  width: 100vw;
  height: 80px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f89c71;
  position: relative;

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`

const Icon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`

interface ICustomerMenu {
  isOpen: boolean
}

const Menu = styled.div<ICustomerMenu>`
  position: absolute;
  top: 80px;
  left: 0;
  width: 350px;
  overflow-y: ${props => (props.isOpen ? 'visible' : 'hidden')};
  height: ${props => (props.isOpen ? '130px' : '0')};
  padding: ${props => (props.isOpen ? '10px' : '0')};
  background-color: #233040;
  border-radius: 0 0 15px 0;
  transition: height 0.3s ease-out 0.001s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  span {
    display: flex;
    align-items: center;
    gap: 15px;
    font: normal 600 18px 'Lato', sans-serif;
    color: #fff;
    cursor: pointer;
    overflow: hidden;
  }

  img {
    width: 35px;
    height: 35px;
  }
`

const CartContainer = styled.div`
  position: relative;
`

const CartCount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: red;
  color: #fff;
  position: absolute;
  bottom: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal 700 18px 'Roboto', sans-serif;
`

export { Container, Icon, Menu, CartCount, CartContainer }

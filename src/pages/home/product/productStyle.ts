import styled from 'styled-components'

const Container = styled.div`
  width: 428px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);

  :hover {
    outline: 3px solid green;
  }
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 0 10px 10px 0;
`

interface IInfo {
  isAvailable: boolean
}

const Info = styled.div<IInfo>`
  width: fit-content;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font: normal 700 20px 'Lato', sans-serif;

  h2 {
    color: ${props => (props.isAvailable ? 'green' : 'red')};
  }
`

export { Container, Image, Info }

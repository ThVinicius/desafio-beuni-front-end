import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
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

const LinkBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 15px;
  font: normal 700 22px 'Lato', sans-serif;
`

export { Container, Box, LinkBox }

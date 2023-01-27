import styled from 'styled-components'

const Container = styled.div`
  width: 55%;
  height: fit-content;
  padding: 10px 40px;
  display: flex;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

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
`

export { Container }

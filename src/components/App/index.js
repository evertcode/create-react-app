import React from 'react'
import styled, { keyframes } from 'styled-components'

const stretchAnimation = keyframes`
0% {
  opacity: 0;
  transform: translateY(100px);
}
20% {
  opacity: 1;
  transform: translateY(0px);
}
85% {
  opacity: 1;
  transform: translateY(0px);
}
100% {
  opacity: 0;
  transform: translateY(-10px);
}
`
const Content = styled.div`
  text-align: center;
`
const H1 = styled.h1``
const H2 = styled.h2`
  animation: ${stretchAnimation} 3s ease-in infinite;
`

const App = ({ name }) => (
  <Content>
    <H1>Hello {name}!</H1>
    <H2>Start editing to see some magic happen!</H2>
  </Content>
)

export default App

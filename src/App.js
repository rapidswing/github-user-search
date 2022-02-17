import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import theme from 'theme/theme.json'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`

const Container = styled.div`
  margin: auto;
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        
      </Container>
    </>
  )
}

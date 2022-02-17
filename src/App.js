import { useState } from 'react'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import { useOctokit } from 'hooks/UseOctokit'
import SearchBar from 'components/SearchBar/SearchBar'
import TitleBar from 'components/TitleBar/TitleBar'
import UserCard from 'components/UserCard/UserCard'

import themes from 'theme/theme.json'

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

  body {
    background: ${({ theme }) => theme}
  }
`

const Container = styled.div`
  
`

export default function App() {
  const [selectedTheme, setSelected] = useState(themes[0])
  const { data, isLoading, error } = useOctokit('octocat')

  return (
    <>
      <ThemeProvider theme={selectedTheme} >
        <GlobalStyle />
        <Container>
          <TitleBar />
          <SearchBar />
          {data && <UserCard user={data} />}
        </Container>
      </ThemeProvider>
    </>
  )
}

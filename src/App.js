import { useEffect, useState } from 'react'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import WebFont from 'webfontloader'

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

  html {
    font-size: 10px;  // 10px = 1rem
  }

  body {
    background: ${props => props.theme.colors.offWhite};
    font-family: ${props => props.theme.font}
  }
`

const Container = styled.div`
  padding: 3.1rem 2.4rem 0; 
  width: 375px;
`

const StyledSearchBar = styled(SearchBar)`
  margin-top: 3.6rem;
`

export default function App() {
  const [selectedTheme, setSelected] = useState(themes[0])
  const { data, isLoading, error } = useOctokit('octocat')

  useEffect(() => {
    WebFont.load({
      google: {
        families: [`${selectedTheme.font}`]
      }
    })
  }, [selectedTheme.font])

  return (
    <>
      <ThemeProvider theme={selectedTheme} >
        <GlobalStyle />
        <Container>
          <TitleBar />
          <StyledSearchBar />
          {data && <UserCard user={data} />}
        </Container>
      </ThemeProvider>
    </>
  )
}

import { useEffect, useState } from 'react'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useOctokit } from 'hooks/UseOctokit'
import styled from 'styled-components'
import WebFont from 'webfontloader'

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
    background: ${props => props.theme.colors.background};
    font-family: ${props => props.theme.font};
  }
`

const Container = styled.div`
  margin: 3.1rem auto 0;
  width: 327px;

  @media (min-width: 768px) {
    margin-top: 14rem;
    width: 573px;
  }

  @media (min-width: 1440px) {
    margin-top: 14.2rem;
    width: 730px;
  }
`

const StyledSearchBar = styled(SearchBar)`
  margin-top: 3.6rem;
`

const StyledUserCard = styled(UserCard)`
  margin-top: 1.6rem;

  @media (min-width: 768px) {
    margin-top: 2.4rem;
  }
`

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes['light'])
  const {
    clearError,
    data,
    error,
    isLoading,
    setName
  } = useOctokit('octocat')

  useEffect(() => {
    WebFont.load({
      google: {
        families: [`${selectedTheme.font}`]
      }
    })
  }, [selectedTheme.font])

  const toggleTheme = () => {
    if (selectedTheme.name === 'light') {
      setSelectedTheme(themes['dark'])
    } else {
      setSelectedTheme(themes['light'])
    }
  }

  return (
    <>
      <ThemeProvider theme={selectedTheme} >
        <GlobalStyle />
        <Container>
          <TitleBar theme={selectedTheme} toggleTheme={toggleTheme} />
          <StyledSearchBar 
            clearError={clearError}
            error={error}
            isLoading={isLoading}
            setName={setName}
          />
          {data ? <StyledUserCard user={data} /> : undefined}
        </Container>
      </ThemeProvider>
    </>
  )
}
import styled from "styled-components"

const Title = styled.div`

`

const ToggleThemeButton = styled.div`

`

const TitleBar = () => {
  return (
    <>
      <Title>devfinder</Title>
      <ToggleThemeButton></ToggleThemeButton>
    </>
  )
}

export { TitleBar };
import styled from "styled-components"

import IconMoon from 'assets/icon-moon.svg'
import IconSun from 'assets/icon-sun.svg'

const Title = styled.div`

`

const ToggleThemeButton = styled.div`

`

const StyledTitleBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const TitleBar = () => (
  <StyledTitleBar>
    <Title>devfinder</Title>
    <ToggleThemeButton>
      <span>DARK</span>
      <img src={IconMoon} alt="Moon" />
    </ToggleThemeButton>
  </StyledTitleBar>
)

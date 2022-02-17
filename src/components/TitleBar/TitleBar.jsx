import styled from 'styled-components'

import IconMoon from 'assets/icon-moon.svg'
import IconSun from 'assets/icon-sun.svg'

const Title = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  line-height: 3.9rem;
`

const ToggleThemeButton = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.25rem;
  line-height: 1.9rem;

  img {
    margin-left: 1.6rem;
  }
`

const StyledTitleBar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TitleBar = () => (
  <StyledTitleBar>
    <Title>devfinder</Title>
    <ToggleThemeButton>
      <span>DARK</span>
      <img src={IconMoon} alt="Moon" />
    </ToggleThemeButton>
  </StyledTitleBar>
)

export default TitleBar;
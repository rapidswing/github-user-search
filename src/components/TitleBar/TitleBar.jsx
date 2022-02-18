import styled from 'styled-components'

import IconMoon from 'assets/icon-moon.svg'
import IconSun from 'assets/icon-sun.svg'

const UnstyledTitleBar = ({ className, children, theme, toggleTheme }) => (
  <div className={className}>
    <Title>devfinder</Title>
    <ToggleTheme onClick={() => toggleTheme()}>
      <span>{theme.name === 'light' ? 'LIGHT' : 'DARK'}</span>
      <img
        src={theme.name === 'light' ? IconMoon : IconSun}
        alt={theme.name === 'light' ? 'Dark' : 'Light'}
      />
    </ToggleTheme>
  </div>

)

const TitleBar = styled(UnstyledTitleBar)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.div`
  color: ${props => props.theme.colors.title};
  font-size: 2.6rem;
  font-weight: bold;
  line-height: 3.9rem;
`

const ToggleTheme = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.25rem;
  line-height: 1.9rem;

  span {
    color: ${props => props.theme.colors.themeToggle};
  }

  img {
    margin-left: 1.6rem;
  }
`

export default TitleBar;
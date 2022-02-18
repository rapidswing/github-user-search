import styled from 'styled-components'

const UnstyledBio = ({ className, user }) => (
  <div className={className}>
    {user.bio || 'This profile has no bio'}
  </div>
)

const Bio = styled(UnstyledBio)`
  color: ${props => props.theme.colors.bio};
  font-size: 1.3rem;
  line-height: 2.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`

export default Bio
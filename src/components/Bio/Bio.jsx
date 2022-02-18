import styled from 'styled-components'

const UnstyledBio = ({ className, children, user }) => (
  <div className={className}>
    {user.bio || 'No bio available.'}
  </div>
)

const Bio = styled(UnstyledBio)`
  color: ${props => props.theme.colors.bio};
  font-size: 1.3rem;
  line-height: 2.5rem;
`

export default Bio
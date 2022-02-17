import styled from 'styled-components'

const UnstyledBio = ({ className, children, user }) => (
  <div className={children}>
    {user.bio || 'No bio available.'}
  </div>
)

const Bio = styled(UnstyledBio)``

export default Bio
import styled from 'styled-components'

const UnstyledAvatar = ({ className, children, user }) => (
  <div className={className}>
    <img src={user.avatar_url} alt="User avatar" />
  </div>
)

const Avatar = styled(UnstyledAvatar)`
  img {
    border-radius: 3.5rem;
    height: 7rem;
    width: 7rem;
  }
`

export default Avatar
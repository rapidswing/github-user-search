import styled from 'styled-components'

const UnstyledAvatar = ({ className, children, user }) => (
  <div className={className}>
    <img src={user.avatar_url} alt="User avatar" />
  </div>
)

const Avatar = styled(UnstyledAvatar)`
  align-items: center;
  display: flex;
  flex-direction: row;
  
  img {
    border-radius: 3.5rem;
    height: 7rem;
    width: 7rem;

    @media (min-width: 768px) {
      border-radius: 5.85rem;
      height: 11.7rem;
      width: 11.7rem;
    }
  }
`

export default Avatar
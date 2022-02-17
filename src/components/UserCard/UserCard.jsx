import styled from 'styled-components'

import BasicInfo from 'components/BasicInfo/BasicInfo'
import Socials from 'components/SocialBar/SocialBar'
import StatsBar from 'components/StatsBar/StatsBar'

const Avatar = styled.div`
  img {
    border-radius: 3.5rem;
    height: 7rem;
    width: 7rem;
  }
`

const Bio = styled.div`
`

const StyledUserCard = styled.div`

`

export const UserCard = ({ user }) => {
  return (
    <StyledUserCard>
      <Avatar>
        <img src={user.avatar_url} alt="User avatar" />
      </Avatar>
      <BasicInfo user={user} />
      <Bio user={user}>{user.bio || 'No bio available.'}</Bio>
      <StatsBar user={user} />
      <Socials user={user} />
    </StyledUserCard>
  )
}

export default UserCard
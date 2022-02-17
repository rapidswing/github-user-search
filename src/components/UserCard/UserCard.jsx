import styled from 'styled-components'

import BasicInfo from 'components/BasicInfo/BasicInfo'
import Socials from 'components/SocialBar/SocialBar'
import StatsBar from 'components/StatsBar/StatsBar'

const StyledUserCard = styled.div``

const Bio = styled.div`
`

export const UserCard = ({ user }) => {
  return (
    <StyledUserCard>
      <img src={user.avatar_url} alt="User avatar" />
      <BasicInfo user={user} />
      <Bio user={user}>{user.bio || 'No bio available.'}</Bio>
      <StatsBar user={user} />
      <Socials user={user} />
    </StyledUserCard>
  )
}

export default UserCard
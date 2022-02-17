import styled from 'styled-components'

import BasicInfo from 'components/BasicInfo/BasicInfo'
import Socials from 'components/SocialBar/SocialBar'
import StatsBar from 'components/StatsBar/StatsBar'

const UnstyledUserCard = ({ className, children, user }) => {
  return (
    <div className={className}>
      <Avatar>
        <img src={user.avatar_url} alt="User avatar" />
      </Avatar>
      <BasicInfo user={user} />
      <Bio user={user}>{user.bio || 'No bio available.'}</Bio>
      <WrappedStatsBar user={user} />
      <WrappedSocials user={user} />
    </div>
  )
}

const Avatar = styled.div`
  img {
    border-radius: 3.5rem;
    height: 7rem;
    width: 7rem;
  }
`

const Bio = styled.div`
`

const WrappedStatsBar = styled(StatsBar)``
const WrappedSocials = styled(Socials)``

const UserCard = styled(UnstyledUserCard)`
  background: ${props => props.theme.colors.white};
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 3.2rem 2.4rem 4.8rem;

  ${Bio} {
    grid-column: 1 / 3;
  }

  ${WrappedStatsBar} {
    grid-column: 1 / 3;
  }

  ${WrappedSocials} {
    grid-column: 1 / 3;
  }
`

export default UserCard
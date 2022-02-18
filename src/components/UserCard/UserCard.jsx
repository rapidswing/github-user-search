import styled from 'styled-components'

import Avatar from 'components/Avatar/Avatar'
import BasicInfo from 'components/BasicInfo/BasicInfo'
import Bio from 'components/Bio/Bio'
import SocialBar from 'components/SocialBar/SocialBar'
import StatsBar from 'components/StatsBar/StatsBar'

const StyledBasicInfo = styled(BasicInfo)`
  margin-left: 1.9rem;
`

const StyledBio = styled(Bio)`
  margin-top: 3.3rem;
`

const StyledStatsBar = styled(StatsBar)`
  margin-top: 2.4rem;
`

const StyledSocialBar = styled(SocialBar)`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
`

const UnstyledUserCard = ({ className, children, user }) => {
  return (
    <div className={className}>
      <Avatar user={user} />
      <StyledBasicInfo user={user} />
      <StyledBio user={user} />
      <StyledStatsBar user={user} />
      <StyledSocialBar user={user} />
    </div>
  )
}

const UserCard = styled(UnstyledUserCard)`
  background: ${props => props.theme.colors.userCardBg};
  border-radius: 1.5rem;
  box-shadow: ${props => props.theme.name === 'light' ? '0 1.6rem 3rem -0.1rem rgba(70, 96, 187, 0.2)' : 'none'};
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 3.2rem 2.4rem 4.8rem;

  ${StyledBio} {
    grid-column: 1 / 3;
  }

  ${StyledStatsBar} {
    grid-column: 1 / 3;
  }

  ${StyledSocialBar} {
    grid-column: 1 / 3;
  }
`

export default UserCard
import styled from 'styled-components'

import Avatar from 'components/Avatar/Avatar'
import BasicInfo from 'components/BasicInfo/BasicInfo'
import Bio from 'components/Bio/Bio'
import SocialBar from 'components/SocialBar/SocialBar'
import StatsBar from 'components/StatsBar/StatsBar'

const StyledBasicInfo = styled(BasicInfo)`
  margin-left: 1.9rem;
`

const UnstyledUserCard = ({ className, children, user }) => {
  return (
    <div className={className}>
      <Avatar user={user} />
      <StyledBasicInfo user={user} />
      <Bio user={user} />
      <StatsBar user={user} />
      <SocialBar user={user} />
    </div>
  )
}

const UserCard = styled(UnstyledUserCard)`
  background: ${props => props.theme.colors.userCardBg};
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 3.2rem 2.4rem 4.8rem;

  ${Bio} {
    grid-column: 1 / 3;
  }

  ${StatsBar} {
    grid-column: 1 / 3;
  }

  ${SocialBar} {
    grid-column: 1 / 3;
  }
`

export default UserCard
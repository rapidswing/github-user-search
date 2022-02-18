import styled from 'styled-components'

import Avatar from 'components/Avatar/Avatar'
import BasicInfo from 'components/BasicInfo/BasicInfo'
import Bio from 'components/Bio/Bio'
import SocialBar from 'components/SocialBar/SocialBar'
import StatsBar from 'components/StatsBar/StatsBar'

const StyledAvatar = styled(Avatar)`
  @media (min-width: 1440px) {
    padding-top: 0.5rem;
  }
`

const StyledBasicInfo = styled(BasicInfo)`
  margin-left: 1.9rem;
  
  @media (min-width: 768px) {
    margin-left: 4rem;
  }

  @media (min-width: 1440px) {
    margin-top: 0rem;
    margin-left: 0;
  }
`

const StyledBio = styled(Bio)`
  margin-top: 3.3rem;

  @media (min-width: 768px) {
    margin-top: 2.4rem;
  }

  @media (min-width: 1440px) {
    margin-left: 0;
    margin-top: 1.2rem;
  }
`

const StyledStatsBar = styled(StatsBar)`
  margin-top: 2.4rem;

  @media (min-width: 1440px) {
    margin-top: 1.6rem;
  }
`

const StyledSocialBar = styled(SocialBar)`
  margin-top: 2.4rem;

  @media (min-width: 1440px) {
    margin-top: 3.6rem;
  }
`

const UnstyledUserCard = ({ className, children, user }) => {
  return (
    <div className={className}>
      <StyledAvatar user={user} />
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
  
  @media (min-width: 768px) {
    padding: 4rem;
  }

  @media (min-width: 1440px) {
    display: grid;
    gap: 0 3.6rem;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto 1fr 1fr;
    padding: 4.3rem 4.8rem 4.8rem;

    ${StyledAvatar} {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    ${StyledBio} {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    ${StyledStatsBar} {
      grid-column: 2 / 3;
    }

    ${StyledSocialBar} {
      grid-column: 2 / 3;
    }
  }
`

export default UserCard
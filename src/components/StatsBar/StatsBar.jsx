import styled from 'styled-components'

const Label = styled.div`
  color: ${props => props.theme.colors.statsLabel};
  display: flex;
  font-size: 1.1rem;
  line-height: 1.6rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    font-size: 1.3rem;
    justify-content: left;
    line-height: 1.9rem;

    :nth-of-type(1) {
      padding-left: 1.6rem;
    }
  }
`

const Value = styled.div`
  color: ${props => props.theme.colors.statsValue};
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.4rem;
  justify-content: center;

  @media (min-width: 768px) {
    font-size: 2.2rem;
    justify-content: left;
    line-height: 3.3rem;

    :nth-of-type(4) {
      padding-left: 1.6rem;
    }
  }
`

const UnstyledStatsBar = ({ className, user }) => {
  return (
    <div className={className}>
      <Label>Repos</Label>
      <Label>Followers</Label>
      <Label>Following</Label>
      <Value>{user.public_repos || '0'}</Value>
      <Value>{user.followers || '0'}</Value>
      <Value>{user.following || '0'}</Value>
    </div>
  )
}

const StatsBar = styled(UnstyledStatsBar)`
  background: ${props => props.theme.colors.statsBg};
  border-radius: 1rem;
  display: grid;
  gap: 0.6rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr;
  padding: 1.85rem 1.45rem;

  @media (min-width: 768px) {
    gap: 0.2rem;
  }
`

export default StatsBar
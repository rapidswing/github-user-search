import styled from 'styled-components'

const Label = styled.div`
  color: ${props => props.theme.colors.statsLabel};
  display: flex;
  justify-content: center;
`

const Value = styled.div`
  color: ${props => props.theme.colors.statsValue};
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.4rem;
  justify-content: center;
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
  align-items: center;
  background: ${props => props.theme.colors.statsBg};
  border-radius: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  padding: 1.85rem 1.45rem;
`

export default StatsBar
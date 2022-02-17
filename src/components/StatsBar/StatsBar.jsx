import styled from 'styled-components'

const StyledStatsBar = styled.div`
`

const StatsBar = ({ user }) => {
  return (
    <StyledStatsBar>
      <div>Repos</div>
      <div>Followers</div>
      <div>Following</div>
      <div>{user.public_repos}</div>
      <div>{user.followers}</div>
      <div>{user.following}</div>
    </StyledStatsBar>
  )
}

export default StatsBar
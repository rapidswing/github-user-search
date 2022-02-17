import styled from 'styled-components'

const StyledStatsBar = styled.div`
`

const StatsBar = ({ user }) => {
  return (
    <StyledStatsBar>
       {/* {console.log(user)} */}
      <div>Repos</div>
      <div>Followers</div>
      <div>Following</div>
      <div>{user.public_repos || '0'}</div>
      <div>{user.followers || '0'}</div>
      <div>{user.following || '0'}</div>
    </StyledStatsBar>
  )
}

export default StatsBar
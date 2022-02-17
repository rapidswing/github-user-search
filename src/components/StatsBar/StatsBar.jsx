import styled from 'styled-components'

const UnstyledStatsBar = ({ className, user }) => {
  return (
    <div className={className}>
      <div>Repos</div>
      <div>Followers</div>
      <div>Following</div>
      <div>{user.public_repos || '0'}</div>
      <div>{user.followers || '0'}</div>
      <div>{user.following || '0'}</div>
    </div>
  )
}

const StatsBar = styled(UnstyledStatsBar)``

export default StatsBar